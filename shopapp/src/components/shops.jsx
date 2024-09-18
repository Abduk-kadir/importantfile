import React,{Component} from 'react';
import http from './httpService1';
import { Link } from 'react-router-dom';
class Shops extends Component{
    state={
        shops:[]
    }
    async fetchData(url){
        let response=await http.get(url)
        let {data}=response;
        this.setState({shops:data})
    }
    componentDidMount(){

        let url='/shops'
        this.fetchData(url)
    }
    render(){
        let {shops}=this.state
        return (
            <div className='container mt-2'>
                <div className='row'>
                    {
                        shops.map(elem=>(
                            <div className='col-3 bg-success   bg-opacity-50 border'>
                               {elem.shopid}
                               <br/>
                               {elem.name}
                               <br/>
                               <Link to={`/shop/purchase/${elem.shopid}`}>Purchase</Link>
                               <br/>
                               <Link to={`/shop/totalpurchase/${elem.shopid}`}>Total purchase</Link>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Shops