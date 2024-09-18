import React,{Component} from 'react'
import http from './httpService1'
class NewMobile extends Component{
    state={
        mobile:{name:'',price:'',brand:'',ram:'',rom:'',os:''},
         ramarr:['3GB', '4GB', '6GB','8GB'],
        romarr:['16GB','32GB','64GB','128GB'],
        osarr:['Android','iOS'],
        brandarr:['Samsung','Xiaomi', 'Realme', 'Apple'],
        edit:false

        
    }
   
    async postdata(url,obj){
     let response=await http.post(url,obj)
     this.props.history.push('/mobiles')
    }
    async putdata(url,obj){
     console.log('in put data')   
     let response=await http.put(url,obj)
     this.props.history.push('/mobiles') 
    }

    async fetchData(){
        let {id}=this.props.match.params  
       
        if(id){
            let url='/svr/mobiles'
            let response=await http.get(url)
            let {data}=response  
            let mob=data.find(elem=>elem.id==id) 
            let {name,price,brand,ram,rom,os}=mob
            let obj={name:name,price:price,brand:brand,ram:ram,rom:rom,os:os}
           
            this.setState({mobile:obj,edit:true})
        }
        else
        {
           let mob={name:'',price:0,brand:'',ram:'',rom:'',os:''}
           this.setState({employee:mob,edit:false})
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
        let mobile=this.state.mobile
        let {name,price,brand,ram,rom,os}=mobile
        let obj={name:name,price:price,brand:brand,ram:ram,rom:rom,os:os}
        if(edit){
          let {id}=this.props.match.params    
          let url=`/svr/mobiles/${id}`
          this.putdata(url,obj)
        }
        else{
            let url='/svr/mobiles'
            this.postdata(url,obj)
        }
        
         
        

      } 
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state}
        s1.mobile[input.name]=input.value
        this.setState(s1)
    }
     makeDropdown(arr,name,value,label){
        return(
        <select class="form-select" aria-label="Default select example" name={name} value={value} onChange={this.handleChange}>
        <option disabled value=''>{label}</option>
         {
            arr.map(elem=>(
                <option value={elem}>{elem}</option>
            ))
           
         }
        
         </select>
        )

     }
     

        render(){
            let {mobile,ramarr,romarr,osarr,brandarr}=this.state
            let {name,price,brand,ram,rom,os}=mobile
          return(  
            <React.Fragment>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Name</label>
                <input type="text" class="form-control"  placeholder="enter name" name='name' value={name} onChange={this.handleChange}/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Price</label>
                <input type="number" class="form-control"  placeholder="enter price" name='price' value={price} onChange={this.handleChange}/>
                </div>

                <label for="exampleFormControlInput1" class="form-label">Brand</label>
                {
                    this.makeDropdown(brandarr,'brand',brand,'select brand')
                }
                <label for="exampleFormControlInput1" class="form-label">Ram</label>
                {
                    this.makeDropdown(ramarr,'ram',ram,'select Ram')
                }
                 <label for="exampleFormControlInput1" class="form-label">Rom</label>
                {
                    this.makeDropdown(romarr,'rom',rom,'select Rom')
                }
                 <label for="exampleFormControlInput1" class="form-label">Os</label>
                {
                    this.makeDropdown(osarr,'os',os,'select os')
                }
          
           <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
           


            </React.Fragment>
        )
    }
}
export default NewMobile