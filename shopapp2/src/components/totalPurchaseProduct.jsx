import React,{Component} from 'react'
import http from './httpService1';

class TotalPurchaseProduct extends Component{
    state={
        totalpurchase:[]
    }
    async fetchData(url){
        let response=await http.get(url)
        let {data}=response;
        this.setState({totalpurchase:data})
    }
    componentDidMount(){
        let {id}=this.props.match.params
        let url=`/totalpurchase/product/${id}`
        this.fetchData(url)
    }
    render(){
        let {totalpurchase}=this.state
        let {id}=this.props.match.params
        return(
            <div className='container mt-2 text-center'>
                <h4>Shop wise total purchase of specific product :{id}</h4>
                <div className='row'>
                    {
                        totalpurchase.map(elem=>(
                            <div className='col-3 bg-primary   bg-opacity-50 border'>
                             <strong> Shop Id: {elem.shopId}</strong>
                               <br/>
                             
                             total price :{elem.totalprice}

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default TotalPurchaseProduct;
