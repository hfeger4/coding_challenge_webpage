import React, {Component} from 'react';

class NavBarSort extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container-navbar">
        <div className="navbar-sort">
          <div className="contractor-location">
            <h2>Newest Contractors in Santa Clara, CA</h2>
            <div className="search-details">&nbsp;(2 Results)</div>
          </div>
          <div>
            <button className="sort-button">
            <i class="fas fa-sort-amount-down">
            </i>&nbsp;Sort By (Best Match)</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarSort;
