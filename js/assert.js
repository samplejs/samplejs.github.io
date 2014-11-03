var assert = function (actual, expectation, message) {
    'use strict';
    var outcome = arguments.length === 2 ? actual : actual === expectation,
        description = arguments.length === 2 ? expectation : message,
        para = document.createElement('p'),
        text = document.createTextNode(description);
    para.className = outcome ? 'pass' : 'fail';
    para.appendChild(text);
    document.body.appendChild(para);
};

var assertIsNaN = function (nanValue, description) {
    'use strict';
    var outcome = isNaN(nanValue),
        para = document.createElement('p'),
        text = document.createTextNode(description);
    para.className = outcome ? 'pass' : 'fail';
    para.appendChild(text);
    document.body.appendChild(para);
};
