import React,{Component} from 'react'
import http from './httpService1'
import LeftMobile from './leftMobile';
import queryString from 'query-string'

class Mobiles extends Component{
    state={
       mobiles:[]
    }
    async fetchData(url){
        let qparams=queryString.parse(this.props.location.search)
        let str=this.makeSearchString(qparams)
        str=str?`?${str}`:str
        let response=await http.get(url+str)
        let {data}=response
        this.setState({mobiles:data})
       }
    componentDidMount(){
        let url='/svr/mobiles'
        this.fetchData(url)
    }
    componentDidUpdate(prevprops,prevstate){
        let {ram,rom,os,brand}=this.props.match.params
        let url='/svr/mobiles';
        if(brand){
            url=`/svr/mobiles/brand/${brand}` 
        }
        if(ram){
            url=`/svr/mobiles/ram/${ram}`
        }
        if(rom){
            url=`/svr/mobiles/rom/${rom}`
        }
        if(os){
            url=`/svr/mobiles/os/${os}`
        }
      
        console.log(prevprops!=this.props)
        if(prevprops!=this.props){
            console.log('in fetching area')
            this.fetchData(url)
        }

    }
    handleEdit=(id)=>{
        this.props.history.push(`/mobiles/${id}/edit`)   
    }
    handleDelete=(id)=>{
        
        this.props.history.push(`/mobiles/${id}/delete`) 
    }
    handleOptionChange=(js)=>{
       let str= this.makeSearchString(js)
       this.callUrl('/mobiles',str)
    }
    makeSearchString(js){
      
        let {ram,rom,brand}=js;
        let searchstr=''
         searchstr+=this.addSearchstr(searchstr,'ram',ram)
         searchstr+=this.addSearchstr(searchstr,'rom',rom)
         searchstr+=this.addSearchstr(searchstr,'brand',brand)
         return searchstr
         

    }
    addSearchstr(str,name,value){
        
        return value?str?`&${name}=${value}`:`${name}=${value}`:''
    }
    callUrl(url,str){
        this.props.history.push(
            {
                pathname:url,
                search:str
            }
        )
       }

    render(){
        let {mobiles}=this.state
        let qparams=queryString.parse(this.props.location.search)
       
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <LeftMobile qparams={qparams} onOptionChange={this.handleOptionChange}/>
                    </div>
                    <div className='col-9'>
                <div className='row bg-danger text-light'>
                    <div className='col-1'>Id</div>
                    <div className='col-1'>Name</div>
                    <div className='col-2'>Price</div>
                    <div className='col-2'>brand</div>
                    <div className='col-2'>Ram</div>
                    <div className='col-1'>Rom</div>
                    <div className='col-1'>Os</div>
                    <div className='col-1'></div>
                    <div className='col-1'></div>
                </div>

                {
                    mobiles.map(elem=>(
                    <div className='row'>

                    <div className='col-1'>{elem.id}</div>
                    <div className='col-1'>{elem.name}</div>
                    <div className='col-2'>{elem.price}</div>
                    <div className='col-2'>{elem.brand}</div>
                    <div className='col-2'>{elem.ram}</div>
                    <div className='col-1'>{elem.rom}</div>
                    <div className='col-1'>{elem.os}</div>

                    <div className='col-1'>
                       <button className='btn  btn-sm btn-secondary' onClick={()=>this.handleEdit(elem.id)}>edit</button>
                    </div>
                    <div className='col-1'>
                     <button className='btn  btn-sm btn-danger' onClick={()=>this.handleDelete(elem.id)}>delete</button>
                    </div>

                    </div>
                    ))
                }
                </div>
                </div>
            </div>
        )
    }
}
export default Mobiles;