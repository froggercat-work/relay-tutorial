async function fetchGraphQL(text, variables) {
  const REACT_APP_RELAY_API_ENDPOINT = process.env.REACT_APP_RELAY_API_ENDPOINT;

  const response = await fetch(REACT_APP_RELAY_API_ENDPOINT, {
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

export default fetchGraphQL;