const allSeatNo = document.getElementsByClassName('seat-no');




let clickedSeat = 0;
for (const seatNo of allSeatNo) {
    // console.log('clicked', seatNo);
    seatNo.addEventListener('click', function (e) {
        clickedSeat = clickedSeat + 1;
        if (clickedSeat <= 4) {
            setValueById('total-available-seat', 1);
            setSeatValueById('total-selected-seat', 1);

            const targetIs = e.target;
            targetIs.classList.add('bgColor');
            targetIs.setAttribute('disabled', true);

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
            newDiv.appendChild(p);
            newDiv.appendChild(selectClassIs);
            newDiv.appendChild(ticketPriceIs);

            selectSeatDetails.appendChild(newDiv);

            //---------------------total price----------------------
            const perTicketPrice = getInnerTextToNumber('ticket-price');
            setValueById('total-price', perTicketPrice);

            setValueById('grand-total', perTicketPrice);



        } else {
            alert('You can buy maximum 4 seat at once.')
        }
        
        
        
       



    })


}





const inputCouponValue = document.getElementById("coupon-input");
inputCouponValue.addEventListener('keyup', function (e) {
    if ((e.target.value === 'NEW15') || (e.target.value === "Couple 20")) {
        const applyCouponBtn = document.getElementById('apply-coupon');
        applyCouponBtn.removeAttribute('disabled', true);
    }
    else {
        const applyCouponBtn = document.getElementById('apply-coupon');
        applyCouponBtn.setAttribute('disabled', true);
    }
})

function apply() {
    const total = getInnerTextToNumber('total-price');
    const grandTotal = document.getElementById('grand-total');

    const grandTotalNumber = getInnerTextToNumber('grand-total');
    const couponInput = document.getElementById('coupon-input').value;
    if (couponInput === "NEW15") {
        const newTotal = total * (15 / 100);
        grandTotal.innerText = total - newTotal;

        const discountContainer = document.getElementById('discount-container');

        let p = document.createElement('p');
        p.innerText = "Discount Is:";

        let p2 = document.createElement('p');
        p2.innerText = newTotal;

        discountContainer.appendChild(p);
        discountContainer.appendChild(p2);
        discountContainer.classList.add("discount");
    }
    if (couponInput === "Couple 20") {
        const newTotal = total * (20 / 100);
        grandTotal.innerText = total - newTotal;

        const discountContainer = document.getElementById('discount-container');

        let p = document.createElement('p');
        p.innerText = "Discount Is:";

        let p2 = document.createElement('p');
        p2.innerText = newTotal;

        discountContainer.appendChild(p);
        discountContainer.appendChild(p2);
        discountContainer.classList.add("discount");
    }
    const inputCouponField = document.getElementById("coupon-input-field");
    inputCouponField.classList.add('hidden');





}


const mobileNumberInputField = document.getElementById('phone-number');
mobileNumberInputField.addEventListener('keyup', function (event) {
    const phoneNumber = event.target.value;
    const nextButton = document.getElementById('next');
    const seatSelect = getInnerTextToNumber('total-selected-seat');
    console.log("seat selected",seatSelect);

    if ((phoneNumber.length >= 0) && (seatSelect >= 1)) {
        const nextButton = document.getElementById('next');
        nextButton.removeAttribute('disabled');
        console.log('enable')
    }
    else {
        const nextButton = document.getElementById('next');
        nextButton.setAttribute('disabled', true);
        console.log('disable')
    }
})



