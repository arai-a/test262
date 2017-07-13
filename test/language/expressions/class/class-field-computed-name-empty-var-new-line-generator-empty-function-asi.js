// This file was procedurally generated from the following sources:
// - src/class-fields/computed-name-empty-var-new-line-generator-empty-function-asi.case
// - src/class-fields/default/cls-decl.template
/*---
description: computed name empty var and newline, generator empty function (ASI) (class fields)
flags: [generated]
includes: [propertyHelper.js]
info: |
    1.1 New Productions

    [...]

    FieldDefinitionList [Yield, Await]:
      FieldDefinition [?Yield, ?Await]
      FieldDefinitionList  [?Yield, ?Await], FieldDefinition [?Yield, ?Await]

---*/


class C {
  ['a']
    *b(){}
  constructor() {
    assert.sameValue(this.a, undefined);
      verifyEnumerable(this, "a");
      verifyWritable(this, "a");
      verifyConfigurable(this, "a");

      assert.sameValue(typeof Object.getPrototypeOf(this).b, "function");
      verifyNotEnumerable(Object.getPrototypeOf(this), "b");
      verifyConfigurable(Object.getPrototypeOf(this), "b");
  }
}

const c = new C();