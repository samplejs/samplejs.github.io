---
layout: sample
title: 'the future'
description: 'What can be done in ECMAScript 5 and where the language is going.'
resources: [
    ecmascript-5-1-specifications,
    ecmascript-6-specifications,
    can-i-use,
    ecmascript-compatibility,
    ecmascript-tests,
    ecmascript-5-objects-and-properties,
    docs-object-getownpropertydescriptor,
    docs-object-defineproperty,
    docs-object-defineproperties,
    docs-object-keys,
    docs-object-getownpropertynames,
    preventextensions-seal-and-freeze,
    docs-object-isextensible,
    docs-object-preventextensions,
    docs-object-issealed,
    docs-object-seal,
    docs-object-isfrozen,
    docs-object-freeze,
    docs-object-getprototypeof,
    docs-object-create,
    ecmascript-5-strict-mode-json-and-more,
    mdn-guide-strict-mode,
    mdn-guide-transitioning-to-strict-mode,
    ecmascript-5-1-specifications-the-strict-mode,
    javascript-strict-mode,
    docs-referenceerror,
    docs-syntaxerror,
    docs-typeerror,
    docs-eval,
    docs-arguments-callee,
    docs-arguments-caller
    glossary-json,
    mdn-guide-using-native-json,
    ecmascript-5-array-methods,
    docs-array-isarray,
    docs-array-prototype-indexof,
    docs-array-prototype-lastindexof,
    docs-array-prototype-filter,
    docs-array-prototype-reduce,
    docs-array-prototype-reduceright,
    docs-array-prototype-foreach,
    docs-array-prototype-map,
    docs-array-prototype-some,
    docs-array-prototype-every,
    docs-string-prototype-trim,
    iso-8601-extended-format,
    ecmascript-6-tools,
    ecmascript-6-understanding,
    traceur-wiki,
    traceur-demo,
    ecmascript-7-compatibility,
    ecmascript-proposals-github
]
---

##the future of ecmascript

As the JavaScript language continues to advance, web browsers are trying to catch up with new versions of the ECMAScript Language Specification.  On June 2011, the {% include inline-resource.html label="ECMAScript 5.1 specifications" resource="ecmascript-5-1-specifications" %} were released. Some of the details of ECMAScript 5.1 are discussed later, and many browsers have a high compliance with the specification &mdash; with the end of Windows XP support and IE 8, ECMAScript 5.1 may well be treated as the baseline in 2015.

As of this writing, there are {% include inline-resource.html label="draft specifications for ECMAScript 6" resource="ecmascript-6-specifications" %} (ECMAScript Harmony).  The features in these specifications are slowly being adopted by web browsers &mdash; these specifications are near completion and is feature frozen.

##what can be used today

There are several resources out there to help you find out what language features you can use:

- {% include inline-resource.html label="caniuse.com" resource="can-i-use" %} &mdash; _allows features and browser support details to help you identify what HTML5, CSS and JS features can be used_
- {% include inline-resource.html label="ECMAScript compatibility table" resource="ecmascript-compatibility" %} &mdash; _shows the browser support for each ECMAScript specification, broken down by language feature_
- {% include inline-resource.html label="ECMAScript language tests" resource="ecmascript-tests" %} &mdash; _allows you to run automated tests to check your browsers compatibility with the ECMAScript 5 specification_

##<span class="badge">ECMAScript 5</span>property descriptors

ECMAScript 5 has introduced {% include inline-resource.html label="object and property improvements" resource="ecmascript-5-objects-and-properties" %} &mdash; enabling properties to be read-only, custom getter / setter functions and much more. To get the attributes associated with a property, the {% include inline-resource.html code="Object.getOwnPropertyDescriptor()" resource="docs-object-getownpropertydescriptor" %} function can be used.The object returned contains the following properties:

- ``value``
- ``writable``
- ``enumerable``
- ``configurable``

The code below shows this for a object property and the {% include inline-resource.html code="Array.length" resource="docs-array-length" %} property (_has a configured property descriptor_):

{% include codepen-sample.html title="the future - reading property descriptors" slug="yyaqrb" %}

To create a property with a specific property descriptor, or to modify the descriptor of an existing property, the {% include inline-resource.html code="Object.defineProperty()" resource="docs-object-defineproperty" %} function needs to be called. To set and modify multiple properties on an object, then {% include inline-resource.html code="Object.defineProperties()" resource="docs-object-defineproperties" %} can be used.

