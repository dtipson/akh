/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/trans/list.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("../base"),
    __o0 = require("../structure"),
    StateMonad = require("../spec/state"),
    ListT, liftM = __o["liftM"],
    liftM2 = __o["liftM2"],
    Monoid = __o0["Monoid"],
    Monad = __o0["Monad"],
    Transformer = __o0["Transformer"],
    map = (function(f, a) {
        return Array.prototype.map.call(a, f);
    }),
    concat = Function.prototype.call.bind(Array.prototype.concat),
    flatten = Function.prototype.apply.bind(Array.prototype.concat, []),
    flattenM = liftM.bind(null, flatten),
    runListT = (function(x) {
        return x._run;
    });
(ListT = (function(m) {
    var f, z, Instance = (function(run) {
            var self = this;
            (self._run = run);
        }),
        sequence = ((f = liftM2.bind(null, (function(x, y) {
            return concat(y, x);
        }))), (z = m.of([])), (function(a) {
            return Array.prototype.reduceRight.call(a, f, z);
        })),
        mapM = (function() {
            var args = arguments;
            return sequence(map.apply(null, args));
        });
    Monoid(Instance, new(Instance)(m.of([])), (function(b) {
        var a = this;
        return new(Instance)(liftM2(concat, a._run, b._run));
    }));
    Monad(Instance, (function(x) {
        return new(Instance)(m.of([x]));
    }), (function(f0) {
        var c = this;
        return new(Instance)(flattenM(c._run.chain(mapM.bind(null, (function(z0) {
            var x = f0(z0);
            return x._run;
        })))));
    }));
    Transformer(Instance, m, (function(t) {
        return new(Instance)(liftM((function(x) {
            return [x];
        }), t));
    }));
    StateMonad.tryLiftState(Instance, m);
    return Instance;
}));
(ListT.runListT = runListT);
(module.exports = ListT);