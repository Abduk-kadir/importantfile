import React,{Component} from 'react'
import MobileNavbar from './mobileNavbar'
import { Switch,Route,Redirect } from 'react-router-dom'
import Mobiles from './mobiles'
import DeleteMob from './deleteMob'
import NewMobile from './newMobile'

class MobileMain extends Component{
    render()
    {
        
        return(
           <React.Fragment>
           <MobileNavbar/>
           <Switch>
            
             <Route path='/mobiles/brand/:brand' component={Mobiles}></Route>
             <Route path='/mobiles/:id/delete' component={DeleteMob}></Route>
             <Route path='/mobiles/:id/edit' component={NewMobile}></Route>
             <Route path='/New Mobile' component={NewMobile}></Route>

             
             <Route path='/mobiles/ram/:ram' component={Mobiles}></Route>
             <Route path='/mobiles/rom/:rom' component={Mobiles}></Route>
             <Route path='/mobiles/os/:os' component={Mobiles}></Route>
             <Route path='/mobiles' component={Mobiles}></Route>
           </Switch>
           </React.Fragment> 

        )
    }
}
export default MobileMain