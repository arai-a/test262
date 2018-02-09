// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
es5id: 15.4.4.22-9-b-11
description: >
    Array.prototype.reduceRight - deleting property of prototype in
    step 8 causes deleted index property not to be visited on an Array
---*/

        var accessed = false;
        var testResult = true;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            if (idx === 1) {
                testResult = false;
            }
        }

        var arr = [0, , , ];
        Object.defineProperty(arr, "3", {
            get: function () {
                delete Array.prototype[1];
                return 0;
            },
            configurable: true
        });

            Array.prototype[1] = 1;
            arr.reduceRight(callbackfn);

assert(testResult, 'testResult !== true');
assert(accessed, 'accessed !== true');
