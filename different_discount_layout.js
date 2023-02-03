function totalPrice_afterDiscount(ticket_number){
const first100Price=100;
const second100Price=80;
const restAllPrice=50;
if(ticket_number>0 && ticket_number<=100){
    const ticket_price1=ticket_number*first100Price;
    return ticket_price1;
}
else if(ticket_number>100 && ticket_number<=200){
    const first100=first100Price*100;
    const remainTicket=ticket_number-100;
    const remainTicketPrice=remainTicket*second100Price;
    const totalTicketPrice=first100+remainTicketPrice;
    return totalTicketPrice;
}
else{
    const first100=first100Price*100;
    const second100=second100Price*100;
    const remainTicket=ticket_number-200;
    const remainTicketPrice=remainTicket*restAllPrice;
    const totalTicketPrice=first100+second100+remainTicketPrice;
    return totalTicketPrice;

}
}
console.log(totalPrice_afterDiscount(150));