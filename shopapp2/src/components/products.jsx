import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import http from './httpService1';


class Products extends Component{
    state={
        products:[]
    }
    async fetchData(url){
        let response=await http.get(url)
        let {data}=response;
        this.setState({products:data})
    }
    componentDidMount(){
        let {id}=this.props.match.params
        let url=`/products`
        this.fetchData(url)
    }
    render(){
        let {products}=this.state
       
        return(
            <div className='container mt-2 text-center'>
               
                <div className='row'>
                    {
                        products.map(elem=>(
                            <div className='col-3 bg-danger   bg-opacity-50 border'>
                             <strong> Product id: {elem.productId}</strong>
                               <br/>
                             <strong> Produt Name: {elem.productName} </strong>
                               <br/>
                             Category:{elem.category}
                             <br/>
                             Description:{elem.description}
                             <br/>
                             <Link to={`/purchases/${elem.productId}/edit`}>Edit</Link>
                             <br/>
                             <Link to={`/purchases/products/${elem.productId}`}> Purchases</Link>
                             <br/>
                             <Link to={`/totalpurchases/products/${elem.productId}`}>Total purchase</Link>


                            
                             
                               

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Products
