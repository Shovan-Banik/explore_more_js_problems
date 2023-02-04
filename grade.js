function gradeSystem(mark){
    if(mark>=80 && mark<=100){
        return "A grade";
    }
    else if(mark>=60 && mark<80){
        return "B grade"
    }
    else if(mark>=50 && mark<60){
        return "C grade";
    }
    else if(mark>=40 && mark<50){
        return "D grade";
    }
    else{
        return "F grade";
    }
}
const number=89;
const result=gradeSystem(number);
console.log(result);