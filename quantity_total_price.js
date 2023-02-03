var phones=[{name:'lava',camera:'8mpx',ram:'4gb',price:13500,quantity:5},
            {name:'symphony',camera:'8mpx',ram:'4gb',price:11500,quantity:3},
            {name:'sumsang',camera:'48mpx',ram:'6gb',price:19500,quantity:2},
            {name:'iphone',camera:'12mpx',ram:'16gb',price:82200,quantity:1},
           ]; 
function chepest_phone(phone){
    var total_price=0;
    for(var i=0;i<phone.length;i++){
        var value=phone[i];
        // console.log(value);
        var total=value.quantity*value.price;
        total_price=total_price + total;
    }
    return total_price;
}
var result=chepest_phone(phones);
console.log(result);
