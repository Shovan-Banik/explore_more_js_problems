function total_amount(rice_quantity,sugar_quantity,potato_quantity,dal_quantity){
    const rice_price=54;
    const sugar_price=120;
    const potato_price=28;
    const dal_price=140;
    let rice_total_cost=rice_price*rice_quantity;
    let sugar_total_cost=sugar_price*sugar_quantity;
    let potato_total_cost=potato_price*potato_quantity;
    let dal_total_cost=dal_price*dal_quantity;
    let total_cost=rice_total_cost+sugar_total_cost+potato_total_cost+dal_total_cost;
    return total_cost;
}
console.log(total_amount(5,4,3,2));