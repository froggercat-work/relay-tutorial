/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Todo_todo$ref: FragmentReference;
declare export opaque type Todo_todo$fragmentType: Todo_todo$ref;
export type Todo_todo = {|
  +id: string,
  +complete: boolean,
  +text: string,
  +user: {|
    +name: string
  |},
  +$refType: Todo_todo$ref,
|};
export type Todo_todo$data = Todo_todo;
export type Todo_todo$key = {
  +$data?: Todo_todo$data,
  +$fragmentRefs: Todo_todo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_todo",
  "selections": [
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
      "name": "complete",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "todo_app_todos",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '50b5d3124192901fb278ecc3de401454';

module.exports = node;
