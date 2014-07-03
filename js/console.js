var console = {};
console.log = function (message) {
    'use strict';
    var para = document.createElement('p'),
        text = document.createTextNode(message);
    para.appendChild(text);
    document.body.appendChild(para);
};