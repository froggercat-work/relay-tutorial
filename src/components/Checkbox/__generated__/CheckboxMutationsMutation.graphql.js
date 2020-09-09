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
export type CheckboxMutationsMutationVariables = {|
  pk_columns: todo_app_todos_pk_columns_input,
  _set?: ?todo_app_todos_set_input,
|};
export type CheckboxMutationsMutationResponse = {|
  +update_todo_app_todos_by_pk: ?{|
    +todo_id: any,
    +complete: boolean,
    +id: string,
  |}
|};
export type CheckboxMutationsMutation = {|
  variables: CheckboxMutationsMutationVariables,
  response: CheckboxMutationsMutationResponse,
|};
*/


/*
mutation CheckboxMutationsMutation(
  $pk_columns: todo_app_todos_pk_columns_input!
  $_set: todo_app_todos_set_input
) {
  update_todo_app_todos_by_pk(pk_columns: $pk_columns, _set: $_set) {
    todo_id
    complete
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
    "alias": null,
    "args": [
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
    "concreteType": "todo_app_todos",
    "kind": "LinkedField",
    "name": "update_todo_app_todos_by_pk",
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
        "name": "complete",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CheckboxMutationsMutation",
    "selections": (v2/*: any*/),
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
    "name": "CheckboxMutationsMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4cfee7d7cc4dd712424ac9b9277c59f3",
    "id": null,
    "metadata": {},
    "name": "CheckboxMutationsMutation",
    "operationKind": "mutation",
    "text": "mutation CheckboxMutationsMutation(\n  $pk_columns: todo_app_todos_pk_columns_input!\n  $_set: todo_app_todos_set_input\n) {\n  update_todo_app_todos_by_pk(pk_columns: $pk_columns, _set: $_set) {\n    todo_id\n    complete\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bcc59e76f308a8316dae85b4b10c4764';

module.exports = node;
