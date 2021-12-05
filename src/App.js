import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import { Contact, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="main">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <Home />} />
          <Route exact path="/services" render={() => <Home />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
