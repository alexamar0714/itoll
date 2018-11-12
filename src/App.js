import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/index.js';
import Scanner from './components/scanner/index.js';
import Transaction from './components/transaction/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/index.js';


class App extends Component {
  
    handleRouter = e => {
	    this.currentUrl = e.url;
    }

    render() {
    return (
      <div className="App">
      <BrowserRouter onChange={this.handleRoute}>
      <div>
      <Header />
	    <Route path='/itoll' exact component={Home}/>
	    <Route path='/itoll/scanner' exact component={Scanner}/>
	    <Route path='/itoll/transaction' exact component={Transaction} />
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
