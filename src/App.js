import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Routes from './config/routes';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes />
    </div>
  );
}
export default App;
