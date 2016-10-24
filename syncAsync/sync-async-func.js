/**
 * Created by tannguyen on 10/20/16.
 */
const fs = require('fs');
//exam1: async
// fs.readFile('abc.txt', function (err, data) {
//   if (!err) {
//       console.log('data', data.toString());
//   }
// });
//
// console.log('End');
//exam2: sync
// try{
//     console.log(fs.readFileSync("abc.txt").toString());
//     console.log('End');
// } catch (err) {
//     console.log(err);
// }
//exam3
var content = '';
fs.readFile('abc.txt', function (err, data) {
  if (!err) {
      content = data.toString();
      // console.log(content);
  }
});

console.log(content);
//