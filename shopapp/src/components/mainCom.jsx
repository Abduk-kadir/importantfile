import React,{Component} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Purchase from './purchase';
import Shops from './shops';
import totalPurchaseShop from './totalPurchaseShop';
import Products from './products';
import PurchaseProduct from './purchaseProduct';
import TotalPurchaseProduct from './totalPurchaseProduct';
import AddShop from './addShop';
import AddProduct from './addProduct';
import AllPurchase from './allPurchase';
import AddPurchase from './addPurchase';

class MainCom extends Component{
    
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <Switch>
           
           
            <Route path={'/Shops/view'} component={Shops}></Route>
            <Route path={'/Shops/Add'} component={AddShop}></Route>
            <Route path={'/shop/purchase/:id'} component={Purchase}></Route>
            <Route path={'/shop/totalpurchase/:id'} component={totalPurchaseShop}></Route>

            <Route path={'/products/View'} component={Products}></Route>
            <Route path={'/products/Add'} component={AddProduct}></Route>
            <Route path={'/purchases/:id/edit'} component={AddProduct}></Route>
            <Route path={'/purchases/products/:id'} component={PurchaseProduct}></Route>
            <Route path={'/totalpurchases/products/:id'} component={TotalPurchaseProduct}></Route>

            <Route path={'/purchase/View'} component={AllPurchase}></Route>
            <Route path={'/purchase/Add'} component={AddPurchase}></Route>

            </Switch>
            </React.Fragment>
        )
    }
}
export default MainCom