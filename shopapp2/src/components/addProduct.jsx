import React,{Component} from 'react'
import http from './httpService1'
class AddProduct extends Component{
    state={
        product:{productName:'',category:'',description:''},
        edit:false

        
    }
   
    async postdata(url,obj){
     let response=await http.post(url,obj)
     this.props.history.push('/products/View')
    }
    async putdata(url,obj){
     let response=await http.put(url,obj)
     this.props.history.push('/products/View') 
    }

    async fetchData(){
        let {id}=this.props.match.params  
      
         
        if(id){
            let url='/products'
            let response=await http.get(url)
            let {data}=response  
            console.log('id is = ',id)
            console.log()
            let product=data.find(elem=>elem.productId==id) 
            
             let {productName,category,description}=product
           let obj={productName:productName,category:category,description:description}
           
            this.setState({product:obj,edit:true})
        }
        else
        {
           let prod={productName:'',category:'',description:''};
           this.setState({product:prod,edit:false})
        }

    }
    componentDidMount(){
        this.fetchData()
      
    }
    componentDidUpdate(prevprops,prevstate){
        if(prevprops!=this.props){
           this.fetchData()  
        }
    }
      handleSubmit=(e)=>{
        let {edit}=this.state
        let product=this.state.product
        let {productName,category,description}=product
        let obj={productName:productName,category:category,description:description}
        if(edit){
          let {id}=this.props.match.params    
          let url=`/products/${id}`
          this.putdata(url,obj)
        }
        else{
            let url='/products'
            this.postdata(url,obj)
        }
        
         
        

      } 
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state}
        s1.product[input.name]=input.value
        this.setState(s1)
    }
    
     

        render(){
           
            let {productName,category,description}=this.state.product
           
          return(  
            <React.Fragment>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Product Name</label>
                <input type="text" class="form-control"  placeholder="enter name of product" name='productName' value={productName} onChange={this.handleChange}/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Category</label>
                <input type="text" class="form-control"  placeholder="enter category" name='category' value={category} onChange={this.handleChange}/>
                </div> 

                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Description</label>
                <input type="text" class="form-control"  placeholder="enter category" name='description' value={description} onChange={this.handleChange}/>
                </div>  
              <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
            </React.Fragment>
        )
    }
}
export default AddProduct