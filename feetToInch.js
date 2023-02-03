function feetToInch(valueInFeet){
    const inch=valueInFeet*12;
    return inch;
}
let feet=10;
const result=feetToInch(feet);
console.log("value of ",feet," in inch is ",result);