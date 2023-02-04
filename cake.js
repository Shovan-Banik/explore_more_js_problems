function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
    //Write your code here
    //Don't forget to return
      if(marksOfJim>marksOfDela && marksOfJim>marksOfChinku){
        return "Jim";
      }
      else if(marksOfDela>marksOfJim && marksOfDela>marksOfChinku){
        return "Dela";
      }
      else{
        return "Chinku"
      }
    }
    const result=JimOrDelaOrChinku(87,90,97);
    console.log(result);