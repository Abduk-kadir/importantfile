import React,{Component} from 'react'
import http from './httpService1'

class AddPurchase extends Component{
    state={
      purchase:{shopid:'',productid:'',quantity:'',price:''}
    }
    
    handleChange=(e)=>{
      let {currentTarget:input}=e
      let s1={...this.state}
      s1.purchase[input.name]=input.value;
      this.setState(s1)
   }
   async postData(url,obj){
   let response=await http.post(url,obj)
   this.props.history.push('/purchase/View')
   }
   handleSubmit=()=>{
    let {purchase}=this.state
    let url='/purchases';
    this.postData(url,purchase)

   }

    render(){
        let {shopid,productid,quantity,price}=this.state.purchase
        return(
            <React.Fragment>
            <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Shop Id</label>
            <input type="number" class="form-control"  placeholder="Enter Shop id" name='shopid' value={shopid} onChange={this.handleChange}/>
             </div>

             <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Product Id</label>
            <input type="number" class="form-control"  placeholder="Enter Product id" name='productid' value={productid} onChange={this.handleChange}/>
             </div>

          

             <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">quantity</label>
            <input type="number" class="form-control"  placeholder="Enter quantity" name='quantity' value={quantity} onChange={this.handleChange}/>
             </div>

             <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="number" class="form-control"  placeholder="Enter Price" name='price' value={price} onChange={this.handleChange}/>
             </div>


            <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
            </React.Fragment>
        )
    }
}
export default AddPurchase