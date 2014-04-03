/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/structure.kep'
 * DO NOT EDIT
*/
"use strict";
var base = require("./base"),
    liftA2 = base["liftA2"],
    __curry = (function(x, y) {
        return x.bind(null, y);
    }),
    Applicative, Chain, Functor, Monad, Monoid, Semigroup, Transformer;
(Applicative = (function(Instance, of, ap) {
    (Instance.prototype.of = of);
    (Instance.of = Instance.prototype.of);
    (Instance.ap = base.ap);
    (Instance.prototype.ap = ap);
    Functor(Instance, (Instance.prototype.map || (function(f) {
        var m = this;
        return of(f)
            .ap(m);
    })));
    (Instance.ac = liftA2.bind(null, __curry));
    (Instance.prototype.ac = (function(m) {
        var f = this;
        return liftA2(__curry, f, m);
    }));
    return Instance;
}));
(Chain = (function(Instance, chain) {
    (Instance.chain = base.chain);
    (Instance.prototype.chain = chain);
    return Instance;
}));
(Functor = (function(Instance, map) {
    (Instance.map = base.map);
    (Instance.prototype.map = map);
    return Instance;
}));
(Monoid = (function(Instance, zero, plus) {
    (Instance.prototype.zero = zero);
    (Instance.zero = Instance.prototype.zero);
    Semigroup(Instance, plus);
    return Instance;
}));
(Monad = (function(Instance, of, chain) {
    (Instance.prototype.of = of);
    (Instance.of = Instance.prototype.of);
    Chain(Instance, chain);
    Functor(Instance, (Instance.prototype.map || (function(f) {
        var x, y, m = this;
        return m.chain(((x = f), (y = m.of), (function(x0) {
            return y(x(x0));
        })));
    })));
    Applicative(Instance, of, (Instance.prototype.ap || (function(m) {
        var f = this;
        return f.chain((function(f0) {
            return m.map(f0);
        }));
    })));
    return Instance;
}));
(Semigroup = (function(Instance, plus) {
    (Instance.concat = base.concat);
    (Instance.prototype.concat = plus);
    return Instance;
}));
var liftInner = (function(lift, outer, inner) {
    if (inner.liftInner) {
        var x, y;
        (outer.liftInner = liftInner(lift, ((x = lift), (y = inner.liftInner), (function(x0) {
            return x(y(x0));
        })), inner.liftInner));
    }
    return outer;
});
(Transformer = (function(Instance, m, lift) {
    (Instance.prototype.inner = m);
    (Instance.inner = Instance.prototype.inner);
    (Instance.prototype.lift = lift);
    (Instance.lift = Instance.prototype.lift);
    if (m.lift) {
        var x, y;
        (Instance.prototype.liftInner = liftInner(lift, ((x = lift), (y = m.lift), (function(x0) {
            return x(y(x0));
        })), m));
        (Instance.liftInner = Instance.prototype.liftInner);
    }
    return Instance;
}));
(exports["Applicative"] = Applicative);
(exports["Chain"] = Chain);
(exports["Functor"] = Functor);
(exports["Monad"] = Monad);
(exports["Monoid"] = Monoid);
(exports["Semigroup"] = Semigroup);
(exports["Transformer"] = Transformer);