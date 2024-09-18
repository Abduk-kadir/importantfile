import React,{Component} from 'react'
import HomePage from './homePage'
import {Switch,Route,Redirect} from 'react-router-dom'
import Books from './books'
import AddCart from './addCart'


import BookNavbar from './bookNavbar'
class BooksMain extends Component{
    render(){
        return (
        <React.Fragment>  
        <BookNavbar/>
        <Switch>
          <Route path={'/books'} component={Books}></Route>
          <Route path={'/myself'} component={Books}></Route>
          <Route path={'/setting'} component={Books}></Route>
          <Route path={'/'} component={HomePage}></Route>
        </Switch>
        </React.Fragment>  

        )
    }
}
export default BooksMain