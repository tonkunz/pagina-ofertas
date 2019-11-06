const url = 'https://playground.barato.com.br/desafio-front/api'

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  }

export const getOffers = () => (
    fetch(`${url}/offers`, { headers })
        .then(res => res.json())
)

// Just for tests
// export const testApi = () => (
//     fetch(`${url}/offers`, { headers })
//         .then(res => res.json())
//         .then(data => console.log(data))
// )