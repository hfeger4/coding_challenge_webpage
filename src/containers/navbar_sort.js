import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
          <div className="dropdown-position">
          <div class="dropdown">
            <button class="dropbtn"><i class="fas fa-sort-amount-down"></i>&nbsp;Sort By (Best Match)</button>
            <div class="dropdown-content">
              <button onClick={()=>this.props.selectTop(this.props.profiles)}>Top Rated</button>
              <button onClick={()=>this.props.selectViews(this.props.profiles)}>View Count</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}



const selectTop = profiles => ({
  type: 'SELECT_TOP',
  profiles
});

export const selectViews = profiles => ({
  type: 'SELECT_VIEWS',
  payload: profiles
});

function mapStateToProps(state){
  return{
    profiles: state.profiles
  };
}

function mapDispatchToProps(dispatch){
  return{
    selectTop : bindActionCreators(selectViews,dispatch),
    selectViews: bindActionCreators(selectTop,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBarSort);
