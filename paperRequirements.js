function paperRequirements(firstBookNumber,secondBookNumber,thirdBookNumber){
    const pageOfFirstBook=100;
    const pageOfSecondBook=200;
    const pageOfThirdBook=300;
    const totalPage=firstBookNumber*pageOfFirstBook + secondBookNumber*pageOfSecondBook + thirdBookNumber*pageOfThirdBook;
    return totalPage;
}
const book1=5;
const book2=10;
const book3=5;
const output=paperRequirements(book1,book2,book3);
console.log(output);