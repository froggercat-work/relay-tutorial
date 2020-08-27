import fetchGraphQL from './fetchGraphQL';
import { Environment, Network, Store, RecordSource, Observable } from 'relay-runtime';
// import { execute } from 'apollo-link';
import { SubscriptionClient } from 'subscriptions-transport-ws';
// import { WebSocketLink } from 'apollo-link-ws'

async function fetchRelay(params, variables) {
    console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
    return fetchGraphQL(params.text, variables);
}
const websocketURL = "ws://localhost:8080/v1beta1/relay"

const subscriptionClient = new SubscriptionClient(websocketURL, {
    reconnect: true,
});

const subscribe = (request, variables) => {
    const subscribeObservable = subscriptionClient.request({
        query: request.text,
        operationName: request.name,
        variables,
    });
    // Important: Convert subscriptions-transport-ws observable type to Relay's
    return Observable.from(subscribeObservable);
};

export default new Environment({
    network: Network.create(fetchRelay, subscribe),
    store: new Store(new RecordSource())
});