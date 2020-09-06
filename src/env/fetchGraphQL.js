import { fetchEndpoint } from './apiEndpoints';

async function fetchGraphQL(text, variables) {

  const response = await fetch(fetchEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  return await response.json();
}

// async function fetchDummyGraphql(text) {
//   return await server.query(text)
// }

export default fetchGraphQL;