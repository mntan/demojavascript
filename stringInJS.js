/*
* refer more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
* */
var S = require ("./stringMethodExtend.js");
var str = "This is the test Text in javascript , using javascript methods";

//indexOf method

console.log(str.indexOf("javascript"));
//find the index of keyword in string appear from 0

//lastIndexOf method
console.log(str.lastIndexOf("javascript")); //find the index of keyword in string appear from the end


//Search method
console.log(str.search("javascript")); //the same indexOf method


//slice method
console.log(str.slice(str.indexOf("javascript"),str.indexOf("javascript")+10)); //cut string from ... to ... index of char
console.log(str.slice(str.indexOf("javascript")));//cut string from ... index of char


console.log("Slice Method : "+str.slice(-18,-8));//using negative is not work with < IE 8

//substring method
console.log("Substring method : "+str.substring(44,54));

//substr method
console.log("Substr method : "+str.substr(25,10));

//replace method
console.log("replace method : "+str.replace(/javascript/g,"node.js"));

//upperCase and lowerCase
console.log("upperCase and lowerCase method : "+str.toUpperCase()+" -- "+str.toLowerCase());

//toLocateUpperCase and toLocateLowerCase
//console.log("toLocateUpperCase and toLocateLowerCase : "+str.toLocaleUpperCase()+" -- "+str.toLocaleLowerCase());
//concat
console.log("Concat method : "+str.concat(" **Add new string to**","this is second string (optional)"));

//charAt and charCodeAt
console.log("CharAt and CharCodeAt : "+str.charAt(44)+" -- "+str.charCodeAt(44)); //unsafe because not work with IE 5,6,7
//split
console.log("split method : "+ "hallo".split(""));

console.log("test camel function ".camelUpperCase());
console.log("test with reserve str:", str.reserve());
console.log(S.statisticWord("This is Tan, he is an engineer software. He love programming."));

/*
* 25
 44
 25
 javascript
 javascript , using javascript methods
 Slice Method : javascript
 Substring method : javascript
 Substr method : javascript
 replace method : This is the test Text in node.js , using node.js methods
 upperCase and lowerCase method : THIS IS THE TEST TEXT IN JAVASCRIPT , USING JAVASCRIPT METHODS -- this is the test text in javascript , using javascript methods
 Concat method : This is the test Text in javascript , using javascript methods **Add new string to**this is second string (optional)
 CharAt and CharCodeAt : j -- 106
 split method : h,a,l,l,o
 Test Camel Function
 test with reserve str: sdohtem tpircsavaj gnisu , tpircsavaj ni txeT tset eht si sihT
 [ { word: 'is', time: 2 },
 { word: 'This', time: 1 },
 { word: 'Tan', time: 1 },
 { word: 'he', time: 1 },
 { word: 'an', time: 1 },
 { word: 'engineer', time: 1 },
 { word: 'software', time: 1 },
 { word: 'He', time: 1 },
 { word: 'love', time: 1 },
 { word: 'programming', time: 1 } ]
 * */
