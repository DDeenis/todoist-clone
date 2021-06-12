import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Main from './components/Main/Main';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