Not only do these function allows for the configuration of the descriptor properties discussed so far, but also enable setter and getter functions to be defined for a property. This allows access or updates to a value to be conditional, enables read or write operations side effects (_such as propagating changes values to other other objects_) and facilitates the return of calculated values from properties.

The following table lists the properties associated with a descriptor:

<table><thead>
<tr><th>Descriptor property</th><th>Description </th><th>Default value for an object property.</th><th>Default value for <code>Object.defineProperty()</code>.</th></tr>
</thead>
<tbody>
<tr><td><code>value</code></td><td>Represents the value of that property.</td><td>The value assigned to the property.</td><td><code>undefined</code></td></tr>
<tr><td><code>writable</code></td><td>Whether the property can be assigned a new value.</td><td><code>true</code></td><td><code>false</code></td></tr>
<tr><td><code>enumerable</code></td><td>Whether the property appears in enumeration operation (<em>i.e. the</em> {% include inline-resource.html code="for ... in" resource="docs-in-operator" %} <em>statement</em>).</td><td><code>true</code></em></td><td><code>false</code></td></tr>
<tr><td><code>configurable</code></td><td>Whether the property can be deleted and its property descriptor modified.</td><td><code>true</code></td><td><code>false</code></td></tr>
<tr><td><code>get</code></td><td>The function used to get the value of a property.</td><td>&mdash;</td><td><code>undefined</code></td></tr>
<tr><td><code>set</code></td><td>The function used to set the value of a property.</td><td>&mdash;</td><td><code>undefined</code></td></tr>
</tbody></table>

This is demonstrated in the code below:

{% include codepen-sample.html title="the future - modifying property descriptors" slug="EagedJ" %}

##<span class="badge">ECMAScript 5</span>listing object properties

Previously, to list all properties on an object the {% include inline-resource.html code="for ... in" resource="docs-in-operator" %} statement was needed. In ECMAScript 5 the {% include inline-resource.html code="Object.keys()" resource="docs-object-keys" %} was introduced, which returns an array of properties on an object. However, both these approaches will only return those properties which are ``enumerable``.  To get access to the list of all properties on an object, including the non-``enumerable`` properties, the {% include inline-resource.html code="Object.getOwnPropertyNames()" resource="docs-object-getownpropertynames" %} function has to be used.


##<span class="badge">ECMAScript 5</span>preventing object modifications

In ECMAScript 5, it is possible to prevent extensions, seal and freeze objects. To prevent properties being added to an object, it needs to be non-extensible. To check whether an object is extensible, where it allows new properties to be added, {% include inline-resource.html code="Object.isExtensible()" resource="docs-object-isextensible" %} should be used. To make an object non-extensible, the {% include inline-resource.html code="Object.preventExtensions()" resource="docs-object-preventextensions" %} function should be used:

{% include codepen-sample.html title="the future - preventing object extensions" slug="GgjYEO" %}

To prevent all properties on an object from having their configuration changed and any property from being removed, the object can be sealed. The two side effects of this are that the object to be no longer extensible and that the ``configurable`` descriptor property is set to false for all properties. To check if an object is sealed {% include inline-resource.html code="Object.isSealed()" resource="docs-object-issealed" %} is used and {% include inline-resource.html code="Object.seal()" resource="docs-object-seal" %} will mark an object as sealed:


{% include codepen-sample.html title="the future - preventing object modifications" slug="NPROaL" %}

Finally, to prevent any modification to an object and prevent any changes being made to its values, an object can be frozen. The two side effects of this are that the object is sealed, which also means that the object to be no longer extensible, and that the ``writable`` descriptor property is set to false for all properties. To check if an object is frozen {% include inline-resource.html code="Object.isFrozen()" resource="docs-object-isfrozen" %} is used and {% include inline-resource.html code="Object.freeze()" resource="docs-object-freeze" %} will mark an object as frozen:

{% include codepen-sample.html title="the future - preventing object changes" slug="QwKZqJ" %}

Below there is a table summarising the behaviours of those functions &mdash; _the based of the table in_ {% include inline-resource.html label="preventExtensions, seal and freeze objects" resource="preventextensions-seal-and-freeze" %}:

