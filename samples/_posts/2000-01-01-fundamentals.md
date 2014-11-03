---
layout: sample
title: 'fundamentals'
description: 'Defining variables, introducing primitive types and demonstrating arithmetic.'
resources: [
    mdn-guide-js-overview,
    mdn-guide-values-variables-literals,
    mdn-guide-statements,
    docs-reserved-words,
    glossary-primitive,
    docs-global-properties,
    docs-arithmetic-operators,
    double-precision-floating-point-format,
    docs-math
]
---

##variables

In JavaScript, a variable is defined using `var name;` or with defined with a value using `var name = value;`.

For defined variables that have not been assigned a value, JavaScript does not prevent them from being accessed.  In the code below, we see unassigned variables have an `undefined` value until a value is assigned.

{% include codepen-sample.html title="fundamentals - value of variables" slug="daioy" %}

We need to be careful with our naming of variables, for they must not be any of the {% include inline-resource.html resource="docs-reserved-words" label="reserved words" %}.  This is demonstrated in the code sample below:

{% include codepen-sample.html title="fundamentals - avoiding reserved words" slug="BIhtC" %}

##primitive data types

In the JavaScript language, we have access to the following {% include inline-resource.html resource="glossary-primitive" label="primitive data types" %}; `Number`, `String`, `Boolean`, `null` and `undefined`.

{% include codepen-sample.html title="fundamentals - primitive data types" slug="epivf" %}

These types can be evaluated as ```truthy``` and ```falsy``` based upon the values that they hold.  The following values are falsy:

- `false`
- `null`
- `undefined`
- `''`
- `0`
- `NaN`

All other values are truthy.

As we have looked at primitive data types, we should also be aware of the {% include inline-resource.html resource="docs-global-properties" label="global properties" %} exposed to us in JavaScript.

##arithmetic operators

As part of the JavaScript library we have {% include inline-resource.html label="arithmetic operators" resource="docs-arithmetic-operators" %} that allow us to perform addition, subtraction, division, multiplication and calculate the remainder :

{% include codepen-sample.html title="fundamentals - arithmetic operations" slug="tbwpg" %}

In JavaScript, a number has a {% include inline-resource.html label="double-precision 64-bit binary format (IEEE 754)" resource="double-precision-floating-point-format" %} representation, which supports numbers between <code>-(2<sup>53</sup>-1)</code> and <code>2<sup>53</sup>-1</code> without loss of integer precision. The
{% include inline-resource.html code="Math" resource="docs-math" %} global object allows us to easily create these large numbers:

{% include codepen-sample.html title="fundamentals - precision of large numbers" slug="JHlKy" %}

The representation of numbers for JavaScript also means that rounding errors can occur for numbers that are not integers (with a fractional component). In the code below, we can see this in action:

{% include codepen-sample.html title="fundamentals - precision of decimal numbers" slug="BhGmc" %}

As part of numberic arithmetic, it is possible to get `NaN`,  `Infinity` and `-Infinity` values:

{% include codepen-sample.html title="fundamentals - mathematics of NaN and Infinity" slug="GLAic" %}

Before we leave arithmetic operators, lets consider how they operate with strings and booleans.  When using strings:

{% include codepen-sample.html title="fundamentals - arithmetic operations with strings" slug="hbrqj" %}

For arithmetic operators on booleans values:

{% include codepen-sample.html title="fundamentals - arithmetic operations with booleans" slug="milpD" %}
