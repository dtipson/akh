/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/error.kep'
 * DO NOT EDIT
*/
"use strict";
var Identity = require("./identity"),
    ErrorT = require("./trans/error"),
    runErrorT = ErrorT["runErrorT"],
    Error, id = (function(x) {
        return x;
    }),
    constant = (function(x) {
        return (function() {
            return x;
        });
    });
(Error = ErrorT(Identity));
(Error.runError = (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(Identity.runIdentity, (function(m, ok, err) {
    return runErrorT(m, (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(Identity.of, ok), (function(f, g) {
        return (function(x) {
            return f(g(x));
        });
    })(Identity.of, err));
})));
(Error.tryError = (function(m, e) {
    return Error.runError(m, id, e);
}));
(Error.attemptError = (function(m, def) {
    return Error.tryError(m, constant(def));
}));
(module.exports = Error);