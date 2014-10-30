---
layout: sample
title: 'fundamentals: objects, arrays and functions'
resources: []
---

##object basics

JavaScript allows you to create objects, read properties and set value of properties:

{% include codepen-sample.html title="fundamentals - object literals" slug="Ewdzy" %}

It is possible to list all properties on an object.  This can be done with a [`for ... in` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in):

{% include codepen-sample.html title="fundamentals - all properties in an object" slug="nabki" %}

In order to remove a property on an object, setting the value to `undefined` is not correct.  Instead the  [`delete` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) should be used:

{% include codepen-sample.html title="fundamentals - removing properties from objects" slug="DkrbJ" %}

##array basics

Arrays can be created empty or with an initial set of values. There are several [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for modifying an array, yet in the code below we are using the property accessors:

{% include codepen-sample.html title="fundamentals - array literals" slug="corkn" %}

When checking whether a variable is an array, the [`typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) should not be used.  Instead use [`Array.isArray` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray):

{% include codepen-sample.html title="fundamentals - typeof array" slug="ICHxg" %}

The code below shows the ways in which an array is an object:

{% include codepen-sample.html title="fundamentals - arrays are objects" slug="KgjIw" %}

##function basics

Functions can be defined as a [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) or a [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function):

{% include codepen-sample.html title="fundamentals - function literals" slug="GqEkd" %}

A function is able to return a value with a [`return` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return). A function returns `undefined` when:

- there is no return statement in the function
- there is line ending between `return` and the associated expression

Both these cases are shown below:

{% include codepen-sample.html title="fundamentals - functions return statements" slug="cadwy" %}
