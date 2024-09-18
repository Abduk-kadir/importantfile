import React,{Component} from 'react'
import queryString from 'query-string'
import myhttp from './myhttpservice'
import LeftPanel from './leftPanel'
class Books extends Component{
    state={
       books:{} ,
       cartarr:[],
       cartview:false,
       settingview:false,
       settingjs:{printType:true,languages:true,filter:true,orderby:true,max:8},
       
       
    }
    handleChange=(e)=>{
      let s1={...this.state}
      let {currentTarget:input}=e
      if(input.type=='checkbox')
      {
         console.log(input.name)
         console.log(input.checked)
          s1.settingjs[input.name]=input.checked;
      }
      else{
      s1.settingjs[input.name]=input.value;
      }
      
      this.setState(s1);
    }
   
 makecheckbox(name,value,label){
  return(
  <div class="form-check ms-3">
       <input class="form-check-input" type="checkbox" name={name} checked={value==true}  onChange={this.handleChange}/>
       <label class="form-check-label" for="flexCheckDefault">
       {label}
       </label>
      </div>
  )
 }
    
  makesettingveiw(){
    let {settingjs,settingarr}=this.state
    let {printType,max,languages,filter,orderby}=settingjs
    return(
      <div className='row ms-3'>
       <h4 className='text-danger'>Select option for  filtering on leftPanel </h4>
      
       {this.makecheckbox('printType',printType,'--( Restrict to books or magzines)')}
       {this.makecheckbox('languages',languages,'--( Restrict to the volumes returned to those that are tagged with specified language)')}
       {this.makecheckbox('filter',filter,'--( filter search results by volume type and availablity)')}
       {this.makecheckbox('orderby',orderby,'--(order by volume search result)')}

       <label className='form-label text-success'>No of entries on a page</label>
       <div className='col-4'>
       <input type="Number"  className='form-control' name='max' value={max} onChange={this.handleChange}/>
      </div>
      </div>

    )
  }

   async fetchData(url){
     let {searchText,startIndex,maxResults}=queryString.parse(this.props.location.search)
     
     let {pathname}=this.props.location
     if(pathname=='/myself')
      {
        let s1={...this.state}
        s1.cartview=true
        s1.settingview=false
        this.setState(s1)
       
      }
      else if(pathname=='/setting'){
        let s1={...this.state}
        s1.settingview=true;
        s1.cartview=false
        this.setState(s1)
      }
      else{
       
        let response=await myhttp.get(url)
        let {data}=response;
        let {cartarr}=this.state
        let newdata=data.items
        let arr=newdata.map(elem=>{
          let f=cartarr.find(val=>val.id==elem.id)
          if(f){
            elem.isInCart=true;
          }
          return elem
        })
        data.items=arr;
        this.setState({books:data,cartview:false,settingview:false})
    

      }
      
    
      
   }
   handleIncrement=(incr)=>{
    
    let qparams=queryString.parse(this.props.location.search)
     qparams.startIndex=+qparams.startIndex+incr
    
     let str=this.makeSearchString(qparams)
     this.callUrl('/books',str)
   }
   callUrl(url,str){
    this.props.history.push(
        {
            pathname:url,
            search:str
        }
    )
   }


   makeSearchString(js){
    let {searchText,startIndex,maxResults,langRestrict,printType,filter,orderBy,cartview}=js;
   
    maxResults=+this.state.settingjs.max
    let searchstr=''
    searchstr=this.addsearchStr(searchstr,'searchText',searchText);
    searchstr+=this.addsearchStr(searchstr,'startIndex',startIndex);
    searchstr+=this.addsearchStr(searchstr,'maxResults',maxResults);
    searchstr+=this.addsearchStr(searchstr,'langRestrict',langRestrict);
    searchstr+=this.addsearchStr(searchstr,'printType',printType);
    searchstr+=this.addsearchStr(searchstr,'filter',filter);
    searchstr+=this.addsearchStr(searchstr,'orderBy',orderBy);
    return searchstr
   }
   addsearchStr(str,name,value){
    return value?str?`&${name}=${value}`:`${name}=${value}`:name=='startIndex'?`&${name}=${value}`:''
   }

  handleOptionChange=(js)=>{
   js.startIndex=0
   let str= this.makeSearchString(js)
   
   this.callUrl('/books',str)
  }

  handleAddtoCart=(id)=>{
    
    let s1={...this.state}
   
    let book=s1.books.items.find(elem=>elem.id==id)
    book.isInCart=true
    s1.cartarr.push(book)
    this.setState(s1)
   
    
  }
  handleRemoveCart=(id)=>{
    
    
    let s1={...this.state}
    let index=s1.cartarr.findIndex(elem=>elem.id==id)
    let book=s1.cartarr.splice(index,1)
   let book2=s1.books.items.find(elem=>elem.id==id)
    book2.isInCart=false
    
   
    this.setState(s1)


  }


