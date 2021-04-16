import React, { useContext } from 'react';

import './App.css';
import Landing from './screens/Landing';
import TodoPage from './screens/TodoPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import GoogleLogin from './screens/Login';
import GoogleLogout from './screens/Logout';
import PrivateRoute from './components/PrivateRoute'
import {AppContext} from './context/context'
import ContactList from './components/ContactList';

function TodoApp() {

  const {isLogin} = useContext(AppContext)

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path='/' exact={true} component={Landing}></Route>
          {/* <Route path='/todo' component={TodoPage}></Route> */}
          <Route path='/login'>
            <GoogleLogin />

          </Route>

          <Route path='/me'>{
            isLogin ?
              <>
                <TodoPage /> <GoogleLogout />
              </>
              : <Redirect to="/" />}
          </Route>
          <Route path='/contacts'>
            <ContactList></ContactList>
          </Route>
          
          <Route path='*'>This page don't exist</Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default TodoApp;
