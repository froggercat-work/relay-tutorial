/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoList_viewer$ref = any;
export type AppAllTodosQueryVariables = {||};
export type AppAllTodosQueryResponse = {|
  +$fragmentRefs: TodoList_viewer$ref
|};
export type AppAllTodosQuery = {|
  variables: AppAllTodosQueryVariables,
  response: AppAllTodosQueryResponse,
|};
*/


/*
query AppAllTodosQuery {
  ...TodoList_viewer
}

fragment Checkbox_todo on todo_app_todos {
  complete
  todo_id
}

fragment TodoList_viewer on query_root {
  todo_app_todos_connection(last: 100, order_by: {todo_id: desc}) {
    edges {
      node {
        ...Todo_todo
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment Todo_todo on todo_app_todos {
  todo_id
  text
  user {
    name
    id
  }
  ...Checkbox_todo
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "todo_id": "desc"
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllTodosQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoList_viewer"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAllTodosQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
                    "name": "todo_id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "todo_app_users",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "complete",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "todo_app_todos_connection(last:100,order_by:{\"todo_id\":\"desc\"})"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "TodoList_todo_app_todos_connection",
        "kind": "LinkedHandle",
        "name": "todo_app_todos_connection"
      }
    ]
  },
  "params": {
    "cacheID": "1f6e4e0ae36f0f2981eeababd07cbcf7",
    "id": null,
    "metadata": {},
    "name": "AppAllTodosQuery",
    "operationKind": "query",
    "text": "query AppAllTodosQuery {\n  ...TodoList_viewer\n}\n\nfragment Checkbox_todo on todo_app_todos {\n  complete\n  todo_id\n}\n\nfragment TodoList_viewer on query_root {\n  todo_app_todos_connection(last: 100, order_by: {todo_id: desc}) {\n    edges {\n      node {\n        ...Todo_todo\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Todo_todo on todo_app_todos {\n  todo_id\n  text\n  user {\n    name\n    id\n  }\n  ...Checkbox_todo\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '85241f31c8ddea10a2649f051a86bd00';

module.exports = node;
