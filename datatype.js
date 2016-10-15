/**
 * Created by tann on 10/15/16.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */
"use strict";
var age = "vcxx10"; //  parseInt ==> tra ve a number uu tien parse ve number neu number o dau or not = NaN
const pi = 3.14158 ;
console.log(typeof pi);

if(parseInt(age)){
    console.log(" age is a number ");

}else {
    console.log("age is not a number");
}

//Boolean [false, true]
var nodejs_slow = false;
var iojs_fast = true;

if (nodejs_slow) {
    console.log("Node.js is slow");
} else {
    console.log("Node.js is fast");
}

if (!nodejs_slow) {
    console.log("Node.js is not slow");
}

if (!nodejs_slow && iojs_fast) {
    console.log("Both Node.js and iojs are fast");
}


//String
var best_film = "Gone with the wind";
var best_hero = 'Bat man';
var best_player = 'Bjork\'ka';
console.log(best_player);
var my_folder = "/Volumes/MacBackup/Data/";
console.log(my_folder);


//object variable
var person = {name : "tann",add : "Nguyen Trai",age : 30};
var laptop = {name : "ibm" ,color : "black",owner : person};



person.isHasChild = true;
console.log(laptop.owner);
person.name = "Nguyen Tan";
console.log(laptop.owner.name);

/*
*number
 age is not a number
 Node.js is fast
 Node.js is not slow
 Both Node.js and iojs are fast
 Bjork'ka
 /Volumes/MacBackup/Data/
 { name: 'tann', add: 'Nguyen Trai', age: 30, isHasChild: true }
 Nguyen Tan
* */