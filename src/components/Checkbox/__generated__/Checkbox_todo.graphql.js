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
  +id: string,
  +complete: boolean,
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Checkbox_todo",
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
    }
  ],
  "type": "todo_app_todos",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'aa4ae7879ffc57e14c0723a5b17963e1';

module.exports = node;
