import React, { Component } from 'react';
import '../../assets/css/login.css';
import './design';
import image from '../../assets/images/image.jpg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image6.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';

import firebaseapp from '../../service/Firebase';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
class signLogin extends Component {
  constructor() {
    super();
    this.state = {
      //signup data
      email: '',
      username: '',
      password: '',
      company_name: '',
      comapny_address: '',
      btn_status: false,
      //login data
      login_email: '',
      login_password: '',
      log_btn_status: false,

      validate_input_sign: true,
      validate_input_login: true,
    };
  }

  //---------------------------------------login ------------------------------------------------------//

  login = () => {
    //ipcRenderer.send('user-login','data');
    if (this.validateLogin()) {
      this.setState({ validate_input_login: true });
      this.setState({
        log_btn_status: true,
      });
      firebaseapp
        .auth()
        .signInWithEmailAndPassword(
          this.state.login_email,
          this.state.login_password,
        )
        .then(() => {
          this.setState({
            log_btn_status: false,
          });
          ipcRenderer.send('user-login', 'data');
        })
        .catch(e => {
          console.log('error' + e);
          this.setState({
            log_btn_status: false,
          });
        });
    }

    //---------------------------------------signup ----------------------------------------------------//
  };
  signup = async () => {
    if (this.validate()) {
      this.setState({ validate_input_sign: true });
      this.setState({
        btn_status: true,
      });

      //ipcRenderer.send('user-login','data');
      firebaseapp
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.setState({
            btn_status: false,
          });
          ipcRenderer.send('user-login', 'data');
        })
        .catch(() => {
          this.setState({
            btn_status: false,
          });
        });
    }
  };
  //====================================================================================//
  //----------------------------handle input changes ----------------------------------//
  handleEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };
  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handleCompanyname(e) {
    this.setState({
      company_name: e.target.value,
    });
  }
  handleCompanyaddress(e) {
    this.setState({
      comapny_address: e.target.value,
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleLogEmail(e) {
    this.setState({
      login_email: e.target.value,
    });
  }
  handleLogPassword(e) {
    this.setState({
      login_password: e.target.value,
    });
  }

  //------------------------- end of handle input  ------------------------------------------//
  //=========================================================================================//

  //--------------------------------validate fields ----------------------------------------//

  validate = () => {
    if (
      this.state.email !== '' &&
      this.state.username !== '' &&
      this.state.company_name !== '' &&
      this.state.comapny_address !== '' &&
      this.state.password !== ''
    ) {
      //console.log("all fields must be filled");

      return true;
    } else {
      this.setState({ validate_input_sign: false });
      return false;
    }
  };
  validateLogin = () => {
    if (this.state.login_email !== '' && this.state.login_password !== '') {
      return true;
    } else {
      this.setState({ validate_input_login: false });
      return false;
    }
  };

  //-----------------------------------end validation -------------------------------------//
  render() {
    return (
      <div className="App">
        <h3 class="system-title">Inventory Management System</h3>
        <p class="descript-paragraph">
          Monitoring and Maintenance of your stock product{' '}
        </p>
        <p class="descript-paragraph-with">WITH</p>
        <p>
          <a href="#" class="inv-title">
            <i class="fas fa-check-circle" />
            Inv.Smart
          </a>
        </p>
        <p class="image-para">
          <div
            id="demo"
            class="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active" />
              <li data-target="#demo" data-slide-to="1" />
              <li data-target="#demo" data-slide-to="2" />
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item">
                <img src={image} alt="Chicago" />
              </div>
              <div class="carousel-item active">
                <img src={image3} alt="Los Angeles" />
              </div>
              <div class="carousel-item">
                <img src={image2} alt="New York" />
              </div>
              <div class="carousel-item">
                <img src={image4} alt="New York" />
              </div>
              <div class="carousel-item">
                <img src={image5} alt="New York" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon" />
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon" />
            </a>
          </div>
        </p>
        <div class="form-wrap">
          <div class="tabs">
            <h3 class="login-tab">
              <a class="active" href="#login-tab-content">
                Login
              </a>
            </h3>
            <h3 class="signup-tab">
              <a href="#signup-tab-content">Sign Up</a>
            </h3>
          </div>
          <div class="tabs-content">
            <div id="signup-tab-content">
              <form class="signup-form">
                <input
                  type="email"
                  class="input"
                  id="user_email"
                  value={this.state.email}
                  onChange={event => this.handleEmail(event)}
                  autocomplete="off"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  class="input"
                  id="user_name"
                  value={this.state.username}
                  onChange={event => this.handleUsername(event)}
                  autocomplete="off"
                  placeholder="Username"
                  required
                />
                <input
                  type="text"
                  class="input"
                  id="company_name"
                  value={this.state.company_name}
                  onChange={event => this.handleCompanyname(event)}
                  autocomplete="off"
                  placeholder="Company Name"
                  required
                />
                <input
                  type="text"
                  class="input"
                  id="company_address"
                  value={this.state.comapny_address}
                  onChange={event => this.handleCompanyaddress(event)}
                  autocomplete="off"
                  placeholder="Company Address"
                  required
                />
                <input
                  type="password"
                  class="input"
                  id="user_pass"
                  value={this.state.password}
                  onChange={event => this.handlePassword(event)}
                  autocomplete="off"
                  placeholder="Password"
                  required
                />
                <input
                  type="button"
                  class="button"
                  value="Sign Up"
                  onClick={this.signup}
                />
                {!this.state.btn_status ? null : (
                  <div
                    class="spinner-border"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '80%',
                      color: '#1ab188',
                    }}
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
                {this.state.validate_input_sign ? null : (
                  <span
                    class=""
                    style={{
                      position: 'relative',
                      left: '26%',
                      color: '#F08080',
                      fontWeight: 'bold',
                    }}
                  >
                    All fields are required!
                  </span>
                )}
              </form>
            </div>

            <div id="login-tab-content" class="active">
              <form class="login-form" action="" method="post">
                <input
                  type="text"
                  class="input"
                  id="user_login"
                  value={this.state.login_email}
                  onChange={event => this.handleLogEmail(event)}
                  autocomplete="off"
                  placeholder="Email or Username"
                />
                <input
                  type="password"
                  class="input"
                  id="user_pass"
                  value={this.state.login_password}
                  onChange={event => this.handleLogPassword(event)}
                  autocomplete="off"
                  placeholder="Password"
                />
                <input
                  type="button"
                  class="button"
                  value="Login"
                  onClick={this.login}
                />
              </form>
              <div class="help-text">
                <p>
                  <a href="#">Forget your password?</a>
                </p>
              </div>
              {!this.state.log_btn_status ? null : (
                <div
                  class="spinner-border"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '62%',
                    color: '#1ab188',
                  }}
                >
                  <span class="sr-only">Loading...</span>
                </div>
              )}
              {this.state.validate_input_login ? null : (
                <span
                  class=""
                  style={{
                    position: 'relative',
                    left: '26%',
                    color: '#F08080',
                    fontWeight: 'bold',
                  }}
                >
                  All fields are required !
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default signLogin;
