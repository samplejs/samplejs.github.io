(function () {
    'use strict';

    function assert(actual, expectation, message) {
        var outcome = arguments.length === 2 ? actual : actual === expectation,
            description = arguments.length === 2 ? expectation : message,
            para = document.createElement('p'),
            text = document.createTextNode(description);
        para.className = outcome ? 'pass' : 'fail';
        para.appendChild(text);
        document.body.appendChild(para);
    }

    function assertIsNaN(nanValue, description) {
        var outcome = isNaN(nanValue),
            para = document.createElement('p'),
            text = document.createTextNode(description);
        para.className = outcome ? 'pass' : 'fail';
        para.appendChild(text);
        document.body.appendChild(para);
    }

    window.assert = assert;

    window.assertIsNaN = assertIsNaN;
}());