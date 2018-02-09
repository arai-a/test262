// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.find
es6id: 22.2.3.10
description: >
  Return found value if predicate return a boolean true value.
info: |
  22.2.3.10 %TypedArray%.prototype.find (predicate [ , thisArg ] )

  %TypedArray%.prototype.find is a distinct function that implements the same
  algorithm as Array.prototype.find as defined in 22.1.3.8 except that the this
  object's [[ArrayLength]] internal slot is accessed in place of performing a
  [[Get]] of "length". The implementation of the algorithm may be optimized with
  the knowledge that the this value is an object that has a fixed length and
  whose integer indexed properties are not sparse.

  ...

  22.1.3.8 Array.prototype.find ( predicate[ , thisArg ] )

  ...
  6. Repeat, while k < len
    ...
    c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
    d. If testResult is true, return kValue.
  ...
includes: [testTypedArray.js]
features: [Symbol, TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([39, 2, 62]);
  var called, result;

  called = 0;
  result = sample.find(function() {
    called++;
    return true;
  });
  assert.sameValue(result, 39, "returned true on sample[0]");
  assert.sameValue(called, 1, "predicate was called once");

  called = 0;
  result = sample.find(function(val) {
    called++;
    return val === 62;
  });
  assert.sameValue(called, 3, "predicate was called three times");
  assert.sameValue(result, 62, "returned true on sample[3]");

  result = sample.find(function() { return "string"; });
  assert.sameValue(result, 39, "ToBoolean(string)");

  result = sample.find(function() { return {}; });
  assert.sameValue(result, 39, "ToBoolean(object)");

  result = sample.find(function() { return Symbol(""); });
  assert.sameValue(result, 39, "ToBoolean(symbol)");

  result = sample.find(function() { return 1; });
  assert.sameValue(result, 39, "ToBoolean(number)");

  result = sample.find(function() { return -1; });
  assert.sameValue(result, 39, "ToBoolean(negative number)");
});
