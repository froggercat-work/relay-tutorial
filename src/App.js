import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "froggercat", name: "lacona-numi-plugin") {
      name
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, RepositoryNameQuery, {
  name: "lacona-numi-plugin",
  owner: "froggercat"
});

function App(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository.name}</p>
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;