/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/cont.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./identity", "./trans/cont"], (function(require, exports, Identity, ContT) {
    "use strict";
    var Cont, runContT = ContT["runContT"];
    (Cont = ContT(Identity));
    var x = (function(m, k) {
        var y;
        return runContT(m, ((y = Identity.of), (function(z) {
            return y(k(z));
        })));
    }),
        y = Identity.runIdentity;
    (Cont.runCont = (function() {
        var args = arguments;
        return y(x.apply(null, args));
    }));
    return Cont;
}));