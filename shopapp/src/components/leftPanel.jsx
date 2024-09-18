import React,{Component} from "react";


class LeftPanel extends Component{
    state={
        sarr:[
            {name:'Sector 25, Gurgaon',id:1},
        {name:'Sector 53, Gurgaon',id:2},
        {name:'Greater Kailash, Delhi',id:3},
        {name:'Mall of India, Noida',id:4},
       
        
      
      ],
        parr:[{name:'Pepsi Can',id:1},
        {name:'Diet Coke',id:2},
        {name:'Maja',id:3},
        {name:'Dairy Milk',id:4},
        {name:'Fruit & Nut',id:5},
        {name:'Silk - Crackles',id:6},
        {name:'Pepsi Pet',id:7},
        {name:'Kit Kat',id:8},
       
       ],
        sortarr:['QtyAsc','QtyDesc','ValueAsc','ValueDesc']
    }
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let qparams={...this.props.qparams}
        input.type=='checkbox'?qparams[input.name]=this.updateCb(qparams[input.name],input.value,input.checked)
        :qparams[input.name]=input.value;
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
                  <div class="form-check ms-4">

                  <input class="form-check-input" type="checkbox" 
                   name={name} 
                   value={elem.id} 
                   checked={valarr.findIndex(val=>val==elem.id)>=0}
                   onChange={this.handleChange}
                   />
                  <label class="form-check-label" for="flexCheckDefault">
                   {elem.name}
                  </label>
                  </div>
              ))
             
          )
      }
    render(){
        let {sarr,parr,sortarr}=this.state
       
        let {qparams}=this.props
        let {shop,product,sort=''}=qparams
        console.log(qparams)
        let shoparr=shop?shop.split(','):[];
        let productarr=product?product.split(','):[];
       
        return (
            <React.Fragment>
            <label class="form-check-label ms-0" for="flexCheckDefault"><strong>Select Purchases by Shop Id</strong></label>
            {
                this.makeCheckbox(sarr,'shop',shoparr)
            }
            <label class="form-label" for="flexCheckDefault"><strong>Select Purchases by Product Id </strong></label>
            {
                this.makeCheckbox(parr,'product',productarr)
            }
            
             
            <label class="form-check-label ms-0" for="flexCheckDefault"><strong>Sort Purchases</strong></label>

            <select class="form-select" name='sort' value={sort} onChange={this.handleChange} >
            <option disabled value=''>Select sort item</option>
              {
                sortarr.map(elem=>(
                    <option value={elem}>{elem}</option>
                ))
              }
           
         
            </select>
            </React.Fragment>
        )
    }
}
export default LeftPanel