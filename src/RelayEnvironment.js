import fetchGraphQL from './fetchGraphQL';
import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import { execute } from 'apollo-link';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from 'apollo-link-ws'

async function fetchRelay(params, variables) {
    console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
    return fetchGraphQL(params.text, variables);
}
const REACT_APP_RELAY_SUBSCRIPTION_ENDPOINT = "ws://localhost:8080/v1beta1/relay"
const subscriptionClientOld = new SubscriptionClient(REACT_APP_RELAY_SUBSCRIPTION_ENDPOINT, {
    reconnect: true,
    timeout: 30000
});

function setupSubscription(
    config,
    variables,
    cacheConfig,
    observer,
  ) {
    const query = config.text
  
    const subscriptionClient = new SubscriptionClient(REACT_APP_RELAY_SUBSCRIPTION_ENDPOINT, {reconnect: true})
    const id = subscriptionClient.subscribe({query, variables}, (error, result) => {
      observer.onNext({data: result})
    })
  }

const subscriptionLink = new WebSocketLink(subscriptionClientOld)

// Prepare network layer from apollo-link for graphql subscriptions
const networkSubscriptions = (operation, variables) =>
  execute(subscriptionLink, {
    query: operation.text,
    variables
  })

export default new Environment({
    network: Network.create(fetchRelay, setupSubscription),
    store: new Store(new RecordSource())
});