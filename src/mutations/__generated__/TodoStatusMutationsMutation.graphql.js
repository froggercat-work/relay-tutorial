/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type todo_app_todos_pk_columns_input = {|
  todo_id: any
|};
export type todo_app_todos_set_input = {|
  complete?: ?boolean,
  text?: ?string,
  todo_id?: ?any,
  user_id?: ?number,
|};
export type TodoStatusMutationsMutationVariables = {|
  pk_columns: todo_app_todos_pk_columns_input,
  _set?: ?todo_app_todos_set_input,
|};
export type TodoStatusMutationsMutationResponse = {|
  +update_todo_app_todos_by_pk: ?{|
    +text: string,
    +todo_id: any,
    +complete: boolean,
    +user: {|
      +name: string
    |},
  |}
|};
export type TodoStatusMutationsMutation = {|
  variables: TodoStatusMutationsMutationVariables,
  response: TodoStatusMutationsMutationResponse,
|};
*/


/*
mutation TodoStatusMutationsMutation(
  $pk_columns: todo_app_todos_pk_columns_input!
  $_set: todo_app_todos_set_input
) {
  update_todo_app_todos_by_pk(pk_columns: $pk_columns, _set: $_set) {
    text
    todo_id
    complete
    user {
      name
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "_set"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pk_columns"
},
v2 = [
  {
    "kind": "Variable",
    "name": "_set",
    "variableName": "_set"
  },
  {
    "kind": "Variable",
    "name": "pk_columns",
    "variableName": "pk_columns"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "todo_id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "complete",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoStatusMutationsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "todo_app_todos",
        "kind": "LinkedField",
        "name": "update_todo_app_todos_by_pk",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "todo_app_users",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoStatusMutationsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "todo_app_todos",
        "kind": "LinkedField",
        "name": "update_todo_app_todos_by_pk",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "todo_app_users",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7d186591487e3b534f98b493030cdd0d",
    "id": null,
    "metadata": {},
    "name": "TodoStatusMutationsMutation",
    "operationKind": "mutation",
    "text": "mutation TodoStatusMutationsMutation(\n  $pk_columns: todo_app_todos_pk_columns_input!\n  $_set: todo_app_todos_set_input\n) {\n  update_todo_app_todos_by_pk(pk_columns: $pk_columns, _set: $_set) {\n    text\n    todo_id\n    complete\n    user {\n      name\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '06c48ddc5b677ed2b91558a8f7e731b6';

module.exports = node;
