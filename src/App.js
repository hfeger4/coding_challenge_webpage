import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './containers/navbar';
import NavBarSort from './containers/navbar_sort';
import Profiles from './containers/profiles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar/>
        <NavBarSort/>
        <Profiles/>
      </div>
    );
  }
}

export default App;
