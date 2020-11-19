import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
// import Cart from './components/Cart';
import Home from './components/Home';
import Cart from './components/Cart';
import Productdetails from './components/Productdetails';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Store from './components/Store';
import User from './components/User';
import { useEffect } from 'react';
import { fetchFromDatabase } from './redux/cart/cartActions';
// import Test from './components/Test'

function App() {
  // load from database once components loads
  useEffect(() => {
    store.dispatch(fetchFromDatabase());
  }, []);
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/user" component={User} />
            <Route exact path="/products" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={Productdetails} />
            <Footer />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
