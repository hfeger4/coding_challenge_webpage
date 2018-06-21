import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { selectTop } from '.././actions/index';

class NavBarSort extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
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
              <a href="#">View Count</a>
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

function mapStateToProps(state){
  return{
    profiles: state.profiles
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectTop}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBarSort);
