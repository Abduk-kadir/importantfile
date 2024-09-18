import React,{Component} from 'react'
import EmpNavbar from './empNavbar'
import { Switch,Route,Redirect } from 'react-router-dom'
import Employees from './employees'
import NewEmployee from './newEmployee'
import DeleteEmp from './deleteEmp'
class EmpMain extends Component{
    render()
    {
        
        return(
            <React.Fragment>
            <EmpNavbar/>
            <Switch>
              <Route path={'/employees/:id/edit'} component={NewEmployee}></Route>  
              <Route path={'/employees/:id/delete'} component={DeleteEmp}></Route>  
              <Route path={'/New employee'} component={NewEmployee}></Route>
              <Route path={`/employees/department/:dept`} component={Employees}></Route>
              <Route path={`/employees/designation/:des`} component={Employees}></Route>
              <Route path={'/employees'} component={Employees} ></Route>
            </Switch>
            </React.Fragment>
        )
    }
}
export default EmpMain