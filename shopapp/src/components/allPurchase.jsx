import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import http from './httpService1';
import LeftPanel from './leftPanel';
import queryString from 'query-string';


class AllPurchase extends Component{
    state={
        purchase:[]
    }
    async fetchData(url){
        let qparams=queryString.parse(this.props.location.search)
        let str=this.makeSearchString(qparams)
        str=str?`?${str}`:str
        let response=await http.get(url+str)
        let {data}=response;
        this.setState({purchase:data})
    }
    componentDidMount(){
        let {id}=this.props.match.params
        let url=`/purchases`
        this.fetchData(url)
    }
    componentDidUpdate(prevprops,prevstate){
        let url=`/purchases`
        if(prevprops!=this.props)
        {
        this.fetchData(url)
        }

    }

    makeSearchString(js){
      
        let {shop,product,sort}=js;
        console.log(js)
        let searchstr=''
         searchstr+=this.addSearchstr(searchstr,'shop',shop)
         searchstr+=this.addSearchstr(searchstr,'product',product)
         searchstr+=this.addSearchstr(searchstr,'sort',sort)
        
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
    handleOptionChange=(js)=>{
        let str= this.makeSearchString(js)
        this.callUrl('/purchase/View',str)
    }
     makeuniquearr(arr,name){
      
        let valarr=arr.reduce((acc,curr)=>acc.find(val=>val==curr[name])?acc:[...acc,curr[name]],[])
        return valarr;
     }
    render(){
        
       let {purchase}=this.state
       let sarr=this.makeuniquearr(purchase,'shopid')
       let parr=this.makeuniquearr(purchase,'productid')
       let qparams=queryString.parse(this.props.location.search)
        return(
            <div className='container mt-2 text-center'>
                <div className='row'> 
                  <div className='col-3'>
                    <LeftPanel sarr={sarr} parr={parr} qparams={qparams} onOptionChange={this.handleOptionChange}/>
                  </div>
                <div className='col-9'>  
                <div className='row'>
                    {
                        purchase.map(elem=>(
                            <div className='col-3 bg-danger   bg-opacity-50 border'>
                             <strong> Shop Id: {elem.shopid}</strong>
                               <br/>
                             <strong> Product Id: {elem.productid} </strong>
                               <br/>
                             Quantity:{elem.quantity}
                             <br/>
                             Price:{elem.price}
                             <br/>

                            </div>
                        ))
                    }
                </div>
                </div>
                </div> 
            </div>
        )
    }
}
export default AllPurchase
