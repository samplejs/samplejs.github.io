(function () {
    'use strict';
    
    var console = {};
    
    function log(message) {
        var para = document.createElement('p'),
            text = document.createTextNode(message);
        para.appendChild(text);
        document.body.appendChild(para);
    }
    
    console.log = log;
    
    window.console = console;
    
}());