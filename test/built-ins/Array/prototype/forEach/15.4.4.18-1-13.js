// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-1-13
description: Array.prototype.forEach applied to the JSON object
---*/

        var result = false;
        function callbackfn(val, idx, obj) {
            result = ('[object JSON]' === Object.prototype.toString.call(obj));
        }

            JSON.length = 1;
            JSON[0] = 1;
            Array.prototype.forEach.call(JSON, callbackfn);

assert(result, 'result !== true');
