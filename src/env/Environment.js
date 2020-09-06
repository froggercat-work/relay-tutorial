import {Environment, Network, Store, RecordSource} from 'relay-runtime';

const store = new Store(new RecordSource())

const RELAY_API_ENDPOINT = process.env.RELAY_API_ENDPOINT;

const network = Network.create((operation, variables) => {
  return fetch(RELAY_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})

const environment = new Environment({
  network,
  store,
})

export default environment