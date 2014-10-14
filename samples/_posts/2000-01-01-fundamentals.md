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

==provide an overview of all we want to discuss in this section==

==brief explaination of ```console.log``` (as our examples will depend on it) and how it works with string and number literals==

##variables

In JavaScript a variable is defined using `var name;` or with defined with a value using `var name = value;`.

For defined variables that have not been assigned a value, JavaScript does not prevent them from being accessed.  In the code below, we see unassigned variables have an `undefined` value until a value is assigned.

{% include codepen-sample.html title="fundamentals - value of variables" slug="daioy" %}

We need to be careful with our naming of variables, for they must not be any of the [reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_6).  This is demonstrated in the code sample below:

{% include codepen-sample.html title="fundamentals - avoiding reserved words" slug="BIhtC" %}

##primitive data types

In the JavaScript language, we have access to the following [primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive); `Number`, `String`, `Boolean`, `null` and `undefined`.

> codepen title: 'fundamentals - primitive data types'

These types can be evaluated as ```truthy``` and ```falsy``` based upon the values that they hold.  The code below has a more indepth look at each type.

> codepen title: 'fundamentals - truthy and falsy values'

As we have looked at primitive data types, we should also be aware of the [global properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#Value_properties) exposed to us in JavaScript.  We have already seen are `null` and `undefined`, yet we have not come across `NaN` and `Infinity` before.  All of these global properties will be expanded upon later on.

##arithmetic operators

As part of the JavaScript library we have operators that allow us to perform [addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition), [subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction), [division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division), [multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication) and calculate the [remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder):

{% include codepen-sample.html title="fundamentals - arithmetic operations" slug="tbwpg" %}

We need to be careful when carrying out arithmetic with 'decimal' numbers, as rounding errors are introduced:

{% include codepen-sample.html title="fundamentals - precision of decimal numbers" slug="BhGmc" %}

In JavaScript, we are able to do more complex mathimatics with the [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) global object.  However we make also take care when dealing with large numbers:

{% include codepen-sample.html title="fundamentals - precision of large numbers" slug="JHlKy" %}

explain the basic idea of `NaN` and `Infinity`

{% include codepen-sample.html title="fundamentals - mathematics of NaN and Infinity" slug="GLAic" %}

Before we leave arithmetic operators, lets consider how they operate with strings and booleans.  When using strings:

{% include codepen-sample.html title="fundamentals - arithmetic operations with strings" slug="hbrqj" %}

For arithmetic operators on booleans values:

{% include codepen-sample.html title="fundamentals - arithmetic operations with booleans" slug="milpD" %}

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

