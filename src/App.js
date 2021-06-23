import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Portfolio, Contact } from './pages';
import ContentWrapper from './components/ContentWrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="dark App">
      <Router>
        <Navbar />
        <ContentWrapper
          // backgroundimage={'./assets/images/content-background-dark.png'}
        >
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </ContentWrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
