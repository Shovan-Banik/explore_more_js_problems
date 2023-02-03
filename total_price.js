var phones=[{name:'lava',camera:'8mpx',ram:'4gb',price:13500},
            {name:'symphony',camera:'8mpx',ram:'4gb',price:11500},
            {name:'sumsang',camera:'48mpx',ram:'6gb',price:19500},
            {name:'iphone',camera:'12mpx',ram:'16gb',price:82200},
            {name:'nokia',camera:'10mpx',ram:'8gb',price:42000},
            {name:'xiomy',camera:'24mpx',ram:'6gb',price:22000},
            {name:'pocco',camera:'8mpx',ram:'2gb',price:8000},
           ]; 
function chepest_phone(phone){
    var total_price=0;
    for(var i=0;i<phone.length;i++){
        var value=phone[i];
        // console.log(value);
        total_price=total_price+value.price;
    }
    return total_price;
}
var result=chepest_phone(phones);
console.log(result);
