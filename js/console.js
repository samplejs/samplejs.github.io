(function(originalConsole) {
    'use strict';

    // TODO: only supports single argument
    function log(message) {
        var element = createElement(message);
        document.body.appendChild(element);
    }

    function createArrayElementInner(para, array) {
        para.appendChild(createTextElement('['));
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                createArrayElementInner(para, array[i]);
            } else {
                para.appendChild(createTextElement(array[i]));
            }

            if (i < array.length - 1) {
                para.appendChild(createTextElement(', '));
            }
        }
        para.appendChild(createTextElement(']'));
    }

    function createArrayElement(array) {
        var para = document.createElement('p');
        createArrayElementInner(para, array);
        return para;
    }

    function createParagraphElement(message) {
        var para = document.createElement('p');
        var text = document.createTextNode(message);
        para.appendChild(text);
        return para;
    }

    function createTextElement(text) {
        return document.createTextNode(text);        
    }

    function createElement(message) {
        if (Array.isArray(message)) {
            return createArrayElement(message);
        }

        return createParagraphElement(message);
    }

    var console = {};
    console.log = log;

    window.console = console;

}(window.console));
