import React,{Component} from "react";
import { Link, Switch } from "react-router-dom";
class Navbar extends Component{

    render(){
       let shoparr=['View','Add']
       let productarr=['View','Add'];
       let puchasearr=['View'];
       
       

        return(
  <nav className="navbar navbar-expand-sm bg-warning text-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Shop portal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shops
          </a>
          <ul className="dropdown-menu">
           {shoparr.map(elem=>(
             <li><Link className="dropdown-item" to={`/Shops/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
           {productarr.map(elem=>(
             <li><Link className="dropdown-item" to={`/products/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Purchase
          </a>
          <ul className="dropdown-menu">
           {puchasearr.map(elem=>(
             <li><Link className="dropdown-item" to={`/purchase/${elem}`}>{elem}</Link></li>
           ))}
            
          
          </ul>
        </li>
      
       
       
      </ul>
      
    </div>
  </div>
</nav>
        )
    }
}
export default Navbar