import { RECEIVE_OFFERS, RECEIVE_OFFER } from '../actions/offers'

export default function offers(state = {}, action) {
  switch (action.type) {
    case RECEIVE_OFFERS:
      return {
        offers: [...action.offers]
      }
    case RECEIVE_OFFER:
      return {
        ...state,
        singleOffer: action.offer
      }
    default:
      return state
  }
}
