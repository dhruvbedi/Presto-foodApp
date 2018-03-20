// Generated by purs version 0.11.7
"use strict";
var Control_Alt = require("../Control.Alt");
var Control_Alternative = require("../Control.Alternative");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad = require("../Control.Monad");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Eff_Unsafe = require("../Control.Monad.Eff.Unsafe");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class");
var Control_Monad_IO_Effect = require("../Control.Monad.IO.Effect");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_MonadZero = require("../Control.MonadZero");
var Control_Plus = require("../Control.Plus");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Monoid = require("../Data.Monoid");
var Data_Newtype = require("../Data.Newtype");
var Data_Semigroup = require("../Data.Semigroup");
var Prelude = require("../Prelude");
var IOSync = function (x) {
    return x;
};
var newtypeIOSync = new Data_Newtype.Newtype(function (n) {
    return n;
}, IOSync);
var runIOSync = Data_Newtype.unwrap(newtypeIOSync);
var runIOSync$prime = function ($5) {
    return Control_Monad_Eff_Unsafe.unsafeCoerceEff(Data_Newtype.unwrap(newtypeIOSync)($5));
};
var monadRecIOSync = Control_Monad_Rec_Class.monadRecEff;
var monadIOSync = Control_Monad_Eff.monadEff;
var monadEffIOSync = new Control_Monad_Eff_Class.MonadEff(function () {
    return monadIOSync;
}, function ($6) {
    return Data_Newtype.wrap(newtypeIOSync)(Control_Monad_Eff_Unsafe.unsafeCoerceEff($6));
});
var monadThrowIOSync = new Control_Monad_Error_Class.MonadThrow(function () {
    return monadIOSync;
}, function ($7) {
    return Control_Monad_Eff_Class.liftEff(monadEffIOSync)(Control_Monad_Eff_Exception.throwException($7));
});
var monadErrorIOSync = new Control_Monad_Error_Class.MonadError(function () {
    return monadThrowIOSync;
}, function (a) {
    return function (k) {
        return Control_Monad_Eff_Class.liftEff(monadEffIOSync)(Control_Monad_Eff_Exception.catchException(function (e) {
            return Data_Newtype.unwrap(newtypeIOSync)(k(e));
        })(Control_Monad_Eff_Unsafe.unsafeCoerceEff(Data_Newtype.unwrap(newtypeIOSync)(a))));
    };
});
var functorIOSync = Control_Monad_Eff.functorEff;
var bindIOSync = Control_Monad_Eff.bindEff;
var applyIOSync = Control_Monad_Eff.applyEff;
var semigroupIOSync = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (a) {
        return function (b) {
            return Control_Apply.apply(applyIOSync)(Data_Functor.map(functorIOSync)(Data_Semigroup.append(dictSemigroup))(a))(b);
        };
    });
};
var applicativeIOSync = Control_Monad_Eff.applicativeEff;
var monoidIOSync = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupIOSync(dictMonoid.Semigroup0());
    }, Control_Applicative.pure(applicativeIOSync)(Data_Monoid.mempty(dictMonoid)));
};
var altIOSync = new Control_Alt.Alt(function () {
    return functorIOSync;
}, function (a) {
    return function (b) {
        return Control_Monad_Error_Class.catchError(monadErrorIOSync)(a)(Data_Function["const"](b));
    };
});
var plusIOSync = new Control_Plus.Plus(function () {
    return altIOSync;
}, Control_Monad_Error_Class.throwError(monadThrowIOSync)(Control_Monad_Eff_Exception.error("plusIOSync.empty")));
var alternativeIOSync = new Control_Alternative.Alternative(function () {
    return applicativeIOSync;
}, function () {
    return plusIOSync;
});
var monadZeroIOSync = new Control_MonadZero.MonadZero(function () {
    return alternativeIOSync;
}, function () {
    return monadIOSync;
});
module.exports = {
    IOSync: IOSync,
    runIOSync: runIOSync,
    "runIOSync'": runIOSync$prime,
    newtypeIOSync: newtypeIOSync,
    functorIOSync: functorIOSync,
    applyIOSync: applyIOSync,
    applicativeIOSync: applicativeIOSync,
    bindIOSync: bindIOSync,
    monadIOSync: monadIOSync,
    monadRecIOSync: monadRecIOSync,
    semigroupIOSync: semigroupIOSync,
    monoidIOSync: monoidIOSync,
    monadEffIOSync: monadEffIOSync,
    monadErrorIOSync: monadErrorIOSync,
    monadThrowIOSync: monadThrowIOSync,
    altIOSync: altIOSync,
    plusIOSync: plusIOSync,
    alternativeIOSync: alternativeIOSync,
    monadZeroIOSync: monadZeroIOSync
};
