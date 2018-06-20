import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './containers/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar/>
      </div>
    );
  }
}

export default App;
