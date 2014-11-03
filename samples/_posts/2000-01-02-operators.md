---
layout: sample
title: 'operators'
description: 'Testing equality, performing comparisons and using logical operators.'
resources: [
    mdn-guide-expressions-and-operators,
    mdn-guide-sameness-in-javascript,
    docs-equality-operators,
    docs-isnan,
    docs-relational-operators,
    docs-logical-operators,
    docs-conditional-ternary-operator
]
---

##equality operators

The JavaScript language provides {% include inline-resource.html label="equality and identity operators" resource="docs-equality-operators" %}.  When using the equality operators, type coercion is allowed to take place &mdash; where as the identity operators return false when types do not match:

{% include codepen-sample.html title="operators - equality and identity operations" slug="cjhLw" %}

This distinction between equality and identity can be quite useful.  In the code below we see how `null` and `undefined` can be tested:

{% include codepen-sample.html title="operators - equality of null" slug="izsbd" %}

To check if a global variable has been defined:

{% include codepen-sample.html title="operators - check if a variable is declared" slug="fKuqJ" %}

In JavaScript, `NaN` is not equivalent or identical to `NaN`.  Initially this may seem like a problem, however the {% include inline-resource.html code="isNaN()" resource="docs-isnan" %} global function can resolves this.  An example of this is shown below:

{% include codepen-sample.html title="operators - equality of NaN" slug="guast" %}

It is important to be aware of how assignments work in conditional statements, for the assignment and equality operator differ by only one character:

{% include codepen-sample.html title="operators - assignment allowed inside conditions" slug="rhtgk" %}


##comparison operators

With JavaScript we have {% include inline-resource.html label="relational operators" resource="docs-relational-operators" %} &mdash; _'greater than', 'less than', 'greater than or equal', 'less than or equal'_.  In the code below we see how these operate:

{% include codepen-sample.html title="operators - relational operators" slug="pIoAb" %}

In some cases, type coercion can take place:

{% include codepen-sample.html title="operators - coercion with relational operators" slug="iwqns" %}


##logical operators

There are {% include inline-resource.html label="logical operators" resource="docs-logical-operators" %} and a {% include inline-resource.html label="conditional (ternary) operator" resource="docs-conditional-ternary-operator" %} in JavaScript:

{% include codepen-sample.html title="operators - logical operators" slug="DnJIs" %}

These operators can be used in other cases as they use a short-circuit evaluation mechanism.  Below are some common use cases:

- logical AND operator:
  - _check that an object exists before calling a property or method on the object_
- logical OR operator:
  - _return a default value when left hand value is evaluated as falsy_
- conditional (ternary) operator:
  - _check that an object exists before calling a property or method on the object_
  - _if it does not exist then return a default value_

{% include codepen-sample.html title="operators - uses for logical operators" slug="ejFDE" %}