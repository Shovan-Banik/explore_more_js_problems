function findGrade(marks){
    if(marks>=80 && marks<=100){
        return "A grade";
    }
    else if(marks>=60 && marks<80){
        return "B grade"
    }
    else if(marks>=50 && marks<60){
        return "C grade";
    }
    else if(marks>=40 && marks<50){
        return "D grade";
    }
    else{
        return "F grade";
    }
}
const number=89;
const result=gradeSystem(number);
console.log(result);