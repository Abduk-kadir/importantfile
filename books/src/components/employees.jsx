import React,{Component} from "react";
import http from "./httpService1";
import axios from "axios";
import queryString from "query-string";
import EmpLeftpanel from "./empLeftpanel";
class Employees extends Component{
    state={
        employees:[]
    }

   async fetchData(url){
     let qparams=queryString.parse(this.props.location.search)
     let str=this.makeSearchString(qparams)
     str=str?`?${str}`:str
     console.log('search str is',str)
     let response=await http.get(url+str)
     let {data}=response
     this.setState({employees:data})
    }
    handleOptionChange=(js)=>{
       let str= this.makeSearchString(js)
       let url='/employees'
       this.callUrl(url,str)
    }
   
    callUrl(url,str){
        this.props.history.push(
            {
                pathname:url,
                search:str
            }
        )
       }
    makeSearchString(js){
      
        let {department,designation,gender}=js;
        let searchstr=''
         searchstr+=this.addSearchstr(searchstr,'designation',designation)
         searchstr+=this.addSearchstr(searchstr,'department',department)
         searchstr+=this.addSearchstr(searchstr,'gender',gender)
         return searchstr
         

    }
    addSearchstr(str,name,value){
        
        return value?str?`&${name}=${value}`:`${name}=${value}`:''
    }

    componentDidMount(){
        let url='/svr/employees'
        this.fetchData(url)
    }
    componentDidUpdate(prevprops,prevstate){
        let {dept,des}=this.props.match.params  
        let url='/svr/employees';
        if(dept){
            url=`/svr/employees/department/${dept}`
        }
        else if(des){
            url=`/svr/employees/designation/${des}`
        }
        if(prevprops!=this.props){
            this.fetchData(url)
        }
        
    }
    handleDelete=(id)=>{
        this.props.history.push(`/employees/${id}/delete`)
    }
    handleEdit=(id)=>{
        this.props.history.push(`/employees/${id}/edit`)
    }

    render(){
        let {employees}=this.state
        let qparams=queryString.parse(this.props.location.search)
        return (
            <div className="container">
                <div className="row">
                  
                    <div className="col-3">
                      <EmpLeftpanel qparams={qparams} onOptionChange={this.handleOptionChange}/>
                    </div>
                    <div className="col-9">
                    <div className="row border bg-primary text-light">
                    <div className="col-1 border">Id</div>
                    <div className="col-2 border">Name</div>
                    <div className="col-2 border">Department</div>
                    <div className="col-2 border">Designation</div>
                    <div className="col-2 border">Salary</div>
                    <div className="col-1 border">Gender</div>
                    <div className="col-1 border"></div>
                    <div className="col-1 border"></div> 
                   </div> 
                   {
                    employees.map(elem=>(
                        <div className="row">
                            <div className="col-1 border">{elem.id}</div>
                            <div className="col-2 border">{elem.name}</div>
                            <div className="col-2 border">{elem.department}</div>
                            <div className="col-2 border">{elem.designation}</div>
                            <div className="col-2 border">{elem.salary}</div>
                            <div className="col-1 border">{elem.gender}</div>
                            <div className="col-1 border">
                             <button className="btn btn-secondary" onClick={()=>this.handleEdit(elem.id)}>edit</button>
                            </div>
                            <div className="col-1 border">
                             <button className="btn btn-danger" onClick={()=>this.handleDelete(elem.id)}>delete</button>
                            </div> 
                        </div>   
                    ))
                }
             </div>
            </div>
            </div>
        )

    }
}
export default Employees