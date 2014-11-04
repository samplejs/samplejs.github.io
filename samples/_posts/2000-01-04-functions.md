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
    docs-this,
    docs-function-prototype-call,
    docs-function-prototype-apply,
    docs-return,
    docs-typeof
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

Functions allow values to be passed in via arguments properties set in its definition.  However, this is not the only data passed into a function.  There are also the `arguments` and `this` variables, that become available:

{% include codepen-sample.html title="functions - passing values in" slug="jhdzE" %}


##the arguments object

The {% include inline-resource.html code="arguments" resource="docs-arguments-object" %} object looks very much like an array, however it is just an object with indexed properties.  In the code below, it shows a method to convert this object into an array using the {% include inline-resource.html code="Array.prototype.slice()" resource="docs-array-prototype-slice" %} function:

{% include codepen-sample.html title="functions - arguments and this" slug="ibEfa" %}

When using `arguments`, there are {% include inline-resource.html label="some performance issues" resource="optimization-killers-managing-arguments" %} that may need to be considered &mdash; which will be important if and when code optimisation becomes an issue.


##the this keyword

For a function, the context of the {% include inline-resource.html code="this" resource="docs-this" %} keyword depends on how the functions is invoked.

When invoked as a function, as has been shown so far, `this` represents the global context &mdash; meaning it will contain all variables that have been defined globally.

However, when the function is invoked in alternative ways, the context of `this` changes ...

##multiple ways to invoke a function

So far on this page every function has been invoked on their own, however it turns out that JavaScript provides at least five invocation approaches:

1. As a function &mdash; `myfunction(arg1, arg2);` _ALREADY COVERED_
2. As a method on an object &mdash; `myobject.afunction(arg1, arg2);`
3. As a constructor &mdash; `var anInstance = new MyFunction(arg1, arg2);`
4. Via the `call()` &mdash;  `myfunction.call(thisContext, arg1, arg2);`
5. Via the `apply()` &mdash; `myfunction.apply(thisContext, anArrayOfArguments);`

When the function is invoked as a method, the `this` keyword is set with the context of the object before the `.` symbol.  For a constructor, the context of `this` is a new object.

In the code below, there are examples showing method and constructor invocations:

{% include codepen-sample.html title="functions - invocation approaches" slug="ItvLx" %}

The {% include inline-resource.html code="call()" resource="docs-function-prototype-call" %} and {% include inline-resource.html code="apply()" resource="docs-function-prototype-apply" %} functions allow the context of `this` to be changed programatically:

{% include codepen-sample.html title="functions - forcing the context" slug="swbaf" %}


##returning values

A function is able to return a value with a {% include inline-resource.html code="return" resource="docs-return" %} statement. A function returns `undefined` when:

- there is no return statement in the function
- there is line ending between `return` and the associated expression

Both these cases are shown below:

{% include codepen-sample.html title="functions - functions return statements" slug="cadwy" %}


##scope of variables

The scope of a variable defines its accessibility and lifetime.  Unlike many other languages, the scope of a variable is based upon functions &mdash; for example languages that are C based are block based.  The code below shows how the scope of a variable works in action:

{% include codepen-sample.html title="functions - scope" slug="CnIDc" %}


##is it a function?

When checking whether a variable is a function, the {% include inline-resource.html code="typeof" resource="docs-typeof" %} operator may be used and it will often give the correct result.  There are some browser edge cases where this may not work, so in the code below there is another test which is believed to be more accurate:

{% include codepen-sample.html title="functions - is it a function?" slug="LmlHD" %}

