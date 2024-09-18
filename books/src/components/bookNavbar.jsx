import React,{Component} from "react";
import { Link } from "react-router-dom";

class BookNavbar extends Component{
    render()
    {
        return(
            <nav class="navbar navbar-expand-sm bg-body-tertiary bg-light mb-3">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><i class="fa-solid fa-book-open"></i></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/books?searchText=Harry Porter&startIndex=0&maxResults=8">Harry Potter</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/books?searchText=Agatha Christie&startIndex=0&maxResults=8">Agatha Christie</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/books?searchText=Premchand&startIndex=0&maxResults=8">Premchand</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/books?searchText=Jane Austen&startIndex=0&maxResults=8'>Jane Austen</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/myself'>MyBook</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/setting'>Setting</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        )
    }
}
export default BookNavbar