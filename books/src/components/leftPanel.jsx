import React,{Component} from 'react'
class LeftPanel extends Component{
    state={
        printtypearr:['all','books','magazines'],
        filterarr:['partial','full','free-ebooks','paid-ebooks','ebooks'],
        orderbyarr:['relevance','newest']
      
    }

    handleChange=(e)=>{
        let {currentTarget:input}=e
        let {qparams}=this.props
        qparams[input.name]=input.value
        this.props.onOptionChange(qparams)
        
    }

    makeRadio(name,value,label,ischecked){
       
        return(
            <div class="form-check">
             <input class="form-check-input" type="radio" name={name} value={value} checked={ischecked} onChange={this.handleChange} />
            <label class="form-check-label" for="flexRadioDefault1">
            {label}
           </label>
           </div>
        )
    }
    makeRadio2(arr,name,value){
       return(<div className='row'>
        {
            arr.map(elem=>(
            <div className='col-12 border'>    
            <div class="form-check">
            <input class="form-check-input" type="radio" name={name} value={elem} checked={elem==value} onChange={this.handleChange} />
            <label class="form-check-label" for="flexRadioDefault1">
            {elem}
            </label>
            </div>  
            </div>
            ))
        }
       </div>)

    }

    render(){
        let {printtypearr,filterarr,orderbyarr}=this.state
        let {qparams,settingjs}=this.props
        
    
        let {langRestrict='',printType='',filter='',orderBy=''}=qparams
        return(
         
            <div className='container me-2'>
                
            <div className='row'>
               {settingjs.languages?<div className='col-12 border'><strong>Languages</strong></div>:''} 
            </div>
            {settingjs.languages?
            <div className='row'>
               
              <div className='col-12 border'>{this.makeRadio('langRestrict','hi','Hindi',langRestrict=='hi')}</div>
              <div className='col-12 border'>{this.makeRadio('langRestrict','en','English',langRestrict=='en')}</div>
              <div className='col-12 border'>{this.makeRadio('langRestrict','fr','French',langRestrict=='fr')}</div>
              <div className='col-12 border'>{this.makeRadio('langRestrict','es','Spanish',langRestrict=='es')}</div>
              <div className='col-12 border'>{this.makeRadio('langRestrict','zh','Chaniese',langRestrict=='zh')}</div>
              </div>
              :''}
           

            {settingjs.filter?<div className='row border mt-3'><strong>Filter</strong></div>:''}
            {
                settingjs.filter? this.makeRadio2(filterarr,'filter',filter):''
            }

            
            {settingjs.printType?<div className='row border mt-3'><strong>PrintType</strong></div>:''}
             {
               settingjs.printType?this.makeRadio2(printtypearr,'printType',printType):''
             }
            

            <div className='row border mt-3'>
            {
              settingjs.orderby? <select class="form-select" name='orderBy' value={orderBy} onChange={this.handleChange}>
                <option disabled value={''}>OrderBy</option>
                 {
                    orderbyarr.map(elem=>(
                        <option value={elem}>{elem}</option>
                
                    ))
                 }
              </select>:''
            }
            </div>

            </div>
                    

        )
    }
}
export default LeftPanel