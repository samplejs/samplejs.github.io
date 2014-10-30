---
layout: sample
title: 'functions'
description: 'Defining functions and covering the approaches for invoking them.'
resources: []
---

In JavaScript, functions are treated as first class entities:

1. Can be defined as a literal and assigned &mdash; _either to a variable or object property_.
1. Allow values to be passed in by arguments, so functions can be passed in &mdash; _facilitating the callback pattern_.
1. Can be invoked in multiple ways &mdash; _as methods, functions, constructors or via `.apply()` or `.call()`_.
1. Return values &mdash; _allowing functions to be returned_.
1. Are ultimately objects &mdash; _can be assigned properties and function methods_.

##defining functions

Functions can be defined as a {% include mdn-link.html label="function declaration" href="Web/JavaScript/Reference/Statements/function" %} or a {% include mdn-link.html label="function literal" href="Web/JavaScript/Reference/Operators/function" %}:

{% include codepen-sample.html title="functions - function literals" slug="GqEkd" %}


##passing values into functions

Functions allow values to be passed in via arguments properties set in its definition.  However, this is not to only data passed into the function, there are also the `arguments` and `this` variables that get populated:

{% include codepen-sample.html title="functions - passing values in" slug="jhdzE" %}


##the arguments variable

The {% include mdn-link.html code="arguments" href="Web/JavaScript/Reference/Functions/arguments" %} variable looks very much like an array, however it is just an object with indexed properties.  In the code below, it shows a method to convert this object into an array using the {% include mdn-link.html code="Array.prototype.slice" href="Web/JavaScript/Reference/Global_Objects/Array/slice" %} function:

{% include codepen-sample.html title="functions - arguments and this" slug="ibEfa" %}

When using `arguments`, there are [some performance issues](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) that may need to be considered.


##invocation approaches

Invocation

{% include codepen-sample.html title="functions - invocation approaches" slug="ItvLx" %}

Forcing the context

{% include codepen-sample.html title="functions - forcing the context" slug="swbaf" %}


##returning values

A function is able to return a value with a {% include mdn-link.html code="return" href="Web/JavaScript/Reference/Statements/return" %} statement. A function returns `undefined` when:

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

