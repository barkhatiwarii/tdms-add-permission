import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/layout/Header";
import Dashboard from "./components/Dashboard";
import AddPermission from "./components/permissions/AddPermission";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Header/> 
    
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/addPermission" component={AddPermission} />
  
    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
