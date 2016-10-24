/**
 * Created by tannguyen on 10/16/16.
 */
//pp1
function add (a, b) {
    return a + b;
}

console.log('add:', add(5, 5));
//pp2
var cong = add;
console.log('cong:', cong(10, 10));

var square = function (a) {
    return a * a;
}

console.log('square', square(10));
//pp3
add.description = function(){
    console.log("Add two numbers");
};
add.description.help = function() {
    console.log("input two numbers");
};

add.description();
cong.description();
add.description.help();
cong.description.help();

//pp4 with handling Exception
var addSafe = function(a, b) {
    if (typeof a !== 'number' || typeof  b !== 'number'){
        throw {
            name: 'TypeError',
            message: 'addSafe requires number parameters'
        };
    }
    return a + b;
};

// function addSafe(a, b) {
//     if (typeof (a) !== 'number' || typeof (b) !== 'number') {
//         throw {
//             name: 'TypeError',
//             message: 'addSafe requires number parameters'
//         };
//     }
//     return a + b;
// }

console.log('addSafe result: ', addSafe(10, 2));
// console.log('addSafe result: ', addSafe('10', 2)); //comment this throw for other lines below can run

//Function return function
function arithmetic(operatorString) {
    switch (operatorString){
        case '+':
            return function(a, b){
                return a + b;
            };
        case '-':
            return function(a, b){
                return a - b;
            };
        case '*':
            return function(a, b){
                return a * b;
            };
        case '/':
            return function(a, b){
                return a / b;
            };
    }
}

var x = arithmetic("+")(20, 10);
console.log(x);
var y = arithmetic("-")(20, 10);
console.log(y);
var z = arithmetic("*")(20, 10);
console.log(z);
var w = arithmetic("/")(20, 10);
console.log(w);

//Functions nested inside a function
function makeACupOfCoffee() {
    function boilWater(temperature) {
        console.log('Boil water at ', temperature);
    }
    function mixCoffeeWithMilkAndSugar() {
        console.log('Mix coffee with milk and sugar');
    }
    boilWater(100);
    mixCoffeeWithMilkAndSugar();
    return {
        boilWater: boilWater
    }
}
makeACupOfCoffee();
// makeACupOfCoffee.mixCoffeeWithMilkAndSugar(); //this is private method and cannot use from outside
console.log('---- start to call public function --');
makeACupOfCoffee().boilWater(100); //we also can not use from outside of function
console.log('---- finish to call public function --');
// var makeACupOfCoffeeV2 = function () {
//     function boilWater(temperature) {
//         console.log('Boil water at ', temperature);
//     }
//     function mixCoffeeWithMilkAndSugar() {
//         console.log('Mix coffee with milk and sugar');
//     }
//     boilWater(100);
//     mixCoffeeWithMilkAndSugar();
//     return {
//         // boilWater: function (val) {
//         //     return boilWater(val);
//         // }
//         boilWater: boilWater
//     }
// };

// makeACupOfCoffeeV2().boilWater(100);//must () for using
// makeACupOfCoffeeV2().mixCoffeeWithMilkAndSugar(); // this is private method and cannot use from outside

var numberObj = function(val) {
    var value = parseFloat(val);
    //Closure. Google closure javascript
    return { //return a object that have two properties: absolute and square
        absolute: function() {
            return value > 0 ? value : -value;
        },
        square: function(){
            return value * value;
        }
    };
};

console.log(numberObj(-5).absolute(), numberObj(-5).square());
console.log(numberObj);

// var numberObj = function(val) {
//     var value = parseFloat(val);
//     //Closure. Google closure javascript
//     return { //return a object that have two properties: absolute and square
//         absolute: function() {
//             return value > 0 ? value : -value;
//         },
//         square: function(){
//             return value * value;
//         }
//     };
// }(-5);
//
// console.log(numberObj.absolute(), numberObj.square());
// console.log(numberObj);

//closure function:
//The counter is protected by the scope of the anonymous function, and can only be changed using the counter function.
var counter = (function () {//create a scope (the anonymous function) and then return a anonymous function inside the scope to assign the var counter outside
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
