"use strict";
var Control_Apply = require("../Control.Apply");
var Control_Fold = require("../Control.Fold");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Functor = require("../Data.Functor");
var Data_Show = require("../Data.Show");
var Data_Traversable = require("../Data.Traversable");
var Prelude = require("../Prelude");
var main = (function () {
    var average = function (dictEuclideanRing) {
        return Control_Apply.apply(Control_Fold.applyFold)(Data_Functor.map(Control_Fold.functorFold)(Data_EuclideanRing.div(dictEuclideanRing))(Control_Fold.sum(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0())))(Control_Fold.length(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0()));
    };
    return Control_Monad_Eff_Console.logShow(Data_Show.showArray(Data_Show.showNumber))(Control_Fold.scanl(Data_Traversable.traversableArray)(average(Data_EuclideanRing.euclideanRingNumber))([ 1.0, 2.0, 3.0, 4.0, 5.0 ]));
})();
module.exports = {
    main: main
};
