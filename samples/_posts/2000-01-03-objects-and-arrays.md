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
    docs-array-isarray
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
When checking whether a variable is an array, the {% include inline-resource.html code="typeof" resource="docs-typeof" %} operator should not be used.  Instead use {% include inline-resource.html code="Array.isArray" resource="docs-array-isarray" %} function:

{% include codepen-sample.html title="objects and arrays - typeof array" slug="ICHxg" %}

##simularities of objects and arrays
The code below shows the ways in which an array is an object:

{% include codepen-sample.html title="objects and arrays - arrays are objects" slug="KgjIw" %}
