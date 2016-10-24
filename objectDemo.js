function Robot(type) {   //-->Constructor function
   this.type = type;
}

var flyRobot = new Robot('fly');
var diveRobot = new Robot('dive');

console.log(flyRobot.type);

Robot.prototype.speak = function (text) {
   console.log(this.type + "Robot says '" + text + "'");
};

flyRobot.speak('Hello World');

flyRobot.talk = function (str) {
   console.log('flyRobot is talking ...'+str);
}

flyRobot.speak = function (){
   //
    console.log("speak empty");
}
flyRobot.speak();
//diveRobot.speak("diveRobot");
// flyRobot.talk = function() {
//     console.log('I am talking');
// };

flyRobot.talk("I am talking talking");

//cach khai bao object thuong su dung
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//cach khai bao object roi thay doi gia tri mot thuoc tinh hoac la delete 1 thuoc tinh
var person2 = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
person2.gender = "male";
delete person2.eyeColor; //delete a property
console.log(person2);

//cach khai bao object kieu khac nua empty roi add thuoc tinh khi can thiet
var person4 = {};
person4.firstName = "John";
person4.lastName = "Doe";
person4.age = 50;
person4.eyeColor = "blue";

//day la 1 kieu khai bao object bang constructor, se linh hoat hon cac pp o ben tren, co sd this de them thuoc tinh cho object
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");// khai bao new de constructor dc goi
var myMother = new Person("Sally", "Rally", 48, "green");

Person.prototype.showInfo = function() {
    "use strict";
    console.log("name: ", this.firstName, this.lastName, ", age: ", this.age);
};

Person.prototype.showFullInfo = function() {
    "use strict";
    console.log("name: ", this);
};

Person.prototype.addInfo = function(info, val) {
    "use strict";
    this[info] = val;
    console.log("add Info name: ", this);
};


myMother.age = 52;
myMother.gender = "Female";

myFather.showFullInfo();
myMother.showFullInfo();

myFather.addInfo('age', 52);
myFather.addInfo('gender', "male");
myMother.showFullInfo();

//pp khai bao object kieu khac roi sau do sd <name>.<fun name> va roi sd
var x1 = new Object();    // A new Object object
var x2 = new String("Hello World");    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean()    // A new Boolean object
var x5 = new Array();     // A new Array object
var	x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object

console.log(x2);
x22 = "Hello World";
console.log(x22);
console.log(x3, x4, x5, x6, x7);
var date = new Date('2015-03-25');
console.log(date, x8);
/*
* fly
 flyRobot says 'Hello World'
 flyRobot is talking ...I am talking talking
 { firstName: 'John', lastName: 'Doe', age: 50, gender: 'male' }
 name:  Person { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
 name:  Person {
 firstName: 'Sally',
 lastName: 'Rally',
 age: 52,
 eyeColor: 'green',
 gender: 'Female' }
 add Info name:  Person { firstName: 'John', lastName: 'Doe', age: 52, eyeColor: 'blue' }
 add Info name:  Person {
 firstName: 'John',
 lastName: 'Doe',
 age: 52,
 eyeColor: 'blue',
 gender: 'male' }
 name:  Person {
 firstName: 'Sally',
 lastName: 'Rally',
 age: 52,
 eyeColor: 'green',
 gender: 'Female' }
 [String: 'Hello World']
 Hello World
 [Number: 0] [Boolean: false] [] /(?:)/ [Function: anonymous]
 2015-03-25T00:00:00.000Z 2016-10-16T07:52:41.444Z
* */
