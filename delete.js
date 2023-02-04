const deleteProperty =(arr)=>{
    // Write your code here.
    if(Object.keys(arr[0])==arr[1]){
        delete arr[0];
        return "yes";
    }
    else{
        return "no";
    }
    }
const array=[{fname:'John'},'lname'];
const result=deleteProperty(array);
console.log(result);