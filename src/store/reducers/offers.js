import { RECEIVE_OFFERS } from '../actions/offers'

export default function offers(state = [], action) {
  switch (action.type) {
    case RECEIVE_OFFERS:
      return [
        ...action.offers
      ]
    default:
      return state
  }
}
