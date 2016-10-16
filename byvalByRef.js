/**
 * Created by tannguyen on 10/16/16.
 */
var a = 1,
    b = { foo: 'bar' },
    c = "Rock start",
    a_ = a,
    b_ = b,
    c_ = c;

//non object type params are passed by value
//object type params are passed by reference
function makeChange(_a, _b, _c) {
    _a = 2;
    //arguments[1] = { foo: 'Fun qua' };
    _b.foo = 'Fun qua';
    _c = "Film Star";
}
makeChange(a, b, c);

console.log(a === a_); //=> true
console.log(b === b_); //=> true
console.log(c === c_); //=> true

console.log('a = ', a, ', b = ', b, ', c =', c);

function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp; //assign tmp to b
}

var x = 1, y = 2;
swap(x, y);

console.log("x is " + x + " y is " + y); // "x is 1 y is 2"

function swap2(object) {
    var tmp = object.a;
    object.a = object.b;
    object.b = tmp; //assign tmp to b
}
var obj = {a: 1, b: 2};
swap2(obj);
console.log('after swap : ', obj);

function swap3(object, a, b) {
    var tmp = object[a];
    object[a] = object[b];
    object[b] = tmp; //assign tmp to b
}
var obj2 = {a: 1, b: 2};
swap3(obj2, 'a', 'b');
console.log('after swap : ', obj);
/*output
* true
 true
 true
 a =  1 , b =  { foo: 'Fun qua' } , c = Rock start
 x is 1 y is 2
 after swap :  { a: 2, b: 1 }
 after swap :  { a: 2, b: 1 }
* */