<table><thead>
<tr><th>Function</th><th>Object made non-extensible?</th><th><code>configurable</code> set to false for all properties?</th><th><code>writable</code> set to false for all properties?</th><th>It is a superset of ...</th></tr>
</thead>
<tbody>
<tr><td><code>Object.preventExtensions()</code></td><td>Yes</td><td>No</td><td>No</td><td>&mdash;</td></tr>
<tr><td><code>Object.seal()</code></td><td>Yes</td><td>Yes</td><td>No</td><td><code>Object.preventExtensions()</code></td></tr>
<tr><td><code>Object.freeze()</code></td><td>Yes</td><td>Yes</td><td>Yes</td><td><code>Object.seal()</code> and <code>Object.preventExtensions()</code></td></tr>
</tbody></table>

##<span class="badge">ECMAScript 5</span>working with prototypes

In ECMAScript 5, the prototype chain can be navigated using {% include inline-resource.html code="Object.getPrototypeOf()" resource="docs-object-getprototypeof" %}.

To create an object with a prototype, using docsObject.create() function can be used {% include inline-resource.html code="Object.create()" resource="docs-object-create" %}. This function also allows properties to be added to the object &mdash; _in a simular approach to the_ ``Object.defineProperties()`` _function:_

{% include codepen-sample.html title="the future - listing object properties" slug="XJjOOX" %}

##<span class="badge">ECMAScript 5</span>entering the strict mode

With the changes to objects out the way, the next two largest changes are {% include inline-resource.html label="Strict Mode and native JSON support" resource="ecmascript-5-strict-mode-json-and-more" %}.

The {% include inline-resource.html label="strict mode" resource="mdn-guide-strict-mode" %} excludes certain part of the ECMAScript language and throwing additional error exceptions. To enable the strict mode, ``"use strict";`` must be included at the the top of a script or function. {% include inline-resource.html label="Transitioning to strict mode" resource="mdn-guide-transitioning-to-strict-mode" %} often does not require too much work, and the feedback from the error exceptions and the performance improvements may make the process worth it. The restriction and exceptions for strict mode can be found {% include inline-resource.html label="in the ECMAScript 5 Specification" resource="ecmascript-5-1-specifications-the-strict-mode" %}.

A {% include inline-resource.html code="ReferenceError" resource="docs-referenceerror" %} is thrown when assigning values to an undefined variable or accessing a variable that was created by {% include inline-resource.html code="eval()" resource="docs-eval" %} &mdash; _cannot create a variable in the calling context of ``eval``_

A {% include inline-resource.html code="SyntaxError" resource="docs-syntaxerror" %} is thrown when:

- Declaring a function that has arguments with the same name
- Declaring an object literal that has properties with the same name
- Using an octal number literals and escape sequences
- Using {% include inline-resource.html code="delete" resource="docs-delete-operator" %} statement on a function or a variable
- Using {% include inline-resource.html code="eval()" resource="docs-eval" %} and {% include inline-resource.html code="arguments" resource="docs-arguments-object" %} as variable or property names
- Using the identifiers ``implements``, ``interface``, ``let``, ``package``, ``private``, ``protected``, ``public``, ``static`` and ``yield`` &mdash; _they are classified as reserved words_.

A {% include inline-resource.html code="TypeError" resource="docs-typeerror" %} is thrown when:

- Accessing {% include inline-resource.html code="arguments.callee" resource="docs-arguments-callee" %} or {% include inline-resource.html code="arguments.caller" resource="docs-arguments-caller" %}
- Adding a property on a non-extensible object
- Modifying a property with its ``writable`` descriptor set to ``false``
- Using {% include inline-resource.html code="delete" resource="docs-delete-operator" %} statement on property with ``configurable`` descriptor set to ``false``

Other behaviours introduced by strict mode are calling {% include inline-resource.html code="Function.prototype.apply()" resource="docs-function-prototype-apply" %} or {% include inline-resource.html code="Function.prototype.call()" resource="docs-function-prototype-call" %} will not coerce ``this`` to the  global object, and that modifications to {% include inline-resource.html code="arguments" resource="docs-arguments-object" %} array items do not change parameter variables.

The code below is based upon the {% include inline-resource.html label="Angus Croll's strict mode tests" resource="javascript-strict-mode" %}:

{% include codepen-sample.html title="the future - strict mode" slug="YPGBMY" %}


##<span class="badge">ECMAScript 5</span>writing and parsing json

{% include inline-resource.html label="JSON (JavaScript Object Notation)" resource="glossary-json" %} is a data-interchange format. JavaScript provides a mechanism for {% include inline-resource.html label="using native JSON" resource="mdn-guide-using-native-json" %}. The {% include inline-resource.html code="JSON.parse()" resource="docs-json-parse" %} function, parses a string and return an object. The {% include inline-resource.html code="JSON.stringify()" resource="docs-json-stringify" %} function converts an object to a string in a JSON representation.

