(function () {
    'use strict';

    function logAssertion(outcome, description) {
        var para = document.createElement('p'),
            text = document.createTextNode(description);
        para.className = outcome ? 'pass' : 'fail';
        para.appendChild(text);
        document.body.appendChild(para);
    }

    function areArraysEqual(actual, expected) {
        if(actual.length !== expected.length) return false;

        for (var i = 0; i < expected.length; i++) {
            if (actual[i] != expected[i]) { return false; }
        }

        return true;
    }

    function assert(actual, expectation, description) {
        if(arguments.length === 2) {
            description = expectation;
            logAssertion(actual, description);
        } else if (arguments.length === 3) {
            var outcome = actual === expectation;
            if(Array.isArray(actual) && Array.isArray(expectation)) {
                outcome = areArraysEqual(actual, expectation);
            }
            logAssertion(outcome, description);
        }
    }

    function assertIsNaN(nanValue, description) {
        if(arguments.length != 2) return;
        logAssertion(isNaN(nanValue), description);
    }

    window.assert = assert;

    window.assertIsNaN = assertIsNaN;
}());