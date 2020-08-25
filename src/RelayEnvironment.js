import fetchGraphQL from './fetchGraphQL';
import { Environment, Network, Store, RecordSource } from 'relay-runtime';

async function fetchRelay(params, variables) {
    console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
    return fetchGraphQL(params.text, variables);
}

export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource())
});