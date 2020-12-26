import React from 'react';

// Styles
import './scss/main.scss';

// Components
import Header from './components/header';

// Main component where all the functions will happen
import Main from './Main';

const App = () => (
  <div id='app'>
    <Header />
    <Main />
  </div>
);

export default App;
