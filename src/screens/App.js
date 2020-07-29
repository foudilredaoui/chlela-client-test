import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Editor from './editor';
import Navbar from '../components/navbar'

function App() {
  return (<>
    <Navbar/>
    <div className="container-fluid">
    
    <Switch>
      <Redirect exact from="/" to="/editor" />
      <Route path='/editor' component={Editor} />
    </Switch>
  </div></>
  );
}

export default App;
