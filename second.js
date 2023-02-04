const myArray=[56,34,98,23,56,76,35];
var check=myArray[0];
var biggest = [];
    for(var i=0;i<myArray.length;i++){
        var element=myArray[i];
        if(check<element){
            biggest.push(element);
        }
}
    
console.log(biggest[1]);