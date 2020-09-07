import React from 'react';
import store from './redux/store';
import { Provider } from "react-redux";
import Cart from './components/Cart';


function App() {
 

  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
