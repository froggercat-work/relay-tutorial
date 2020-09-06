/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Apptodo_app_todos_connectionSubscriptionVariables = {||};
export type Apptodo_app_todos_connectionSubscriptionResponse = {|
  +todo_app_todos_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +complete: boolean,
        +id: string,
        +text: string,
      |}
    |}>
  |}
|};
export type Apptodo_app_todos_connectionSubscription = {|
  variables: Apptodo_app_todos_connectionSubscriptionVariables,
  response: Apptodo_app_todos_connectionSubscriptionResponse,
|};
*/


/*
subscription Apptodo_app_todos_connectionSubscription {
  todo_app_todos_connection {
    edges {
      node {
        complete
        id
        text
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "todo_app_todosConnection",
    "kind": "LinkedField",
    "name": "todo_app_todos_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "todo_app_todosEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "todo_app_todos",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "complete",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Apptodo_app_todos_connectionSubscription",
    "selections": (v0/*: any*/),
    "type": "subscription_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Apptodo_app_todos_connectionSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "97ca0a3f3ccd6f034ad7744f99463301",
    "id": null,
    "metadata": {},
    "name": "Apptodo_app_todos_connectionSubscription",
    "operationKind": "subscription",
    "text": "subscription Apptodo_app_todos_connectionSubscription {\n  todo_app_todos_connection {\n    edges {\n      node {\n        complete\n        id\n        text\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2eedcae46e79e84454009bac215d0d5d';

module.exports = node;
