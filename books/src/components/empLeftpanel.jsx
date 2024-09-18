import React,{Component} from 'react'
class EmpLeftpanel extends Component{
      state={
         desarr:['VP', 'Manager', 'Trainee'],
         deptarr:['Finance','HR','Technology'],
         genderarr:['Male','Female']
      }

     handleChange=(e)=>{
        let {currentTarget:input}=e
        let {onOptionChange,qparams}=this.props
        qparams[input.name]=input.value;
        onOptionChange(qparams)
     } 
     makeRadio(arr,name,value){
       
        return(
           arr.map(elem=>(
            <div class="form-check">
            <input class="form-check-input" type="radio" name={name} value={elem} checked={elem==value} onChange={this.handleChange}/>
            <label class="form-check-label" for="flexRadioDefault1">
            {elem}
            </label>
            </div>
            
           ))
        )
       
     }

    render(){
        let {deptarr,desarr,genderarr}=this.state
        let {qparams}=this.props
        let {department='',designation='',gender=''}=qparams
        return(
        <React.Fragment>
          <label class="form-label" ><strong>Select Department</strong></label>
          {
            this.makeRadio(deptarr,'department',department)
          }
           <label class="form-label" ><strong>Select Designation</strong></label>
          {
            this.makeRadio(desarr,'designation',designation)
          }
           <label class="form-label" ><strong>Select Gender</strong></label>
          {
            this.makeRadio(genderarr,'gender',gender)
          }
        </React.Fragment>
        )
    }

}
export default EmpLeftpanel