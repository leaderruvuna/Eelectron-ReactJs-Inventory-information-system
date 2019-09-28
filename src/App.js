import React,{Component}  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "../public/css/login.css";

import './App.css';
const electron = window.require('electron');
const ipcRenderer=electron.ipcRenderer;

//var css= process.env.PUBLIC_URL+"/images/image.jpg";

class App extends Component{

  login=()=>{
    ipcRenderer.send('toggle-image','data');
    //alert("this");
  }
  
  render(){
  return(
  
    <div className="App" >
    <div className="login-page" >
    <div className="form">
     
      <form className="login-form">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button onClick={this.login}>login</button>
        <p className="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  </div>
    </div>
   );
  }
}
export default App;