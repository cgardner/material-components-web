/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {assert} from 'chai';
import td from 'testdouble';

import {verifyDefaultAdapter} from '../helpers/foundation';
import {setupFoundationTest} from '../helpers/setup';
import MDCTextFieldOutlineFoundation from '../../../packages/mdc-textfield/outline/foundation';

suite('MDCTextFieldOutlineFoundation');

test('exports strings', () => {
  assert.isOk('strings' in MDCTextFieldOutlineFoundation);
});

test('defaultAdapter returns a complete adapter implementation', () => {
  verifyDefaultAdapter(MDCTextFieldOutlineFoundation, [
    'getWidth', 'getHeight', 'setOutlinePathAttr',
  ]);
});

const setupTest = () => setupFoundationTest(MDCTextFieldOutlineFoundation);

test('#updateSvgPath sets the path of the outline element', () => {
  const {foundation, mockAdapter} = setupTest();
  const labelWidth = 30;
  const radius = 8;
  const isRtl = true;
  foundation.updateSvgPath(labelWidth, radius, isRtl);
  td.verify(mockAdapter.setOutlinePathAttr(td.matchers.anything()));
});
