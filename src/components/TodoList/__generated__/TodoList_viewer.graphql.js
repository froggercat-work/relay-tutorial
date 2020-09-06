/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Todo_todo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TodoList_viewer$ref: FragmentReference;
declare export opaque type TodoList_viewer$fragmentType: TodoList_viewer$ref;
export type TodoList_viewer = {|
  +todo_app_todos_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +$fragmentRefs: Todo_todo$ref
      |}
    |}>
  |},
  +$refType: TodoList_viewer$ref,
|};
export type TodoList_viewer$data = TodoList_viewer;
export type TodoList_viewer$key = {
  +$data?: TodoList_viewer$data,
  +$fragmentRefs: TodoList_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "todo_app_todos_connection"
        ]
      }
    ]
  },
  "name": "TodoList_viewer",
  "selections": [
    {
      "alias": "todo_app_todos_connection",
      "args": null,
      "concreteType": "todo_app_todosConnection",
      "kind": "LinkedField",
      "name": "__TodoList_todo_app_todos_connection_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Todo_todo"
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
      "storageKey": null
    }
  ],
  "type": "query_root",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '5553a12734c731ff41e7eb7f01065b31';

module.exports = node;
