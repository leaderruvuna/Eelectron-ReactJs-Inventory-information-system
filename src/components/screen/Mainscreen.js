import React,{Component}  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import  "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
//import { faCheckSquare, faCoffee,faPhotoVideo, faBold } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../assets/css/main.scss";



//-------------------------------------------------------------------
/* Import tabs */

import Dashboard from "../tabs/dashboard";
import Users from "../tabs/users";
import Groups from "../tabs/groups";
import Category from "../tabs/category";
import Brands from '../tabs/brand';
import Store from "../tabs/store";
import Attribute from "../tabs/attribute";
import Product from "../tabs/products";
import Orders from "../tabs/orders";
import Settings from "../tabs/settings";
import Profile from "../tabs/profile";
import Company from "../tabs/company";
import Backup from "../tabs/backup";
import Report from "../tabs/report";
//


//const ipcRenderer=electron.ipcRenderer;
library.add(fab);
const electron = window.require('electron');
const ipcRenderer=electron.ipcRenderer;
class MainScreen extends Component{

  constructor(){
    super();
    
  }
  
  
  logout=()=>{
    ipcRenderer.send('user-logout','data');
    //alert("this");
  }
  
  render(){
  return(
    
    <div className="App" >
    
    <div class="d-flex flex-row mt-2">
    <div className="topDiv"><label class="usertitle-label">MANAGER:</label><label class="username-label">Leader Ruvuna</label><button type="button" class="btn btn-primary" onClick={this.logout}>Logout<i class="fas fa-sign-out-alt"></i></button></div>
    <ul class="nav nav-tabs nav-tabs--vertical nav-tabs--left shadow" role="navigation">
    <p style={{fontWeight:"bold",fontSize:20,marginLeft:25,marginTop:14,color:'#00cc66'}}><i class="fas fa-check-circle"></i>INV.Smart</p>
      <li class="nav-item">
      
      <a href="#dashboard" class="nav-link active" data-toggle="tab" role="tab" aria-controls="dashboard"><i class="fas fa-tachometer-alt fa-fw head"></i><h class="head">Dashboard</h></a>
      </li>
      
      <li class="nav-item">
        <a href="#groups" class="nav-link" data-toggle="tab" role="tab" aria-controls="groups" hidden><i class="fas fa-users fa-fw head"></i> <h class="head" >User Group</h></a>
      </li>
      <li class="nav-item">
        <a href="#users" class="nav-link" data-toggle="tab" role="tab" aria-controls="users"><i class="fas fa-user-tie fa-fw head"></i> <h class="head">User Management</h></a>
      </li>
      <li class="nav-item">
        <a href="#profile" class="nav-link" data-toggle="tab" role="tab" aria-controls="profile"><i class="fas fa-people-carry fa-fw head"></i> <h class="head">Customers</h></a>
      </li>
      <li class="nav-item">
        <a href="#brand" class="nav-link" data-toggle="tab" role="tab" aria-controls="brand"><i class="fas fa-ring fa-fw head"></i> <h class="head">Brand</h></a>
      </li>
      <li class="nav-item">
        <a href="#category" class="nav-link" data-toggle="tab" role="tab" aria-controls="category"><i class="fas fa-window-restore fa-fw head"></i> <h class="head">Category</h></a>
      </li>
      <li class="nav-item">
        <a href="#store" class="nav-link" data-toggle="tab" role="tab" aria-controls="store"><i class="fas fa-store fa-fw head"></i> <h class="head">Store</h></a>
      </li>

      <li class="nav-item">
      <a href="#attribute" class="nav-link" data-toggle="tab" role="tab" aria-controls="attribute"><i class="fas fa-dice-five fa-fw head"></i> <h class="head">Attributes</h></a>
    </li>
      
      <li class="nav-item">
        <a href="#products" class="nav-link" data-toggle="tab" role="tab" aria-controls="products"><i class="fas fa-box-open fa-fw head"></i> <h class="head">products</h></a>
      </li>
      <li class="nav-item">
        <a href="#order" class="nav-link" data-toggle="tab" role="tab" aria-controls="order"><i class="fas fa-shopping-cart fa-fw head"></i> <h class="head">Orders</h></a>
      </li>
      <li class="nav-item">
        <a href="#report" class="nav-link" data-toggle="tab" role="tab" aria-controls="report"><i class="fas fa-bookmark fa-fw head"></i> <h class="head">Report</h></a>
      </li>
      <li class="nav-item">
        <a href="#company" class="nav-link" data-toggle="tab" role="tab" aria-controls="company"><i class="fas fa-building fa-fw head"></i><h class="head">Company</h></a>
      </li>
     
      <li class="nav-item">
        <a href="#setting" class="nav-link" data-toggle="tab" role="tab" aria-controls="setting"><i class="fas fa-cog fa-fw head"></i> <h class="head">Settings</h></a>
      </li>
      <li class="nav-item">
        <a  class="nav-link" data-toggle="tab" role="tab" aria-controls="logout"  href="#logout" hidden><i class="fas fa-cloud fa-fw head" ></i> <h class="head">Back Up & Restore</h></a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="dashboard" role="tabpanel">
        <h7 className="title">-</h7>
        <Dashboard/>
         
      </div>
      <div class="tab-pane fade" id="users" role="tabpanel">
      <h7 className="title">-</h7>
        <Users/>
       
      </div>
      <div class="tab-pane fade" id="groups" role="tabpanel">
      <h7 className="title">-</h7>
      <Groups/>
     
    </div>
      <div class="tab-pane fade" id="brand" role="tabpanel">
      <h7 className="title">-</h7>
        <Brands/>
       </div>
      <div class="tab-pane fade" id="category" role="tabpanel">
      <h7 className="title">-</h7>
        <Category/>
        <p>
        </p>
      </div>
      <div class="tab-pane fade" id="store" role="tabpanel">
      <h7 className="title">-</h7>
        <Store/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="attribute" role="tabpanel">
      <h7 className="title">-</h7>
        <Attribute/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="products" role="tabpanel">
      <h7 className="title">-</h7>
        <Product/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="order" role="tabpanel">
      <h7 className="title">-</h7>
        <Orders/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="report" role="tabpanel">
      <h7 className="title">-</h7>
        <Report/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="company" role="tabpanel">
      <h7 className="title">-</h7>
        <Company/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel">
      <h7 className="title">-</h7>
        <Profile/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="setting" role="tabpanel">
      <h7 className="title">-</h7>
        <Settings/>
        <p></p>
      </div>
      <div class="tab-pane fade" id="logout" role="tabpanel">
        <h7 className="title">-</h7>
        <Backup/>
        <p></p>
      </div>
    </div>
  </div>                             
    </div>
   );
  }
}
export const _Logout=()=>{
  ipcRenderer.send('user-logout','data');
  console.log("triggered");
}
export const Gadget = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Popular gadgets come from vendors like:
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />
    <FontAwesomeIcon icon={['fab', 'dashboard']} />
  </div>
);
export const Beverage = () => (
  <div>
  <FontAwesomeIcon icon={['fab', 'dashcube']} />
  </div>
);

export default MainScreen;