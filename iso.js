function checkTriangle(side1, side2,side3){
    //write your code here
    //don't forget to write return
    if(side1===side2 && side2===side3 && side1===side3){
        return "No";
    }
    else if(side1!==side2 && side1!==side3 && side2!==side3){
        return "No";
    }

    else{
        return "Yes";
    }
    
    }
const result=checkTriangle(9,9,3);
console.log(result);