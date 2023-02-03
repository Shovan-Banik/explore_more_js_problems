function feetToInch(valueInFeet){
    if(typeof(valueInFeet) !== 'number'){
        return "we are sorry!!! please ensure first, your given number is numeric ";
    }
    else{
        const inch=valueInFeet*12;
        return inch;
    }
}
let feet='fsfsf';
const result=feetToInch(feet);
console.log("value of ",feet," in inch is :",result);