{% include codepen-sample.html title="the future - json" slug="PwGyNJ" %}

##<span class="badge">ECMAScript 5</span>array methods

{% include inline-resource.html label="ECMAScript 5 introduces array methods" resource="ecmascript-5-array-methods" %} that facilitate the searching, filtering, processing and detection of arrays.

**detecting arrays:**

Checking if an object is an array is possible with {% include inline-resource.html code="Array.isArray()" resource="docs-array-isarray" %}.

**searching for items:**

To search for an object in an array, {% include inline-resource.html code="Array.prototype.indexOf()" resource="docs-array-prototype-indexof" %} and {% include inline-resource.html code="Array.prototype.lastIndexOf()" resource="docs-array-prototype-lastindexof" %} can be used depending on whether it should should search first to last or vise-versa.  These function return the index of the first match, using strict equality (the identity operator), returning ``-1`` when no match found.

**filtering away items:**

To filter objects in array, or find an object that exists based upon a particular condition (rather than strict equality), {% include inline-resource.html code="Array.prototype.filter()" resource="docs-array-prototype-filter" %}.  This function returns a new array containing all objects that match.

**aggregating values:**

To perform an aggregated reduction to an array, and return a single object, the {% include inline-resource.html code="Array.prototype.reduce()" resource="docs-array-prototype-reduce" %} and {% include inline-resource.html code="Array.prototype.reduceRight()" resource="docs-array-prototype-reduceright" %} functions can be called. The former of these functions will begin at the start of the array and terminate at the end of the array, whereas the later function does the reverse.

**processing arrays:**

Processing an array, without writing a conditional loop, can be achieved using a {% include inline-resource.html code="Array.prototype.forEach()" resource="docs-array-prototype-foreach" %}. When called, it returns ``undefined``. To transform the objects in an array the {% include inline-resource.html code="Array.prototype.map()" resource="docs-array-prototype-map" %} function allows a callback function to be called on each object and its result inserted into a new array.

The {% include inline-resource.html code="Array.prototype.some()" resource="docs-array-prototype-some" %} and {% include inline-resource.html code="Array.prototype.every()" resource="docs-array-prototype-every" %} functions all you to test whether some or all objects in an array match a condition.

{% include codepen-sample.html title="the future - array methods" slug="QwKRPP" %}


##<span class="badge">ECMAScript 5</span>and other features too

There are further additions that are part of the ECMAScript 5 specification, including:

1. trimming whitespace characters from strings with {% include inline-resource.html code="String.prototype.trim()" resource="docs-string-prototype-trim" %}
1. outputting and parsing dates in the {% include inline-resource.html label="ISO 8601 Extended Format" resource="iso-8601-extended-format" %}


{% include codepen-sample.html title="the future - other ecmascript 5 features" slug="NPaKpQ" %}

##<span class="badge">ECMAScript 6</span>what is it all about

There are several resources out their for {% include inline-resource.html label="Understanding ECMAScript 6" resource="ecmascript-6-understanding" %} and there is already work on {% include inline-resource.html label="ECMAScript 6 Tools" resource="ecmascript-6-tools" %} including several transpilers.

One of the transpilers out there at the moment is Traceur. The {% include inline-resource.html label="language features supported by Traceur" resource="traceur-wiki" %} include many features from ECMAScript 6 and a few other additional proposals.  There is also a {% include inline-resource.html label="Traceur transcoding demo" resource="traceur-demo" %} that allows you to experiment with what can be done in ECMAScript 6.

##where next ...

Predicting the future of ECMAScript is not easy.  The {% include inline-resource.html label="ECMAScript 7 (current proposals) compatibility table" resource="ecmascript-7-compatibility" %} document indicates some of the proposals and their browser support.  The {% include inline-resource.html label="ECMAScript Current Proposals" resource="ecmascript-proposals-github" %} document records the proposals being considered by the Ecma TC39 team.  

What is certain is that people are looking to advance the language.  Not only that, even the commercial entities behind the web browsers of today are interested &mdash; looking to increasing support JavaScript and influence its future.

With transcoders and compilers enabling the new features from ECMAScript 6  to be supported by old browsers, development with ECMAScript 6 may well become a practical choice over the next three years.
