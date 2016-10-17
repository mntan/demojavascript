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
