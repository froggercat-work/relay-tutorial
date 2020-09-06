/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Checkbox_todo$ref: FragmentReference;
declare export opaque type Checkbox_todo$fragmentType: Checkbox_todo$ref;
export type Checkbox_todo = {|
  +complete: boolean,
  +todo_id: any,
  +$refType: Checkbox_todo$ref,
|};
export type Checkbox_todo$data = Checkbox_todo;
export type Checkbox_todo$key = {
  +$data?: Checkbox_todo$data,
  +$fragmentRefs: Checkbox_todo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "where"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Checkbox_todo",
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
      "name": "todo_id",
      "storageKey": null
    }
  ],
  "type": "todo_app_todos",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd0f72877ff5189f0d8d45541d36070a7';

module.exports = node;
