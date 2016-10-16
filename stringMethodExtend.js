module.exports = String ;




String.prototype.revertString = function(){
    var temp="";
    for( var i = this.length-1 ; i >=0  ; i--){
        //console.log(a[i]);
        temp+=this.charAt(i);
    }
    return temp;
};

String.prototype.reserve = function () {
    var temp = "";
    for (var i = this.length-1; i >= 0; i--) {
        temp += this.charAt(i);
    }
    return temp;
}
//khai bao de co the export



String.prototype.isEmail= function(){
    var pattern = /^[a-z0-9_-]{3,}@[a-z0-9]{2,}[.][a-z0-9-_]{3,10}$/i;
    if (this.match(pattern)){
        return true;
    }else {
        return false;
    }

};
//
String.prototype.isPassword = function (){
  var pattern = /^[a-z0-9@]{6,16}$/i;
    if ( this.match(pattern)){
        return true;
    }else{
        return false;
    }

};
String.prototype.camelUpperCase = function () {
    "use strict";
    var result = "";
    var preChar = "";
    //console.log("camel function");
    for( var i = 0 ; i < this.length ; i++){
        if(i == 0 || preChar == " "){
            result += this.charAt(i).toUpperCase();
            //console.log(this.charAt(i));
        }else {
            result += this.charAt(i);
        }
        preChar = this.charAt(i);
        //console.log(preChar);
    }
    return result;
};

//
String.prototype.wordCount = function () {
    return this.split(" ").length;
}

module.exports.statisticWord = statisticWord ;

function statisticWord(str) {

    var statisticResult = new Array();
    var result = str.split(" ");
    var listTemp ="";

    //filter element in array
    for( var i =0 ; i < result.length ; i++ ){
        var temp = "";
        for( var j =0 ; j < result[i].length ; j++){
            if(!result[i].charAt(j).match(/[,.]/)){
                temp+=result[i].charAt(j);
            }
        }
        result[i] = temp;
        temp = "";
        //console.log(temp[i]);
    }

    //count word appear in string
    //console.log(result);
    listTemp = result ;
    for( var i =0 ; i < result.length ; i++ ){
        var count =1 ;

        for( var j = 1+i ; j < listTemp.length ; j++){
            if( result[i] == listTemp [j] && result[i] != "" ){
                listTemp[j] = "" ;
                count++;
            }
        }
        //console.log("***** "+result[i]);
        if( result[i] != "" && result[i] != null ) {
            var wordTemp = {word: result[i], time: count};
            statisticResult.push(wordTemp);
        }


    }
    // order array higher ==> Lower
       // console.log(statisticResult);
    var tempOrder = new Object() ;
    for ( var i = 0 ; i < statisticResult.length - 1 ;i++) {
        for(var j = i + 1 ; j < statisticResult.length ; j++){
            //console.log(statisticResult[i],statisticResult[j]);
            if( statisticResult[i].time < statisticResult[j].time){
                tempOrder = statisticResult[i]  ;
                statisticResult[i] = statisticResult[j];
                statisticResult[j] = tempOrder ;
                //console.log(statisticResult[i],statisticResult[j]);
            }
        }
    }


    return statisticResult;
}
