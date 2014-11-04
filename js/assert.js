(function () {
    'use strict';

    function logAssertion(outcome, description) {
        var para = document.createElement('p'),
            text = document.createTextNode(description);
        para.className = outcome ? 'pass' : 'fail';
        para.appendChild(text);
        document.body.appendChild(para);
    }

    function assert(actual, expectation, description) {
        if(arguments.length === 2) {
            description = expectation;
            logAssertion(actual, description);
        } else if (arguments.length === 3) {
            logAssertion(actual === expectation, description);
        }
    }

    function assertIsNaN(nanValue, description) {
        if(arguments.length != 2) return;
        logAssertion(isNaN(nanValue), description);
    }

    window.assert = assert;

    window.assertIsNaN = assertIsNaN;
}());