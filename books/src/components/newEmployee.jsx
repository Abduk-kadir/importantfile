import React,{Component} from 'react'
import http from './httpService1'
class NewEmployee extends Component{
    state={
        employee:{name:'',dept:'',des:'',sal:'',gend:''},
        desarr:['VP', 'Manager', 'Trainee'],
        deptarr:['Finance','HR','Technology'],
        edit:false

        
    }
   
    async postdata(url,obj){
     let response=await http.post(url,obj)
     this.props.history.push('/employees')
    }
    async putdata(url,obj){
     console.log('in put data')   
     let response=await http.put(url,obj)
     this.props.history.push('/employees') 
    }

    async fetchData(){
        let {id}=this.props.match.params  
       
        if(id){
            let url='/svr/employees'
            let response=await http.get(url)
            let {data}=response  
            let emp=data.find(elem=>elem.id==id) 
            let {name,department,designation,salary,gender}=emp
            let obj={name:name,dept:department,des:designation,sal:salary,gend:gender}
            console.log('data is',emp) 
            this.setState({employee:obj,edit:true})
        }
        else
        {
           let emp={name:'',dept:'',des:'',sal:'',gend:''}
           this.setState({employee:emp,edit:false})
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
        let employee=this.state.employee
        let {name,dept,des,sal,gend}=employee
        let obj={name:name,department:dept,designation:des,salary:sal,gender:gend}
        if(edit){
          let {id}=this.props.match.params    
          let url=`/svr/employees/${id}`
          this.putdata(url,obj)
        }
        else{
            let url='/svr/employees'
            this.postdata(url,obj)
        }
        
         
        

      } 
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state}
        s1.employee[input.name]=input.value
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
            let {employee,deptarr,desarr}=this.state
            let {name,dept,des,sal,gend}=employee
          return(  
            <React.Fragment>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Name</label>
                <input type="text" class="form-control"  placeholder="enter name" name='name' value={name} onChange={this.handleChange}/>
                </div>

                <label for="exampleFormControlInput1" class="form-label">Department</label>
                {
                    this.makeDropdown(deptarr,'dept',dept,'select department')
                }
                <label for="exampleFormControlInput1" class="form-label">Designation</label>
                {
                    this.makeDropdown(desarr,'des',des,'select designation')
                }
          <label for="exampleFormControlInput1" class="form-label">Enter Salary</label>
          <input type="number" class="form-control"  placeholder="enter salary" name='sal' value={sal} onChange={this.handleChange}/>

            <label for="exampleFormControlInput1" class="form-label">Choose Gender</label>

           <div className="form-check">
          <input className="form-check-input" type="radio" name="gend" value='Male' checked={gend=="Male"} onChange={this.handleChange}/>
          <label className="form-check-label" for="flexRadioDefault1">
           Male
           </label>
           </div>
           
           <div className="form-check">
          <input className="form-check-input" type="radio" name="gend" value='Female' checked={gend=="Female"} onChange={this.handleChange}/>
          <label className="form-check-label" for="flexRadioDefault1">
           Female
           </label>
           </div>
           <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
           


            </React.Fragment>
        )
    }
}
export default NewEmployee