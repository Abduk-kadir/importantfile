import React,{Component} from 'react'
import http from './httpService1';

class PurchaseProduct extends Component{
    state={
        purchase:[]
    }
    async fetchData(url){
        let response=await http.get(url)
        let {data}=response;
        this.setState({purchase:data})
    }
    componentDidMount(){
        let {id}=this.props.match.params
        let url=`/purchases/products/${id}`
        this.fetchData(url)
    }
    render(){
        let {purchase}=this.state
        let {id}=this.props.match.params
        return(
            <div className='container mt-2 text-center'>
                <h4>Purchase of Product that id is :{id}</h4>
                <div className='row'>
                    {
                        purchase.map(elem=>(
                            <div className='col-3 bg-primary   bg-opacity-50 border'>
                             <strong> ProductId: {elem.productid}</strong>
                               <br/>
                             <strong>  Shop Id: {elem.shopId} </strong>
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
        )
    }
}
export default PurchaseProduct
