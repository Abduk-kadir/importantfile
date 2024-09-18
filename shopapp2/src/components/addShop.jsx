import React,{Component} from 'react'
import http from './httpService1'

class AddShop extends Component{
    state={
     shop:{name:'',rent:''}
    }
    
    handleChange=(e)=>{
      let {currentTarget:input}=e
      let s1={...this.state}
      s1.shop[input.name]=input.value;
      this.setState(s1)
   }
   async postData(url,obj){
   let response=await http.post(url,obj)
   this.props.history.push('/Shops/view')
   }
   handleSubmit=()=>{
    let {shop}=this.state
    let url='/shops';
    this.postData(url,shop)

   }

    render(){
        let {name,rent}=this.state.shop
        return(
            <React.Fragment>
            <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Shop Name</label>
            <input type="email" class="form-control"  placeholder="Enter Shop Name" name='name' value={name} onChange={this.handleChange}/>
             </div>
             <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Rent</label>
             <input type="number" class="form-control"  placeholder="Enter rent of shop"
             name='rent' 
             value={rent}
             onChange={this.handleChange}
             />
            </div>
            <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
            </React.Fragment>
        )
    }
}
export default AddShop