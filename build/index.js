"use strict";
// TODO 1. uloha
var strType = '';
var boolType = true;
var numType = 200;
var numArray = [1, 2, 3, 4, 5, 6, 7];
var multiply = function (first, second, showResult) {
    if (showResult === void 0) { showResult = false; }
    if (showResult) {
        console.log(first * second);
        return 0;
    }
    return first * second;
};
console.log(multiply(numArray[1], numArray[numArray.length - 1]));
// TODO 2. uloha
var getFullName = function (firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
};
console.log(getFullName('Tim', 'Nguyen'));
// TODO 3. uloha
var car = /** @class */ (function () {
    function car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    car.prototype.printMakeAndModel = function () {
        console.log("Zna\u010Dka auta - ".concat(this.make, " ; Model auta - ").concat(this.model));
    };
    return car;
}());
var carInstance = new car('Audi', 'R8', 2024);
carInstance.printMakeAndModel();
// TODO 4. uloha
function greet(greeting, name) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greet('wassup', 'babushka'));
// TODO 5. uloha
function printId(id) {
    typeof id === 'number' ? console.log("ID je typu Number hodnoty ".concat(id)) : console.log("ID je typu String hodnoty ".concat(id));
}
printId('2');
// TODO 6. uloha
function identity(arg) {
    return arg;
}
console.log(identity('ZPIVAM PRVNIII, ZPIVAM NA LETNYYY, TAM KDE TO MAM RAAAD, TAM KDE JA UZ PATRIIIM, JA NEPRIJDU DOMUUUUUU, JA NEPRIJDU VCASSS, KDYZ MAM RUCE NAHORE TAK NIKDY NEJSEM SAAAAAAAM... WOOOOOOOAAH OH OH OOOOH, WOOOOAH OOHHHH OOOHHH OOHHH'));
