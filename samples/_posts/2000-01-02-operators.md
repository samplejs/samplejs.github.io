---
layout: sample
title: 'operators'
description: 'Testing equality, performing comparisons and using logical operators.'
resources: [
    mdn-guide-expressions-and-operators,
    mdn-guide-sameness-in-javascript
]
---

##equality operators

The JavaScript language provides {% include mdn-link.html label="equality" href="Web/JavaScript/Reference/Operators/Comparison_Operators#Equality" %} and {% include mdn-link.html label="identity" href="Web/JavaScript/Reference/Operators/Comparison_Operators#Identity" %} operators.  When using the equality operators, type coercion is allowed to take place &mdash; where as the identity operators return false when types do not match:

{% include codepen-sample.html title="operators - equality and identity operations" slug="cjhLw" %}

This distinction between equality and identity can be quite useful.  In the code below we see how `null` and `undefined` can be tested:

{% include codepen-sample.html title="operators - equality of null" slug="izsbd" %}

To check if a global variable has been defined:

{% include codepen-sample.html title="operators - check if a variable is declared" slug="fKuqJ" %}

In JavaScript, `NaN` is not equivalent or identical to `NaN`.  Initially this may seem like a problem, however the {% include mdn-link.html code="isNaN()" href="Web/JavaScript/Reference/Global_Objects/isNaN" %} global function can resolves this.  An example of this is shown below:

{% include codepen-sample.html title="operators - equality of NaN" slug="guast" %}

It is important to be aware of how assignments work in conditional statements, for the assignment and equality operator differ by only one character:

{% include codepen-sample.html title="operators - assignment allowed inside conditions" slug="rhtgk" %}


##comparison operators

With JavaScript we have 'greater than', 'less than', 'greater than or equal', 'less than or equal' operators.  In the code below we see how these operate:

{% include codepen-sample.html title="operators - relational operators" slug="pIoAb" %}

In some cases, type coercion can place:

{% include codepen-sample.html title="operators - coercion with relational operators" slug="iwqns" %}


##logical operators

There are logical operators in JavaScript:

{% include codepen-sample.html title="operators - logical operators" slug="DnJIs" %}

These operators can be used in other cases as they use a short-circuit evaluation mechanism.  Below are some common use cases:

- _logical AND operator:_
  - check that an object exists before calling a property or method on the object
- _logical OR operator:_
  - return a default value when left hand value is evaluated as falsy
- _logical ternary operator:_
  - check that an object exists before calling a property or method on the object, if it does not exist then return a default value

{% include codepen-sample.html title="operators - uses for logical operators" slug="ejFDE" %}