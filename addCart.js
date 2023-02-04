const totalCost = (products) => {
let total=0;
for(let i=0;i<products.length;i++){
   let element=products[i];
    total=total+element.price;
}
return total;
};
const result=totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ]);
console.log(result);