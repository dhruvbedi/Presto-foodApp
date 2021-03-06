// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Monad_Aff_AVar = require("../Control.Monad.Aff.AVar");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans");
var Control_Monad_Free = require("../Control.Monad.Free");
var Data_Either = require("../Data.Either");
var Data_Functor = require("../Data.Functor");
var Prelude = require("../Prelude");
var Presto_Core_Types_App = require("../Presto.Core.Types.App");
var Presto_Core_Types_Language_Flow = require("../Presto.Core.Types.Language.Flow");
var liftLeft = function (e) {
    return Data_Functor.map(Control_Monad_Free.freeFunctor)(Data_Either.Left.create)(Control_Applicative.pure(Control_Monad_Free.freeApplicative)(e));
};
module.exports = {
    liftLeft: liftLeft
};
