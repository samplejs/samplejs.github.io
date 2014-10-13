---
layout: sample
title: fundamentals
resources: [
    mdn,
    superherojs,
    learningadvancedjs,
    jsbin,
    jsfiddle,
    plunker,
    goodparts,
    ninja,
    definitiveguide
]
---

provide an overview of all we want to discuss in this section

##variables

introduce variables in Javascript

brief explaination of ```console.log``` (as our examples will depend on it) and how it works with string and number literals

cover how variables are ```undefined``` until they are assigned a value

{% include codepen-sample.html title="fundamentals - value of variables" slug="CafDu" %}

finally, warn that reserved words in Javascript can not be variable names

{% include codepen-sample.html title="fundamentals - avoiding reserved words" slug="BIhtC" %}

##primitive data types

introduce the concept of primitive data types in Javascript, https://developer.mozilla.org/en-US/docs/Glossary/Primitive , (```Number```, ```String```, ```Boolean```, ```null```, ```undefined```)

> codepen title: 'fundamentals - primitive data types'

define ```truthy``` and ```falsy```

> codepen title: 'fundamentals - truthy and falsy values'

explain that JavaScript has global properties and that these will be explained further on -- ```null```, ```undefined```, ```NaN```, ```Infinity```

##arithmetic operators

introduce what an arithmetic operators are

> codepen title: 'fundamentals - arithmetic operations'

explain the considerations you should make when doing arithmetic with decimal numbers

{% include codepen-sample.html title="fundamentals - precision of decimal numbers" slug="BhGmc" %}

explain the limitations in JavaScript with doing arithmetic with large numbers

{% include codepen-sample.html title="fundamentals - precision of large numbers" slug="JHlKy" %}

explain the basic idea of `NaN` and `Infinity`

> codepen title: 'fundamentals - mathematics of NaN and Infinity'

finally discuss what happens when you accidently do arithmetic on a string

{% include codepen-sample.html title="fundamentals - subtraction with strings" slug="hbrqj" %}

##equality operators

describe all the equality and identity operators in JavaScript

> codepen title: 'fundamentals - equality and identity operations'

explain the purpose of ```null``` and the pattern to check for ```null``` and ```undefined```

{% include codepen-sample.html title="fundamentals - equality of null" slug="izsbd" %}

explain how to check if a global variable has been defined

{% include codepen-sample.html title="fundamentals - check if a variable is declared" slug="fKuqJ" %}

cover that equality for `NaN` is different and that ```isNaN()``` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN is the solution

{% include codepen-sample.html title="fundamentals - equality of NaN" slug="guast" %}

finally warn that assignments can occur in `if` statements

{% include codepen-sample.html title="fundamentals - assignment allowed inside conditions" slug="rhtgk" %}

##comparison operators

introduce relational operators covering strings, numbers and `Infinity`

> codepen title: 'fundamentals - relational operators'

discuss the edge case of `>=` and `<=` when value is ```null``` (```null <= 0```, ```null >= 0```), link to http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/ and http://stackoverflow.com/questions/2910495/why-null-0-null-0-but-not-null-0

> codepen title: 'fundamentals - coercion with relational operators'


##logical operators

introduce logical operators

> codepen title: 'fundamentals - logical operators'

cover the short-circuit evaluation of logical AND,  ```x && x.prop```

> codepen title: 'fundamentals - short circuit of logical AND'

cover the short-circuit evaluation of logical OR,  ```y || 'default'```

> codepen title: 'fundamentals - short circuit of logical OR'

finally finish with `?` ternary operator --  _incl. codepen_

> codepen title: 'fundamentals - conditional ternary operator'

##object basics

introduce an object by showing several object literals

> codepen title: 'fundamentals - object literals'

cover how property accessors are used to set and get values

> codepen title: 'fundamentals - object property accessors'

explain object property `for ... in` (i.e. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

> codepen title: 'fundamentals - all properties in an object'

explain the importance of the `delete` operator (i.e. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

> codepen title: 'fundamentals - removing properties from objects'

- _object / array initialisers_

##array basics

introduce an array by showing several array literals

> codepen title: 'fundamentals - array literals'

discuss how arrays are objects

{% include codepen-sample.html title="fundamentals - arrays are objects" slug="KgjIw" %}

show further simularities between objects and arrays with array property accessor coercion

{% include codepen-sample.html title="fundamentals - array property coercion" slug="GqEkd" %}

show how the array length changes when ```arr[10000] = 'string'```

> codepen title: 'fundamentals - array length property'

show that `typeof` is not helpful for arrays, instead use `Array.isArray`

{% include codepen-sample.html title="fundamentals - typeof array" slug="ICHxg" %}

finally explain the edge cases of adding objects and arrays, possibly referencing "Wat"

{% include codepen-sample.html title="fundamentals - arithmetic with objects and arrays" slug="iGqyx" %}


##function basics

introduce a function by showing named, assigned and anonymous function literals

> codepen title: 'fundamentals - function literals'

cover hoisting with functions

> codepen title: 'fundamentals - hoisting function'

discuss how function pass arguments (by `value` or by `reference`)

> - Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.
> - Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.
> - However, changing a property of an object referenced by a variable does change the underlying object.
>
> From: http://stackoverflow.com/a/6605700/1101773

explain how functions return results and what happens when there is no `return`

{% include codepen-sample.html title="fundamentals - functions without return statements" slug="cadwy" %}

finish with the line ending between return and expression

{% include codepen-sample.html title="fundamentals - return statement line endings" slug="ygEGz" %}

