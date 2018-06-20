import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './containers/navbar';
import NavBarSort from './containers/navbar_sort';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar/>
        <NavBarSort/>
      </div>
    );
  }
}

export default App;
