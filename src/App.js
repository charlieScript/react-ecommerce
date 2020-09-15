import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
// import Cart from './components/Cart';
import Home from './components/Home';
import Cart from './components/Cart';
import Productdetails from './components/Productdetails';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/products' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products/:id' component={Productdetails} />
            <Footer />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
