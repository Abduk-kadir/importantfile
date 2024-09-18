import React,{Component} from "react";
import { Link, Switch } from "react-router-dom";
class MobileNavbar extends Component{

    render(){
       let ramarr=['3GB', '4GB', '6GB','8GB']
       let romarr=['16GB','32GB','64GB','128GB'];
       let osarr=['Android','iOS'];
       let brandarr=['Samsung','Xiaomi', 'Realme', 'Apple']
       

        return(
  <nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>MobilePortal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/mobiles'>mobiles</Link>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brand
          </a>
          <ul className="dropdown-menu">
           {brandarr.map(elem=>(
             <li><Link className="dropdown-item" to={`/mobiles/brand/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ram
          </a>
          <ul className="dropdown-menu">
           {ramarr.map(elem=>(
             <li><Link className="dropdown-item" to={`/mobiles/ram/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rom
          </a>
          <ul className="dropdown-menu">
           {romarr.map(elem=>(
             <li><Link className="dropdown-item" to={`/mobiles/rom/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OS
          </a>
          <ul className="dropdown-menu">
           {osarr.map(elem=>(
             <li><Link className="dropdown-item" to={`/mobiles/os/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/New Mobile'>New Mobile</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        )
    }
}
export default MobileNavbar