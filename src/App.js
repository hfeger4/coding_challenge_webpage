import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './containers/navbar';
import NavBarSort from './containers/navbar_sort';
import Profiles from './containers/profiles';
import SideBar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar/>
        <NavBarSort/>
        <div className="main-body">
          <Profiles/>
          <SideBar/>
        </div>
      </div>
    );
  }
}

export default App;
