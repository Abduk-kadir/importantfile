import React,{Component} from 'react'
class HomePage extends Component{
   state={
      searchText:''
   }
   handleChange=(e)=>{
      let {currentTarget:input}=e
     
      let s1={...this.state}
      s1[input.name]=input.value;
      console.log(s1)
      this.setState(s1)
      
  }
   handleSearch=()=>{
      let {searchText}=this.state
      let url=`/books?searchText=${searchText}&startIndex=0&maxResults=8`
      this.props.history.push(url)

   }

    render(){
      let {searchText}=this.state
        return(
           <div className='container'>
             <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                  <img className='img-fluid rounded-circle' src='https://media.istockphoto.com/id/160768331/photo/library-bookshelf-diminishing-perspective.jpg?s=1024x1024&w=is&k=20&c=VTutu0slZM_7FitnugPZmwkCkYWWgS_4BvEzZo-KVvY='/>
                </div>
                <div className='col-4'></div>
             </div>
             <div className='row mt-3'>
                <div className='col-8'>
                <div className="mb-3">
  
               <input type="email" class="form-control" 
                name='searchText'
                value={searchText}
                onChange={this.handleChange}
               
               
               placeholder="search"/>
               </div>
                </div>
                <div className='col-4'>
                 <button className='btn btn-primary' onClick={this.handleSearch}>Search</button>
                </div>
                
             </div>

           </div>
        )
    }
}
export default HomePage