/**
 * Created by tann on 10/15/16
 */
var laptops = ["apple","thinkpad","hp","sony","asus","acer"];
//view all element in array
console.log(laptops.valueOf());
for (var i = 0 ;i<laptops.length;i++){
    console.log(laptops[i]);
}

//using push to add element to array
laptops.push("dell");
laptops.push("bkav");
laptops.push("dell","bkav");
//laptops.push("bkav",laptops[2],);


// add string to between element of array
console.log(laptops.join(" - "));
while (laptops.length > 0){

    //remove element from the right to left
  /*  laptops.pop();
    console.log(laptops.valueOf());
    */
    //remove element from the left to right
    laptops.shift();
    console.log(laptops.valueOf());
}
/*
*[ 'apple', 'thinkpad', 'hp', 'sony', 'asus', 'acer' ]
 apple
 thinkpad
 hp
 sony
 asus
 acer
 apple - thinkpad - hp - sony - asus - acer - dell - bkav - dell - bkav
 [ 'thinkpad',
 'hp',
 'sony',
 'asus',
 'acer',
 'dell',
 'bkav',
 'dell',
 'bkav' ]
 [ 'hp', 'sony', 'asus', 'acer', 'dell', 'bkav', 'dell', 'bkav' ]
 [ 'sony', 'asus', 'acer', 'dell', 'bkav', 'dell', 'bkav' ]
 [ 'asus', 'acer', 'dell', 'bkav', 'dell', 'bkav' ]
 [ 'acer', 'dell', 'bkav', 'dell', 'bkav' ]
 [ 'dell', 'bkav', 'dell', 'bkav' ]
 [ 'bkav', 'dell', 'bkav' ]
 [ 'dell', 'bkav' ]
 [ 'bkav' ]
 []
* */
