import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import { GlobalStyle } from './globalStyles'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <GlobalStyle />
      <Navbar />
      <Feed />
    </div>
    </Provider>
  );
}

export default App;
