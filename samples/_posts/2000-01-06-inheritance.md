---
layout: sample
title: 'inheritance'
description: 'Covering how the prototype chain and closure constructors enable inheritance.'
resources: [
    mdn-guide-details-of-the-object-model,
    mdn-guide-inheritance-and-the-prototype-chain,
    docs-object-getprototypeof,
    docs-object-create,
    docs-in-operator,
    docs-object-prototype-hasownproperty,
    mdn-guide-inheritance-revisited,
    docs-instanceof
]
---

JavaScript is a language that is based upon 
{% include inline-resource.html label="objects with prototypes to facilitate inheritance" resource="mdn-guide-details-of-the-object-model" %}.
This is distinct from other languages that will
differenciate classes (_which provide abstracts descriptions of interfaces that
includes details relating to inheritance_) from instances
(_which represent instantiated classes that have data associated with them_).

##the prototype chain

The {% include inline-resource.html label="prototype chain" resource="mdn-guide-inheritance-and-the-prototype-chain" %}
allows objects to link to another objects to facilitate inheritance.

When accessing a property, JavaScript will first check if that property is defined
on the current object. When that property is not found it then checks the object
referenced in by the `prototype` property to confirm whether that has the property.
When the property is not present the previous step is recursivly repeated, until
the prototype is found with the value `null`.

The code below shows how the prototype chains works in practice, using
{% include inline-resource.html code="Object.getPrototypeOf()" resource="docs-object-getprototypeof" %}
navigate to prototype chain:

{% include codepen-sample.html title="inheritance - prototype chain" slug="emYjOw" %}

An object can be created with a prototype using
{% include inline-resource.html code="Object.create()" resource="docs-object-create" %}:

{% include codepen-sample.html title="inheritance - object create" slug="NPWzdv" %}

It is possible to list all properties on an object with 
{% include inline-resource.html code="for ... in" resource="docs-in-operator" %}, however
this expression iterates over all properties &mdash; _including inherited properties_.
To only get the properties owned by an object, the
{% include inline-resource.html code="Object.prototype.hasOwnProperty()" resource="docs-object-prototype-hasownproperty" %} function can be used:


{% include codepen-sample.html title="inheritance - hasOwnProperty" slug="ZYEjxG" %}

As inheritance is object based in JavaScript, prototype objects can be updated, allowing
additional properties and modifications to be passed to  all objects further up
in the prototype chain.  This can be seen below:

{% include codepen-sample.html title="inheritance - updating prototypes" slug="NPWBmQ" %}


##inheritance with constructors

When dealing with constructors, an alternative mechanism is used to provide
{% include inline-resource.html label="inheritance" resource="mdn-guide-inheritance-revisited" %}.
As shown in the code below, a `prototype` property is added to a constructor to
set up the prototype chain:

{% include codepen-sample.html title="inheritance - constructors" slug="NPWBZQ" %}

It can some times be problematic to construct new instances when setting up the prototype chain.
This is as the call to the constructor may change state (global or internal) and prevents lazy loading.

Instead, the `Object.create()` function can be called instead for setting up the prototype chain:

{% include codepen-sample.html title="inheritance - constructors and object create" slug="pvoOzg" %}

With the use of constructors, there is second way for exploring the prototype chain. The
{% include inline-resource.html code="instanceof" resource="docs-instanceof" %} operator allows
an objects prototype chain to be tested against a constructor.

{% include codepen-sample.html title="inheritance - instanceof" slug="MYWqYe" %}


##prototype chain in action

In the code below, there is an example of a prototype chain using objects.  The
`Object.create()` is used to turn the prototype objects into instance objects:

{% include codepen-sample.html title="inheritance - object prototype chain" slug="xbxZPJ" %}

A simular solution that uses constructors in shown below:

{% include codepen-sample.html title="inheritance - constructor prototype chain" slug="ogNboJ" %}


##closure constructors

Inheritance does not just have to be done through the prototype chain.
Instead, closures can be used to apply another constructor into the context
of an constructor using code simular to `BaseConstructor.call(this)`.

{% include codepen-sample.html title="inheritance - constructor closures" slug="vEYLWw" %}
