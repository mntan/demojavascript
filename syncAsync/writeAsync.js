/**
 * Created by tannguyen on 10/24/16.
 */
var addSync = function (a, b) {
     if (isNaN(a) || isNaN(b)) {
         throw new Error("Invalid Input");
     }
    return a + b;
}

try {
    var result = addSync(1, 2);
    console.log("sync result: ", result);
} catch (err) {
    console.log(err.message);
}
//add with callback
var add = function (a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        return callback(new Error("Invalid Input"), null);
    }
    return callback(null, a + b);
}

add(1, 2, function (err, data) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Async result: ", data);
    }
});