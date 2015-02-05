---
layout: sample
title: 'asynchrony'
description: 'How timeouts, intervals and promises can provide asynchrony.'
resources: [
    docs-window-setinterval,
    docs-window-settimeout,
    mdn-guide-minimum-maximum-delay-and-timeout-nesting,
    definition-2147483647-milliseconds,
    docs-element,
    docs-window-requestanimationframe,
    promises-guide,
    can-i-use-promises,
    docs-web-workers,
    web-worker-guide,
    nodejs,
    nodejs-presentation
]
---

##when asynchrony is needed

When designing and implementing functionality, asynchrony is not always a concern.  However, there are a few cases when it starts to become important:

- Computationally intensive work &mdash; _most JavaScript code runs in the browser on a single thread, so spending a long time on a computation task can block page rendering_
- Animations &mdash; _in order to allow the page to render, animation calculations need to be performed on a scheduled basis and not block_
- Network traffic &mdash; _with network traffic not being instantaneous it is important to use events to subscribe to response callbacks_

Thankfully, there several mechanisms for resolving these problems in JavaScript.


##timeouts and intervals

To schedule work to be done, the {% include inline-resource.html code="window.setInterval()" resource="docs-window-setinterval" %} and {% include inline-resource.html code="window.setTimeout()" resource="docs-window-settimeout" %} functions come to the rescue.  The first of these allows a function to be called repeatedly at a set interval, where as the other allows function to be called at a specific time.

{% include codepen-sample.html title="asynchrony - timeouts and intervals" slug="raLzYR" %}

The are limits to the {% include inline-resource.html label="minimum / maximum delay for timeouts" resource="mdn-guide-minimum-maximum-delay-and-timeout-nesting" %}.  The minimum value is 4 milliseconds and the maximum is {% include inline-resource.html label="2147483647 milliseconds" resource="definition-2147483647-milliseconds" %}.


##requesting the animation frame

The browser looks to perform animations at 30 - 60 fps, and is aware of the time it takes to render the page. On your own, it is hard to predict when the browser is ready to performa a page render. When you read a location property of a {% include inline-resource.html label="Element" resource="docs-element" %} you may trigger a layout recalculation and when you change a style attribute you may trigger addition repaint processing.

To only perform work when the browser is ready, {% include inline-resource.html code="window.requestAnimationFrame()" resource="docs-window-requestanimationframe" %} can be used:

{% include codepen-sample.html title="asynchrony - requesting the animation frame" slug="ZYOvxV" %}


##making promises

For actions that occur multiple times in the same context, events provide a great way of hooking in code and listening for responses. For an action that only occurs once, where it is important to respond to success and failure outcomes, promises provide a clean way of representing this.

The idea of using promises in JavaScript, has meant that may libraries have implemented their own version. With {% include inline-resource.html label="Javascript Promises" resource="promises-guide" %} this can be done natively, with {% include inline-resource.html label="browser support for Promises" resource="can-i-use-promises" %} continuing to increase.

{% include codepen-sample.html title="asynchrony - making promises" slug="OPXvEV" %}


##web workers

{% include inline-resource.html label="Web Workers" resource="docs-web-workers" %} allow computation to be performed on background threads. It order for this to work, a Web Worker has limited access &mdash; can not access ``window``, elements. It still can send network traffic, as well as have access to both ``setInterval()`` and ``setTimeout()``.

{% include codepen-sample.html title="asynchrony - web workers" slug="WbxzyG" %}

To get an understanding of how to use Web Workers, check out {% include inline-resource.html label="The Basics of Web Workers" resource="web-worker-guide" %} article.

##the node.js way

{% include inline-resource.html label="Node.js" resource="nodejs" %} is an executable application that allows you run JavaScript code that can access the file system, interact with network traffic and repond to other events. To do this it uses an event-driven model where callbacks and promises become the way to do non-memory based tasks &mdash; such as I/O operations.

To get an understanding of how this works there is a {% include inline-resource.html label="Original Node.js presentation" resource="nodejs-presentation" %} by Ryan Dahl, which is worth watching.