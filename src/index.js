import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Redux store imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/offers'
import middleware from './store/middlewares'

// Startin the Redux store
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
