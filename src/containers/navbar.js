import React, {Component} from 'react';

class NavBar extends Component{
  render(){
    return(
      <div className="navbar">
        <div className="navbar-buttons-group">
          <div className="navbar-buttons"><i class="fas fa-th"></i> &nbsp; Locations</div>
          <div className="navbar-buttons"><i className="fas fa-globe"></i> &nbsp; Categories</div>
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default NavBar;
