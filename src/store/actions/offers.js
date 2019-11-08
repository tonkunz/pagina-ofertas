import { getOffers } from '../../services/api'

export const RECEIVE_OFFERS = 'RECEIVE_OFFERS'

export function receiveOffers(offers) {
  return {
    type: RECEIVE_OFFERS,
    offers
  }
}

export function handleReceiveOffers() {
  return dispatch => {
    return getOffers().then(offers => dispatch(receiveOffers(offers)))
  }
}
