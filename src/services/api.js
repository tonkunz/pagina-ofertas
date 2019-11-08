const url = 'https://playground.barato.com.br/desafio-front/api'

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
}

export const getOffers = () => (
  fetch(`${url}/offers`, { headers })
    .then(res => res.json())
    .catch(e => console.warn('API: getOffers method error: ',e))
)

export const getOffer = (id) => (
  fetch(`${url}/offer/${id}`, { headers })
    .then(res => res.json())
    .catch(e => console.warn('API: getOffer method error: ',e))
)