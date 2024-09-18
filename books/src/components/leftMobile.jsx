import React,{Component} from 'react'
class LeftMobile extends Component{
    state={
       
        ramarr:['3GB', '4GB', '6GB','8GB'],
        romarr:['16GB','32GB','64GB','128GB'],
        brandarr:['Samsung','Xiaomi', 'Realme', 'Apple'],    
    }
    handleChange=(e)=>{
      let {currentTarget:input}=e;
      let qparams={...this.props.qparams}
      qparams[input.name]=this.updateCb(qparams[input.name],input.value,input.checked)
      this.props.onOptionChange(qparams)
    }

   updateCb(str,value,checked){
     let arr=str?str.split(','):[]
     console.log(str)
     if(checked){
        arr.push(value)
     }
     else{
        let index=arr.findIndex(elem=>elem==value)
        arr.splice(index,1)
     }
     return arr.join(',')
   }



    makeCheckbox(arr,name,valarr){
        return(
            arr.map(elem=>(
                <div class="form-check">
                <input class="form-check-input" type="checkbox" 
                 name={name} 
                 value={elem} 
                 checked={valarr.findIndex(val=>val==elem)>=0}
                 onChange={this.handleChange}
                 />
                <label class="form-check-label" for="flexCheckDefault">
                 {elem}
                </label>
                </div>
            ))
           
        )
    }
    render(){
        let {ramarr,romarr,brandarr}=this.state
        let {qparams}=this.props
        let {ram,rom,brand}=qparams
        let ramoarr=ram?ram.split(','):[];
        let romoarr=rom?rom.split(','):[];
        let brandoarr=brand?brand.split(','):[]
        
        return (
           <React.Fragment>
            <label class="form-label" for="flexCheckDefault">Select Ram</label>
            {
                this.makeCheckbox(ramarr,'ram',ramoarr)
            }
            <label class="form-label" for="flexCheckDefault">Select ROM</label>
            {
                this.makeCheckbox(romarr,'rom',romoarr)
            }
            <label class="form-label" for="flexCheckDefault">Select Brand</label>
            {
                this.makeCheckbox(brandarr,'brand',brandoarr)
            }
           </React.Fragment> 
        )
    }
}
export default LeftMobile