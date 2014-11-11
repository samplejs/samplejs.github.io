---
layout: sample
title: 'structure'
description: '...'
resources: [
    immediately-invoked-function-expression,
    namespaces,
    prototype-pattern,
    revealing-prototype-pattern,
    module-pattern,
    revealing-module-pattern
]
---

##immediately invoked function expression

An {% include inline-resource.html label="Immediately Invoked Function-Expression (IIFE)" resource="immediately-invoked-function-expression" %}
uses the function based scope of a variable to hide away variables from the global scope.

{% include codepen-sample.html title="structure - iife" slug="vEYVVy" %}

By immediately invoking the function that is created this can be achieved, however
if the result of the function is not being assigned to a variable then brackets need to
surround the function.  If this is not done, then a syntax error will occur.


##namespaces

To reduce the amount of functions introduced in the global namespace and to prevent name conflicts,
{% include inline-resource.html label="namespacing pattern" resource="namespaces" %} can be used.

The code below shows this taking place using object literals and Immediately Invoked Function-Expressions:

{% include codepen-sample.html title="structure - namespaces" slug="KwKGEG" %}


##prototype pattern

The {% include inline-resource.html label="prototype pattern" resource="prototype-pattern" %} separates code
into a constructor and a prototype section.  By doing this variables and functions taken out of global namespace.

This works by assigning an object literal to the `prototype`, and by attaching to the prototype functions can be loaded
into memory once. This in turn makes it easy to extend, especially since it is possible to ‘override’ functions through
prototyping.

By putting functions into the prototype object, `this` has to be used to access instance state and hidden variables
defined in the constructor are not accessible.

{% include codepen-sample.html title="structure - prototype pattern" slug="yyLQVd" %}

##revealing prototype pattern

The {% include inline-resource.html label="revealing prototype pattern" resource="revealing-prototype-pattern" %}
is simular to the prototype pattern, the only difference being that a function is
assigned to the `prototype` property rather than a object literal.  The benefit of
assigning a function to `prototype` is that it exposes only public properties while hiding private properties.

{% include codepen-sample.html title="structure - revealing prototype pattern" slug="dPyQWR" %}

##module pattern

The {% include inline-resource.html label="module pattern" resource="module-pattern" %}
allows functions and objects to be accessible, whilst hiding others using closures &mdash;
_by using a Immediately Invoked Function-Expression_.

{% include codepen-sample.html title="structure - module pattern" slug="qEBQom" %}


##revealing module pattern

By defining all the objects and functions as variables, and returning an object that references them,
then the module patterns becomes a 
{% include inline-resource.html label="revealing module pattern" resource="revealing-module-pattern" %}.

{% include codepen-sample.html title="structure - revealing module pattern" slug="gbOQej" %}
