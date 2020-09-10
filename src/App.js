import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log('USER IS >>>>', authUser);
      if (authUser) {
        // user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user  is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
