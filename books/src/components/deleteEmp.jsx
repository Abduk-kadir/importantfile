import React,{Component} from 'react'
import http from './httpService1'
class DeleteEmp extends Component{
   async componentDidMount(){
    
     let {id}=this.props.match.params
     let url=`/svr/employees/${id}`
     let response=await http.deleteEmp(url)
     this.props.history.push('/employees')
   }

    render(){
        return 'delete'
    }
}
export default DeleteEmp