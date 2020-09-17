import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HQT5MAGLKsUolpmmq3yd7oU4WJZNJVrJhXS3HALkVo1HueI7GxEUsumiAVv1cKMRGWy1XHCBGBJgKgJLYhpQLvi00SFZd93Ct'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when app component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log('USER IS >>>>', authUser);
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

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
