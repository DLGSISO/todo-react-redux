import React from 'react';

import './App.css';
import Landing from './screens/Landing';
import TodoPage from './screens/TodoPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GoogleLogin from './screens/Login';

function TodoApp() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path='/' exact={true} component={Landing}></Route>
          <Route path='/todo' component={TodoPage}></Route>
          <Route path='/login' component={GoogleLogin}></Route>
          <Route path='*'>This page don't exist</Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default TodoApp;
