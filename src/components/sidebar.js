import React, {Component} from 'react';

class SideBar extends Component{
  render(){
    return(
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-item">Home</div>
          <div className="sidebar-item">Wellness</div>
          <div className="sidebar-item">Consulting</div>
          <div className="sidebar-item">Automotive</div>
          <div className="sidebar-item">Events</div>
          <div className="sidebar-item">Tech</div>
          <div className="sidebar-item">Pets</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
