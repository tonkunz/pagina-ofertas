import { getOffers, getOffer } from '../../services/api'

export const RECEIVE_OFFERS = 'RECEIVE_OFFERS'
export const RECEIVE_OFFER = 'RECEIVE_OFFER'

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

export function receiveOffer(offer) {
  return {
    type: RECEIVE_OFFER,
    offer
  }
}

export function handleSingleOffer(id) {
  return dispatch => {
    return getOffer(id).then(offer => dispatch(receiveOffer(offer)))
  }
}