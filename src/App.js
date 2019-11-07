import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Api
import { getOffers } from './services/api'

// Our components
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import OffersList from './components/OffersList'
import OfferPage from './components/OfferPage'

function App() {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)

  // ComponentDidMont
  useEffect(() => {
    getOffers()
      .then(data => setOffers(data))
      .then(() => setLoading(false))
  }, [])

  return (
    <Router>
      <Header />
      {loading
        ? <Loading />
        : <Switch>

          <Route exact path="/">
            <OffersList offers={offers} />
          </Route>

          <Route path="/offers/:id">
            <OfferPage data={offers} />
          </Route>

        </Switch>
      }

      <Footer />
    </Router>
  );
}

export default App;
