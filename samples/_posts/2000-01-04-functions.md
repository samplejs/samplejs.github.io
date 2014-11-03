---
layout: sample
title: 'functions'
description: 'Defining functions and covering the approaches for invoking them.'
resources: [
    mdn-guide-functions,
    docs-function,
    docs-function-expression,
    docs-arguments-object,
    docs-array-prototype-slice,
    optimization-killers-managing-arguments,
    docs-return
]
---

In JavaScript, functions are treated as first class entities:

1. Can be defined as a literal and assigned &mdash; _either to a variable or object property_.
1. Allow values to be passed in by arguments, so functions can be passed in &mdash; _facilitating the callback pattern_.
1. Can be invoked in multiple ways &mdash; _as methods, functions, constructors or via `.apply()` or `.call()`_.
1. Return values &mdash; _allowing functions to be returned_.
1. Are ultimately objects &mdash; _can be assigned properties and function methods_.

##defining functions

Functions can be defined as a {% include inline-resource.html label="function declaration" resource="docs-function" %} or a {% include inline-resource.html label="function literal" resource="docs-function-expression" %}:

{% include codepen-sample.html title="functions - function literals" slug="GqEkd" %}


##passing values into functions

Functions allow values to be passed in via arguments properties set in its definition.  However, this is not to only data passed into the function, there are also the `arguments` and `this` variables that get populated:

{% include codepen-sample.html title="functions - passing values in" slug="jhdzE" %}


##the arguments variable

The {% include inline-resource.html code="arguments object" resource="docs-arguments-object" %} looks very much like an array, however it is just an object with indexed properties.  In the code below, it shows a method to convert this object into an array using the {% include inline-resource.html code="Array.prototype.slice()" resource="docs-array-prototype-slice" %} function:

{% include codepen-sample.html title="functions - arguments and this" slug="ibEfa" %}

When using `arguments`, there are {% include inline-resource.html label="some performance issues" resource="optimization-killers-managing-arguments" %} that may need to be considered -&mdash; which will be important if and when code optimisation is an issue.


##invocation approaches

Invocation

{% include codepen-sample.html title="functions - invocation approaches" slug="ItvLx" %}

Forcing the context

{% include codepen-sample.html title="functions - forcing the context" slug="swbaf" %}


##returning values

A function is able to return a value with a {% include inline-resource.html code="return" resource="docs-return" %} statement. A function returns `undefined` when:

- there is no return statement in the function
- there is line ending between `return` and the associated expression

Both these cases are shown below:

{% include codepen-sample.html title="functions - functions return statements" slug="cadwy" %}


##scope of variables

- By functions, not blocks

{% include codepen-sample.html title="functions - scope" slug="CnIDc" %}


##inline functions

{% include codepen-sample.html title="functions - inline functions" slug="myxoC" %}


##is it a function?

{% include codepen-sample.html title="functions - is it a function?" slug="LmlHD" %}

