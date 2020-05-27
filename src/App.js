import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Feed from './components/Feed'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>MAIIA TEST</h1>
      <Feed />
    </div>
    </Provider>
  );
}

export default App;
