function centimeterToMeter(valueInCentimeter){
    if(typeof(valueInCentimeter)!=='number'){
        return 'we are sorry!!! please try with a numeric number.Thank you.';
    }
    else{
        const meter=valueInCentimeter/100;
        return meter;
    }
}
let centimeter=230;
const resultInMeter=centimeterToMeter(centimeter);
console.log(resultInMeter);