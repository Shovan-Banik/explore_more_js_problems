function checkAndCount(array){
    count=0;
    for(let i=0;i<array.length;i++){
        let element=array[i];
        if(element>=5){
            count++;
        }
    }
    return count;
}
const arr=[3,6,4,8,5,-9,2,-3,13,45,-34,9];
const result=checkAndCount(arr);
console.log(result);