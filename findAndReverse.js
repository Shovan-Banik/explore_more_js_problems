function findAndReverse(firstFriend,secondFriend){
    var reverse='';
    if(firstFriend.length>secondFriend.length){
        for(let i=firstFriend.length-1;i>=0;i--){
            let value1=firstFriend[i];
            reverse=reverse+value1;
        }
    }
    else{
        for(let i=secondFriend.length-1;i>=0;i--){
            let value2=secondFriend[i];
            reverse=reverse+value2;
    }
}
return reverse;
}
const first='shafi';
const second='azizchy';
const result=findAndReverse(first,second);
console.log(result);