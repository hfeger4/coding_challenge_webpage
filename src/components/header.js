import React,{ Component } from 'react';
import logo from '../images/logo-small.png';

class Header extends Component{
  render(){
    return(
      <div className="header">
        <img className="logo" src={logo}></img>
        <div className="right-side-buttons-header">
          <div className="login">Login</div>
          <div className="signup">Sign Up Free</div>
        </div>
      </div>
    );
  }
}

export default Header;
