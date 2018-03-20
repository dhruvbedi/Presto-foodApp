// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Alt = require("../Control.Alt");
var Control_Alternative = require("../Control.Alternative");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Aff_AVar = require("../Control.Monad.Aff.AVar");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Eff_Timer = require("../Control.Monad.Eff.Timer");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class");
var Data_Array = require("../Data.Array");
var Data_Either = require("../Data.Either");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Data_Traversable = require("../Data.Traversable");
var Data_Unit = require("../Data.Unit");
var Node_Process = require("../Node.Process");
var Pipes = require("../Pipes");
var Pipes_Core = require("../Pipes.Core");
var Pipes_Internal = require("../Pipes.Internal");
var Prelude = require("../Prelude");
var Test_Spec = require("../Test.Spec");
var Test_Spec_Console = require("../Test.Spec.Console");
var Test_Spec_Runner_Event = require("../Test.Spec.Runner.Event");
var Test_Spec_Speed = require("../Test.Spec.Speed");
var Test_Spec_Summary = require("../Test.Spec.Summary");
var trim = function (xs) {
    var findJust = function (f) {
        var go = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing) {
                    return f(v1);
                };
                return v;
            };
        };
        return Data_Foldable.foldl(Data_Foldable.foldableArray)(go)(Data_Maybe.Nothing.value);
    };
    var findOnly = function (v) {
        if (v instanceof Test_Spec.It && v.value0) {
            return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(v);
        };
        if (v instanceof Test_Spec.Describe) {
            return Control_Alt.alt(Data_Maybe.altMaybe)(findJust(findOnly)(v.value2))((function () {
                if (v.value0) {
                    return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(v);
                };
                return Data_Maybe.Nothing.value;
            })());
        };
        return Data_Maybe.Nothing.value;
    };
    return Data_Maybe.fromMaybe(xs)(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Array.singleton)(findJust(findOnly)(xs)));
};
var pickFirst = function (t1) {
    return function (t2) {
        return Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff_AVar.makeVar)(function (v) {
            return Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(t1))(Data_Either.either(Control_Monad_Aff_AVar.killVar(v))(Control_Monad_Aff_AVar.putVar(v)))))(function (v1) {
                return Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(t2))(Data_Either.either(Control_Monad_Aff_AVar.killVar(v))(Control_Monad_Aff_AVar.putVar(v)))))(function (v2) {
                    return Control_Monad_Aff.cancelWith(Control_Monad_Aff_AVar.takeVar(v))(Data_Semigroup.append(Control_Monad_Aff.semigroupCanceler)(v1)(v2));
                });
            });
        });
    };
};
var makeTimeout = function (time) {
    return Control_Monad_Aff.makeAff(function (fail) {
        return function (v) {
            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_Eff_Timer.setTimeout(time)(fail(Control_Monad_Eff_Exception.error("test timed out after " + (Data_Show.show(Data_Show.showInt)(time) + "ms")))));
        };
    });
};
var timeout = function (time) {
    return function (t) {
        return pickFirst(t)(makeTimeout(time));
    };
};
var defaultConfig = {
    slow: 75,
    timeout: new Data_Maybe.Just(2000)
};
var _run = function (config) {
    return function (spec) {
        var runGroup = function (v) {
            if (v instanceof Test_Spec.It) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Pipes["yield"](Control_Monad_Aff.monadAff)(Test_Spec_Runner_Event.Test.value))(function () {
                    return Control_Bind.bind(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Control_Monad_Trans_Class.lift(Pipes_Internal.monadTransProxy)(Control_Monad_Aff.monadAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)($foreign.dateNow)))(function (v1) {
                        return Control_Bind.bind(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Control_Monad_Trans_Class.lift(Pipes_Internal.monadTransProxy)(Control_Monad_Aff.monadAff)(Control_Monad_Aff.attempt((function () {
                            if (config.timeout instanceof Data_Maybe.Just) {
                                return timeout(config.timeout.value0)(v.value2);
                            };
                            return v.value2;
                        })())))(function (v2) {
                            return Control_Bind.bind(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Control_Monad_Trans_Class.lift(Pipes_Internal.monadTransProxy)(Control_Monad_Aff.monadAff)(Data_Functor.map(Control_Monad_Aff.functorAff)(function (v3) {
                                return v3 - v1 | 0;
                            })(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)($foreign.dateNow))))(function (v3) {
                                return Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Pipes["yield"](Control_Monad_Aff.monadAff)(Data_Either.either(function (err) {
                                    var stack = Control_Monad_Eff_Exception.stack(err);
                                    var msg = Control_Monad_Eff_Exception.message(err);
                                    return new Test_Spec_Runner_Event.Fail(v.value1, msg, stack);
                                })(Data_Function["const"](new Test_Spec_Runner_Event.Pass(v.value1, Test_Spec_Speed.speedOf(config.slow)(v3), v3)))(v2)))(function () {
                                    return Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Pipes["yield"](Control_Monad_Aff.monadAff)(Test_Spec_Runner_Event.TestEnd.value))(function () {
                                        return Control_Applicative.pure(Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(Test_Spec.It.create(v.value0)(v.value1)(Data_Either.either(Test_Spec.Failure.create)(Data_Function["const"](Test_Spec.Success.value))(v2)));
                                    });
                                });
                            });
                        });
                    });
                });
            };
            if (v instanceof Test_Spec.Pending) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Pipes["yield"](Control_Monad_Aff.monadAff)(new Test_Spec_Runner_Event.Pending(v.value0)))(function () {
                    return Control_Applicative.pure(Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(new Test_Spec.Pending(v.value0));
                });
            };
            if (v instanceof Test_Spec.Describe) {
                return Control_Apply.applyFirst(Pipes_Internal.applyProxy(Control_Monad_Aff.monadAff))(Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Pipes["yield"](Control_Monad_Aff.monadAff)(new Test_Spec_Runner_Event.Suite(v.value1)))(function () {
                    return Data_Functor.map(Pipes_Internal.functorProxy(Control_Monad_Aff.monadAff))(Test_Spec.Describe.create(v.value0)(v.value1))(Data_Traversable["for"](Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(Data_Traversable.traversableArray)(v.value2)(runGroup));
                }))(Pipes["yield"](Control_Monad_Aff.monadAff)(Test_Spec_Runner_Event.SuiteEnd.value));
            };
            throw new Error("Failed pattern match at Test.Spec.Runner line 117, column 3 - line 132, column 59: " + [ v.constructor.name ]);
        };
        return Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Pipes["yield"](Control_Monad_Aff.monadAff)(new Test_Spec_Runner_Event.Start(Test_Spec.countTests(spec))))(function () {
            return Control_Bind.bind(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Data_Traversable["for"](Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(Data_Traversable.traversableArray)(trim(Test_Spec.collect(spec)))(runGroup))(function (v) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Pipes_Internal.bindProxy(Control_Monad_Aff.monadAff))(Pipes["yield"](Control_Monad_Aff.monadAff)(new Test_Spec_Runner_Event.End(v)))(function () {
                    return Control_Applicative.pure(Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(v);
                });
            });
        });
    };
};
var run$prime = function (config) {
    return function (reporters) {
        return function (spec) {
            var onSuccess = function (results) {
                var $41 = Test_Spec_Summary.successful(results);
                if ($41) {
                    return Node_Process.exit(0);
                };
                return Node_Process.exit(1);
            };
            var onEvent = function (v) {
                return Control_Applicative.pure(Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(Data_Unit.unit);
            };
            var onError = function (err) {
                return function __do() {
                    Test_Spec_Console.withAttrs([ 31 ])(Control_Monad_Eff_Console.logShow(Control_Monad_Eff_Exception.showError)(err))();
                    return Node_Process.exit(1)();
                };
            };
            return Data_Functor["void"](Control_Monad_Eff.functorEff)((function () {
                var events = Data_Foldable.foldl(Data_Foldable.foldableArray)(Pipes.composePipes(Control_Monad_Aff.monadAff))(_run(config)(spec))(reporters);
                return Control_Monad_Aff.runAff(onError)(onSuccess)(Pipes_Core.runEffectRec(Control_Monad_Aff.monadRecAff)(Pipes["for"](Control_Monad_Aff.monadAff)(events)(onEvent)));
            })());
        };
    };
};
var run = run$prime(defaultConfig);
var runSpec = function (spec) {
    return Pipes_Core.runEffectRec(Control_Monad_Aff.monadRecAff)(Pipes_Core.composeResponse(Control_Monad_Aff.monadAff)(_run(defaultConfig)(spec))(Data_Function["const"](Control_Applicative.pure(Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(Data_Unit.unit))));
};
var runSpec$prime = function (config) {
    return function (spec) {
        return Pipes_Core.runEffectRec(Control_Monad_Aff.monadRecAff)(Pipes_Core.composeResponse(Control_Monad_Aff.monadAff)(_run(config)(spec))(Data_Function["const"](Control_Applicative.pure(Pipes_Internal.applicativeProxy(Control_Monad_Aff.monadAff))(Data_Unit.unit))));
    };
};
module.exports = {
    run: run,
    "run'": run$prime,
    runSpec: runSpec,
    "runSpec'": runSpec$prime,
    defaultConfig: defaultConfig,
    timeout: timeout
};
