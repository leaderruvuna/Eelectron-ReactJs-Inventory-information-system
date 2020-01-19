import React, { Component } from 'react';
import '../css/login.css';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

//var css= process.env.PUBLIC_URL+"/images/image.jpg";

class Loginscreen extends Component {
  login = () => {
    ipcRenderer.send('toggle-image', 'data');
    //alert("this");
  };

  render() {
    return (
      <div className="App">
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button onClick={this.login}>login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Loginscreen;
