import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ContentWrapper from './components/ContentWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ContentWrapper
          backgroundimage={'./assets/images/content-background.png'}
        >
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </ContentWrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
