"use strict";
/** @format */
exports.__esModule = true;
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is " + hero;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function HandleError(errmsg) {
    throw new Error(errmsg);
}
