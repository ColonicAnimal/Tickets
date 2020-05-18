
//retrieve elements
const phantom = document.getElementById("phantom");
const hamilton = document.getElementById("hamilton");
const lionKing = document.getElementById("lionKing");
const missSaigon = document.getElementById("missSaigon");
const showTicketPrice = document.getElementById("showTicketPrice")
const eTicket = document.getElementById("eTicket");
const boxOffice = document.getElementById("boxOffice");
const post = document.getElementById("post");
const deliveryPrice = document.getElementById("deliveryPrice");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const book = document.getElementById("book");

//add listners

phantom.addEventListener("click", selectPhantom);
hamilton.addEventListener("click", selectHamilton);
lionKing.addEventListener("click", selectLionKing);
missSaigon.addEventListener("click", selectMissSaigon);
eTicket.addEventListener("click", selectETicket);
boxOffice.addEventListener("click", selectBoxOffice);
post.addEventListener("click", selectPost);
quantity.addEventListener("change", ticketQuantity);
book.addEventListener("click", calculateDiscount);





    let numberOfTicketsNeeded = 0; 
    let ticketPrice = 0; 
    let postagePrice = 0;
//functions
//show select functions

function selectPhantom() { 

  

    showTicketPrice.innerText= `Single Ticket Price is £79`;
    return ticketPrice =79;
    
}

function selectHamilton() {  

    showTicketPrice.innerText= `Single Ticket Price is £85`;
    return ticketPrice =85;
}

function selectLionKing() {  
    
    showTicketPrice.innerText= `Single Ticket Price is £67`;
    return ticketPrice = 67;
}

function selectMissSaigon() {  
    
    showTicketPrice.innerText= `Single Ticket Price is £83`;
    return ticketPrice = 83;
}

//postage select functions

function selectETicket() {  
    
    deliveryPrice.innerText= `eTickets are free of Charge`;
    return postagePrice = 0;
}
function selectBoxOffice() {  
    
    deliveryPrice.innerText= `Box Office collection is £1.50`;
    return postagePrice = 1.50;
}
function selectPost() {  
    
    deliveryPrice.innerText= `Postage is £3.99`;
    return postagePrice =  3.99;
}

//total price functions

function ticketQuantity() {
    return numberOfTicketsNeeded = parseInt(quantity.options[quantity.selectedIndex].value);
    
}

function calculateDiscount() {

    let preDiscountPrice = ticketPrice * numberOfTicketsNeeded;
    if (numberOfTicketsNeeded >= 10) {
        let postageMethod = document.getElementById("deliveryPrice").innerText;
        let discount = preDiscountPrice / 100 * 15;
        let discountedPrice = preDiscountPrice - discount;
        let finalPrice = discountedPrice + postagePrice;
        totalPrice.innerText =`You have ordered ${numberOfTicketsNeeded} at a price of £${ticketPrice} per ticket\nThe total cost of your tickets is £${preDiscountPrice.toFixed(2)} \nYour discount rate is 15%, your total discount is £${discount.toFixed(2)} \n${postageMethod} \n your total price is £${finalPrice.toFixed(2)}`;
        
    }

    else if (numberOfTicketsNeeded >=6) {
        let postageMethod = document.getElementById("deliveryPrice").innerText;
        let discount = preDiscountPrice / 100 * 10;
        let discountedPrice = preDiscountPrice - discount;
        let finalPrice = discountedPrice + postagePrice;
        totalPrice.innerText =`You have ordered ${numberOfTicketsNeeded} at a price of £${ticketPrice} per ticket\nThe total cost of your tickets is £${preDiscountPrice.toFixed(2)} \nYour discount rate is 10%, your total discount is £${discount.toFixed(2)} \n${postageMethod} \n your total price is £${finalPrice.toFixed(2)}`;
    }

    else  {
        let postageMethod = document.getElementById("deliveryPrice").innerText;
        let discount = 0;
        let discountedPrice = preDiscountPrice - discount;
        let finalPrice = discountedPrice + postagePrice;
        totalPrice.innerText = `You have ordered ${numberOfTicketsNeeded} tickets at a price of £${ticketPrice} per ticket. \nThe total cost of your tickets is £${preDiscountPrice.toFixed(2)} \n${postageMethod} \nYour total price is £${finalPrice.toFixed(2)}`;
    }
  
    
}


