function checkNegative(array){
    let emptyArray=[];
    for(let i=0;i<array.length;i++){
        let element=array[i];
        if(element<0){
            return emptyArray;
        }
        else{
            emptyArray.push(element);
        }
    }
    return emptyArray;
}
const arr=[4,6,78,-34,544,78,2,45,76,86];
const result=checkNegative(arr);
console.log(result);