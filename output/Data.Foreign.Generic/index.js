// Generated by purs version 0.11.7
"use strict";
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Foreign = require("../Data.Foreign");
var Data_Foreign_Class = require("../Data.Foreign.Class");
var Data_Foreign_Generic_Class = require("../Data.Foreign.Generic.Class");
var Data_Foreign_Generic_Types = require("../Data.Foreign.Generic.Types");
var Data_Foreign_JSON = require("../Data.Foreign.JSON");
var Data_Functor = require("../Data.Functor");
var Data_Generic_Rep = require("../Data.Generic.Rep");
var Data_Identity = require("../Data.Identity");
var Global_Unsafe = require("../Global.Unsafe");
var Prelude = require("../Prelude");
var genericEncode = function (dictGeneric) {
    return function (dictGenericEncode) {
        return function (opts) {
            return function ($10) {
                return Data_Foreign_Generic_Class.encodeOpts(dictGenericEncode)(opts)(Data_Generic_Rep.from(dictGeneric)($10));
            };
        };
    };
};
var genericEncodeJSON = function (dictGeneric) {
    return function (dictGenericEncode) {
        return function (opts) {
            return function ($11) {
                return Global_Unsafe.unsafeStringify(genericEncode(dictGeneric)(dictGenericEncode)(opts)($11));
            };
        };
    };
};
var genericDecode = function (dictGeneric) {
    return function (dictGenericDecode) {
        return function (opts) {
            return function ($12) {
                return Data_Functor.map(Control_Monad_Except_Trans.functorExceptT(Data_Identity.functorIdentity))(Data_Generic_Rep.to(dictGeneric))(Data_Foreign_Generic_Class.decodeOpts(dictGenericDecode)(opts)($12));
            };
        };
    };
};
var genericDecodeJSON = function (dictGeneric) {
    return function (dictGenericDecode) {
        return function (opts) {
            return Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(genericDecode(dictGeneric)(dictGenericDecode)(opts))(Data_Foreign_JSON.parseJSON);
        };
    };
};
var encodeJSON = function (dictEncode) {
    return function ($13) {
        return Global_Unsafe.unsafeStringify(Data_Foreign_Class.encode(dictEncode)($13));
    };
};
var defaultOptions = {
    sumEncoding: new Data_Foreign_Generic_Types.TaggedObject({
        tagFieldName: "tag",
        contentsFieldName: "contents",
        constructorTagTransform: Control_Category.id(Control_Category.categoryFn)
    }),
    unwrapSingleConstructors: false,
    unwrapSingleArguments: true
};
var decodeJSON = function (dictDecode) {
    return Data_Foreign_JSON.decodeJSONWith(Data_Foreign_Class.decode(dictDecode));
};
module.exports = {
    defaultOptions: defaultOptions,
    genericDecode: genericDecode,
    genericEncode: genericEncode,
    decodeJSON: decodeJSON,
    encodeJSON: encodeJSON,
    genericDecodeJSON: genericDecodeJSON,
    genericEncodeJSON: genericEncodeJSON
};