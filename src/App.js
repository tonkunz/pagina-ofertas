import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { handleReceiveOffers } from './store/actions/offers'

// Our components
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import OffersList from './components/OffersList'
import OfferPage from './components/OfferPage'

function App() {
  const [loading, setLoading] = useState(true)

  const offers = useSelector(state => state)
  const dispatch = useDispatch()

  // ComponentDidMount
  useEffect(() => {
    dispatch(handleReceiveOffers()).then(() => setLoading(false))
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
  )
}

export default App
