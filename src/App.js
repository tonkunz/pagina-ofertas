import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Our components
import Header from './components/Header'
import Footer from './components/Footer'
import OffersList from './components/OffersList'
import OfferPage from './components/OfferPage'

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route exact path="/">
          <OffersList />
        </Route>

        <Route path="/offers/:id">
          <OfferPage teste="Hello props" />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
