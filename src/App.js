import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import { GlobalStyle } from './globalStyles'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <GlobalStyle />
      <Navbar />
      <Shop />
      <Feed />
    </div>
    </Provider>
  );
}

export default App;
