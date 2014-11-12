---
layout: sample
title: 'advanced functions'
description: 'Using functions to achieve complex behaviours and exploring closures.'
resources: [
    mdn-guide-functions-closures,
    mdn-guide-closures
]
---

##recursion

In Javascript, a functions is able to call itself.  When perfoming recursion, the call should be to the name of the function, not the name of the variable assigned to the function.  This is as the variable or object reference to the function can be modified, where as the the scope binding to the function name can not be altered:

{% include codepen-sample.html title="advanced functions - recursion not stable" slug="myxoC" %}

{% include codepen-sample.html title="advanced functions - recursion done right" slug="azoMXL" %}

##the callback pattern

The callback pattern provides a mechanism for a passed in functions to be called whenever the original function decides.  This allows custom filter and event handlers to be defined, allow it to be called even when the original function has exited &mdash; _i.e. in response to a network response or user action on a webpage_.

In the code below is an example of the callback pattern:

{% include codepen-sample.html title="advanced functions - the callback pattern" slug="qAnJl" %}

##function overloading

The aim of function overloading is to have several implementations of a function, that have different behaviours based upon the arguments provided.  To achieve this `arguments.length` can be used to identify the number of arguments supplied:

{% include codepen-sample.html title="advanced functions - function overloading" slug="HEdvC" %}

##closures

In JavaScript, a closure provides a function the mechanism for accessing and updating variables from the context it was created in.  For example, it allows a function to be created alongside a variable and access that variable whenever that function is invoked &mdash; _regardless of the invocation mechanism or invocation context_.

In the code below the `innerFunction` has two closures, one covering its scope (as it references `name`) and another covering its parent scope (as it references `counter`):

{% include codepen-sample.html title="advanced functions - closures" slug="Eyzkj" %}

##fluent interfaces

In a fluent interface, it is possible to chain together several function calls.

As shown in the code below, this can be achieved by ensuring all the fluent functions return the original object, which can be achieved by using the `this` keyword:

{% include codepen-sample.html title="advanced functions - fluent interfaces" slug="xFkEd" %}

##memoization

Memoization can be a helpful pattern, when a function invocation is expensive and it gets called multiple times with the same arguments.  Implementation for memoization can get complicated, especially when introducing a caching duration or passing around complex objects.

The code below shows a simple memoize function:

{% include codepen-sample.html title="advanced functions - memoization" slug="emlih" %}

##partially applied function

As functions are able to create and return functions, it is possible to partially apply a function:

{% include codepen-sample.html title="advanced functions - currying" slug="hLnbl" %}