   componentDidMount(){
    let {searchText,startIndex,maxResults}=queryString.parse(this.props.location.search)
    maxResults=+this.state.settingjs.max
   
    let url=`https://www.googleapis.com/books/v1/volumes?q=${searchText}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyC5YRuXXVnJCPyv2GoQketyrk9iYSaoqw0`
     this.fetchData(url)
   }
   componentDidUpdate(prevprop,prevstate){
    if(prevprop!=this.props)
    {
       let max=this.state.settingjs.max
        let {searchText,startIndex,maxResults=max,langRestrict='',printType='',filter='',orderBy}=queryString.parse(this.props.location.search)
        langRestrict?langRestrict=`&langRestrict=${langRestrict}`:langRestrict=''
        printType?printType=`&printType=${printType}`:printType=''
        filter?filter=`&filter=${filter}`:filter=''
        orderBy?orderBy=`&orderBy=${orderBy}`:orderBy=''
        let url=`https://www.googleapis.com/books/v1/volumes?q=${searchText}${langRestrict}${filter}${printType}${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyC5YRuXXVnJCPyv2GoQketyrk9iYSaoqw0`
       
        if(max!=maxResults){
         let js=queryString.parse(this.props.location.search)
         let str=this.makeSearchString(js)
         this.callUrl('/books',str)
      
        }
        else{
        this.fetchData(url)
        }
      
        
        
        
       
        
    }

   }
   

    makecartview(){
        let {cartarr}=this.state
        return (
            <div className='container'>
              {cartarr.length==0?
               <div className='row bg-success'>
                <div className='col-12 text-center'> There are no Books in My Book</div>
               </div>: 
                 <div className='row'>
                        {
                           cartarr.map(elem=>(

                            <div className='col-3 border bg-success text-center'>
                             {elem.volumeInfo.imageLinks?<img className='img-fluid' src={elem.volumeInfo.imageLinks.thumbnail}/>:<img className='img-fluid' src='https://cdn.vectorstock.com/i/1000x1000/82/99/no-image-available-like-missing-picture-vector-43938299.webp'/>}
                               
                               <br/>
                               <strong> {elem.volumeInfo.title}</strong>
                               <br/>
                               <button className='btn btn-secondary' onClick={()=>this.handleRemoveCart(elem.id)}>Remove From MyBook</button>

                             
                            </div>
                           ))
                        }
                       </div>
                }
            </div>
                    
        )
    }




    render(){
       let {items=[],totalItems}=this.state.books
       let {cartview,cartarr,settingview,settingjs}=this.state
       let {searchText, startIndex,maxResults}=queryString.parse(this.props.location.search)
       let qparams=queryString.parse(this.props.location.search)
       maxResults=+maxResults
       startIndex=+startIndex
       let {max}=settingjs
       
        return(
            cartview?this.makecartview():
            settingview?this.makesettingveiw():
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <LeftPanel qparams={qparams} onOptionChange={this.handleOptionChange} settingjs={settingjs}/>
                    </div>
                    <div className='col-9'>
                        <div className='row text-center'>
                            <div className='col-12'>
                               <h4 className='text-warning'> {searchText+'  Books'}</h4> 
                            </div>
                        </div>
                        <div className='row r'>
                            <div className='col-12'>
                               <h6 className='text-success'> {items.length==0?'No Data Found':(startIndex+1)+'-'+(startIndex+items.length)+' entries'}</h6> 
                            </div>
                        </div>
                       <div className='row'>
                        {
                           items.map(elem=>(

                            <div className='col-3 border bg-success text-center'>
                             {elem.volumeInfo.imageLinks?<img className='img-fluid' src={elem.volumeInfo.imageLinks.thumbnail}/>:<img className='img-fluid' src='https://cdn.vectorstock.com/i/1000x1000/82/99/no-image-available-like-missing-picture-vector-43938299.webp'/>}
                               
                               <br/>
                               <strong> {elem.volumeInfo.title}</strong>
                               <br/>
                               {elem.isInCart?<button className='btn btn-secondary' onClick={()=>this.handleRemoveCart(elem.id)}>Remove From MyBook</button>
                               :<button className='btn btn-secondary' onClick={()=>this.handleAddtoCart(elem.id)}>Add to MyBook</button>}

                             
                            </div>
                           ))
                        }
                       </div>
                     
                     <div className='row'>
                     <div className='col-2'>
                        {startIndex>0?<button className='btn btn-primary' onClick={()=>this.handleIncrement(-maxResults)}>Previous</button>:''}
                     </div>
                     <div className='col-8'></div>
                     <div className='col-2'>
                     {startIndex<totalItems&items.length>=max ?<button className='btn btn-primary' onClick={()=>this.handleIncrement(maxResults)}>Next</button>:''}
                     </div>
                     </div>


                    </div>

                </div>

            </div>
        )
    }
}
export default Books