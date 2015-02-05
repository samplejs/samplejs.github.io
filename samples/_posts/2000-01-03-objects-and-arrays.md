---
layout: sample
title: 'objects and arrays'
description: 'Fundamentals of objects, arrays and how they both are related.'
resources: [
    mdn-guide-working-with-objects,
    mdn-guide-array-object,
    docs-in-operator,
    docs-delete-operator,
    docs-array,
    docs-typeof,
    docs-array-isarray,
    docs-array-prototype-concat,
    docs-array-prototype-join,
    docs-array-prototype-reverse,
    docs-array-prototype-slice,
    docs-array-prototype-sort,
    docs-array-prototype-pop,
    docs-array-prototype-push,
    docs-array-prototype-shift,
    docs-array-prototype-unshift,
    docs-array-prototype-splice
]
---

JavaScript allows you to create objects, read properties and set value of properties:

{% include codepen-sample.html title="objects and arrays - object literals" slug="Ewdzy" %}


##enumerating properties

It is possible to list all properties on an object.  This can be done with a {% include inline-resource.html code="for ... in" resource="docs-in-operator" %} statement:

{% include codepen-sample.html title="objects and arrays - all properties in an object" slug="nabki" %}

##deleting properties

In order to remove a property on an object, setting the value to `undefined` is not correct.  Instead the {% include inline-resource.html code="delete" resource="docs-delete-operator" %} operator should be used:

{% include codepen-sample.html title="objects and arrays - removing properties from objects" slug="DkrbJ" %}


##creating arrays

Arrays can be created empty or with an initial set of values. There are several {% include inline-resource.html code="Array" resource="docs-array" %} methods for modifying an array, yet in the code below we are using the property accessors:

{% include codepen-sample.html title="objects and arrays - array literals" slug="corkn" %}


##is it an array?
When checking whether a variable is an array, the {% include inline-resource.html code="typeof" resource="docs-typeof" %} operator should not be used.  Instead use {% include inline-resource.html code="Array.isArray()" resource="docs-array-isarray" %} function:

{% include codepen-sample.html title="objects and arrays - typeof array" slug="ICHxg" %}


##simularities of objects and arrays
The code below shows the ways in which an array is an object:

{% include codepen-sample.html title="objects and arrays - arrays are objects" slug="KgjIw" %}

##array methods

Arrays provide a variety of methods that can be used to simplify sorting and joining arrays:

- {% include inline-resource.html code="concat()" resource="docs-array-prototype-concat" %} &mdash; _joins two or more arrays together to create a single array_
- {% include inline-resource.html code="join()" resource="docs-array-prototype-join" %} &mdash; _joins each element in the array together, with an optional seperator string_
- {% include inline-resource.html code="reverse()" resource="docs-array-prototype-reverse" %} &mdash; _modifies the array so elements are in the reverse order_
- {% include inline-resource.html code="slice()" resource="docs-array-prototype-slice" %} &mdash; _returns a copy of a specified section of an array_
- {% include inline-resource.html code="sort()" resource="docs-array-prototype-sort" %} &mdash; _modifies the array so elements are in a specified order_

{% include codepen-sample.html title="objects and arrays - sorting and joining arrays" slug="NPNVdJ" %}

There are also methods to simplify adding and removing elements to arrays:

- {% include inline-resource.html code="pop()" resource="docs-array-prototype-pop" %} &mdash; _removes and returns the last element in the array_
- {% include inline-resource.html code="push()" resource="docs-array-prototype-push" %} &mdash; _appends one or more elements to the end of an array_
- {% include inline-resource.html code="shift()" resource="docs-array-prototype-shift" %} &mdash; _removes and returns the first element in the array_
- {% include inline-resource.html code="unshift()" resource="docs-array-prototype-unshift" %} &mdash; _appends one or more elements to the start of an array_
- {% include inline-resource.html code="splice()" resource="docs-array-prototype-splice" %} &mdash; _removes and adds elements from any specified position in the array_

{% include codepen-sample.html title="objects and arrays - adding and removing to arrays" slug="pvymWv" %}

