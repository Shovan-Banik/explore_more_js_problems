function duplicate_remover(array){
    sorted_array=[];
    for(let i=0;i<array.length;i++){
        var value=array[i];
        if(sorted_array.includes(value)===false){
            sorted_array.push(value);
        }
    }
    return sorted_array;
}
const arr=["jdu","modhu","kodu","ndo","jadu","modhu","dudu","ndo","jadu","kodu"];
console.log(duplicate_remover(arr));