import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
