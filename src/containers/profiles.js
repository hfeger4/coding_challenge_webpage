import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Profiles extends Component{
  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  componentWillUpdate(){
    this.renderList();
  }
  renderList(){
    return this.props.profiles.map((profile) =>{
      return(
      <li key={profile.name} className="profile-boxes">
        <img className="profile-pictures"
        src={profile.profile_picture}></img>
        <div className="profile-text">
        <h4>{profile.name}</h4>
        <div>{profile.title}</div>
        <div>{profile.address.state}, {profile.address.city}</div>
        <div className="stars-profile">
          <div>
          {profile.averageRating === 5 ? this.renderStars3() : this.renderStars5()}
          </div>
          <div className="profile-button">View Profile</div>
        </div>
        </div>
      </li>
      );
    });
  }
  renderStars3(){
    return(
    <div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
    );
  }
  renderStars5(){
    return(
    <div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
    </div>
    );
  }
  render(){
    return(
      <div className="profiles">
        <ul className="profile-list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    profiles: state.profiles
  };
}



export default connect(mapStateToProps)(Profiles);
