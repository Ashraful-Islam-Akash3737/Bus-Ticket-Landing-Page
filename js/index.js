const allSeatNo = document.getElementsByClassName('seat-no');

// const applyCoupon = document.getElementById('apply-coupon');
// applyCoupon.addEventListener('click', function (e) {
//     const inputCouponValue = getInnerValueById("coupon-input-field");
//     console.log('isi', inputCouponValue);
//     if (inputCouponValue === 'NEW15' || inputCouponValue === 'couple 20') {
//         const target = e.target;
//         console.log("is target" ,target);
//     } else {

//     }
// })
const inputCouponValue = document.getElementById("coupon-input-field");
inputCouponValue.addEventListener('keyup', function (e){
    if ((e.target.value === 'NEW15') || (e.target.value === "Couple 20")) {
        const applyCouponBtn = document.getElementById('apply-coupon');
        applyCouponBtn.removeAttribute('disabled', true);
        applyCouponBtn.classList.add('bgColorRed');
         console.log(typeof applyCouponBtn, "enable");
    }
    else{
        const applyCouponBtn = document.getElementById('apply-coupon');
        applyCouponBtn.setAttribute('disabled', true);
        console.log(typeof applyCouponBtn, "disable");
    }
})
function apply(){
    console.log('hello');
}

// -----------------


// function attribute() {
//     const deleteButton = document.getElementById('make-purchase');
//     const sumOfTotalPrice = getInputId('total-price');

//     if (sumOfTotalPrice > 0) {
//         deleteButton.removeAttribute('disabled');
//     }

//     else {
//         deleteButton.setAttribute('disabled', true);
//     }
// }

// --------------------


for (const seatNo of allSeatNo) {
    // console.log('clicked', seatNo);
    seatNo.addEventListener('click', function (e) {
        console.log('clicked');
        setValueById('total-available-seat', 1);
        setSeatValueById('total-selected-seat', 1);

        const targetIs = e.target;
        targetIs.classList.add('bgColor');
        // console.log(targetIs);

        // ----------------select ticket details-------------------------
        const selectSeatDetails = document.getElementById('select-seat-details');

        const newDiv = document.createElement('div');
        newDiv.classList.add('seat-details');

        const displaySeatDetails = e.target.innerText;
        const p = document.createElement('p');
        p.innerText = displaySeatDetails;

        const selectClassIs = document.createElement('p');
        selectClassIs.innerText = "Economy";
        const ticketPriceIs = document.createElement('p');
        ticketPriceIs.innerText = "550";
        // console.log(displaySeatDetails);
        newDiv.appendChild(p);
        newDiv.appendChild(selectClassIs);
        newDiv.appendChild(ticketPriceIs);

        selectSeatDetails.appendChild(newDiv);

        //---------------------total price----------------------
        // const ticketPrice = document.getElementById('ticket-price');
        // const ticketPriceText = ticketPrice.innerText;
        // const finalPrice = parseInt(ticketPriceText);
        const perTicketPrice = getInnerTextToNumber('ticket-price');
        console.log(perTicketPrice);
        setValueById('total-price', perTicketPrice);

        // -----------------------------------------------------
        const inputCouponValue = getInnerValueById("coupon-input-field");
        console.log('isi', inputCouponValue);
    })
}