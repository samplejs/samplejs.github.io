---
layout: sample
title: 'string manipulation and regular expressions'
description: 'Exploring string manipulation techniques and where regular expressions fit in.'
resources: [
    docs-intl,
    docs-string-prototype-localecompare,
    docs-string-prototype-tolowercase,
    docs-string-prototype-tolocalelowercase,
    docs-string-prototype-touppercase,
    docs-string-prototype-tolocaleuppercase,
    docs-string-prototype-charat,
    docs-string-prototype-charcodeat,
    docs-string-prototype-slice,
    docs-string-prototype-split,
    docs-string-prototype-substring,
    docs-string-prototype-substr,
    docs-string-prototype-indexof,
    docs-string-prototype-lastindexof,
    mdn-guide-regular-expressions,
    mdn-guide-writing-a-regular-expression-pattern,
    docs-regexp,
    docs-regexp-prototype-test,
    docs-regexp-prototype-exec,
    docs-regexp-lastindex,
    docs-string-prototype-search,
    docs-string-prototype-match,
    docs-string-prototype-replace
]
---

##considering locale

As part of the ECMAScript Internationalization API there is the {% include inline-resource.html resource="docs-intl" code="Intl" %} namespace, which provides string comparisons and formatting (for numbers, dates and times).  One of methods methods that lives outside of this namespace is
 {% include inline-resource.html resource="docs-string-localecompare" code="localeCompare()" %}. This can be useful when dealing with different locales as it allows you to make considerations for accent and base characters.

There are several methods to convert a string into its lowercase or uppercase representation, depending on whether you need to consider locale:

- {% include inline-resource.html resource="docs-string-prototype-tolowercase" code="String.prototype.toLowerCase()" %} &mdash; _ignores locale_
- {% include inline-resource.html resource="docs-string-prototype-tolocalelowercase" code="String.prototype.toLocaleLowerCase()" %}
- {% include inline-resource.html resource="docs-string-prototype-touppercase" code="String.prototype.toUpperCase()" %} &mdash; _ignores locale_
- {% include inline-resource.html resource="docs-string-prototype-tolocaleuppercase" code="String.prototype.toLocaleUpperCase()" %}

{% include codepen-sample.html title="string manipulation and regular expressions - lower and upper case" slug="KwMdQm" %}

##processing strings

Javascript provides several mechanisms for processing a string. When caring about a string on a character by character basis, {% include inline-resource.html resource="docs-string-charat" code="String.prototype.charAt()" %} and {% include inline-resource.html resource="docs-string-charcodeat" code="String.prototype.charCodeAt()" %}.

When processing parts of a string, both {% include inline-resource.html resource="docs-string-slice" code="String.prototype.slice()" %} and {% include inline-resource.html resource="docs-string-substring" code="String.prototype.substring()" %} will extract a section of a string, based upon a start and end position.  Another approach is to use {% include inline-resource.html resource="docs-string-substr" code="String.prototype.substr()" %} which takes a length argument - instead of an end position argument. These methods also have different strategies for handling negative numbers in their arguments:

{% include codepen-sample.html title="string manipulation and regular expressions - processing strings" slug="XJKmZE" %}

##matching strings

To find the location of a string within another string, there is {% include inline-resource.html resource="docs-string-indexof" code="String.prototype.indexOf()" %} and {% include inline-resource.html resource="docs-string-lastindexof" code="String.prototype.lastIndexOf()" %} &mdash; these will search for the first match from either the start or end of the string.

When splitting a string into tokens, the {% include inline-resource.html resource="docs-string-split" code="String.prototype.split()" %} method can be useful.  This scans through the string, creating a new string every time it finds a match, and returns an array of strings:

{% include codepen-sample.html title="string manipulation and regular expressions - matching strings" slug="VYjvQN" %}

##creating regular expressions

In order to perform more advanced string matching, JavaScript provides {% include inline-resource.html resource="mdn-guide-regular-expressions" label="Regular Expressions" %}.

Regular expressions can be created with forward slashes or by constructing a {% include inline-resource.html resource="docs-regexp" code="RegExp" %}.  There are also several options that can be applied to a regular expresssion to affect how searches are performed (these options are not mutually exclusive):

- ``g`` &mdash; _global search_
- ``i`` &mdash; _case-insensitive search_
- ``m`` &mdash; _multi-line search_

{% include codepen-sample.html title="string manipulation and regular expressions - creating regular expressions" slug="YPWyeb" %}

There are numerous resources available that explain how to {% include inline-resource.html resource="mdn-guide-writing-a-regular-expression-pattern" label="write a regular expression pattern" %}.

##interacting with regular expressions

When directly interacting with a instance of a regular expression, there are two methods that are useful. To check whether a string matches a regular expression, and get a boolean response, {% include inline-resource.html resource="docs-regexp-prototype-test" code="RegExp.prototype.test()" %} method can be invoked.

To find the details about each match a regular expression finds, then {% include inline-resource.html resource="docs-regexp-prototype-exec" code="RegExp.prototype.exec()" %} should be used. A match result does not just contain the matching result, but also the results of 'capturing parentheses' &mdash; ``(ab)`` rather than 'non-capturing parentheses' ``(?:ab)``.

This method does not just return a result, as well it changes some state on the regular expression object itself. The {% include inline-resource.html resource="docs-regexp-lastindex" code="RegExp.lastIndex" %} property is one of these, and records the index of the last search, but is only set when the ``g`` (global search) option has been set on the regular expression.

{% include codepen-sample.html title="string manipulation and regular expressions - RegExp interaction" slug="MYeaQE" %}

##doing more with regular expressions

There are several methods on strings that take regular expressions as arguments:

One of the methods has already been covered is {% include inline-resource.html resource="docs-string-prototype-split" code="String.prototype.split()" %}.

To search for matches in a string there is {% include inline-resource.html resource="docs-string-prototype-search" code="String.prototype.search()" %}. When there is a match it returns the position within the string, otherwise it returns ``-1``.

To find all matches within a string and get back an array, there is {% include inline-resource.html resource="docs-string-prototype-match" code="String.prototype.match()" %}. If no results are found then ``null`` is returned.

Finally, {% include inline-resource.html resource="docs-string-prototype-replace" code="String.prototype.replace()" %} returns a new string where matches are replaced by a string or by the evaluation of another regular expression.


{% include codepen-sample.html title="string manipulation and regular expressions - RegExp with strings" slug="LEZpQM" %}

