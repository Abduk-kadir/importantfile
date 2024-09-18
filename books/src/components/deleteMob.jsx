import React,{Component} from 'react'
import http from './httpService1'
class DeleteMob extends Component{
   async componentDidMount(){
    
     let {id}=this.props.match.params
     let url=`/svr/mobiles/${id}`
     let response=await http.deleteEmp(url)
     this.props.history.push('/mobiles')
   }

    render(){
        return ''
    }
}
export default DeleteMob