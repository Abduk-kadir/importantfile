import React,{Component} from "react";
import { Link, Switch } from "react-router-dom";
class EmpNavbar extends Component{

    render(){
       let desarr=['VP', 'Manager', 'Trainee']
       let deptarr=['Finance','HR','Technology']
        return(
  <nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>EmpPortal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/employees'>Employees</Link>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Department
          </a>
          <ul className="dropdown-menu">
           {deptarr.map(elem=>(
             <li><Link className="dropdown-item" to={`/employees/department/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Designation
          </a>
          <ul className="dropdown-menu">
           {desarr.map(elem=>(
             <li><Link className="dropdown-item" to={`/employees/designation/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/New employee'>New Employee</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        )
    }
}
export default EmpNavbar