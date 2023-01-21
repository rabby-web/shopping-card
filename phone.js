document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhonePrice(newPhoneNumber);
    // calculate
    const currentPhoneTotal = document.getElementById('phone-total');
    const currentCaseTotal = document.getElementById('case-total');
    const totalPrice = currentPhoneTotal + currentCaseTotal;
    const subElement = document.getElementById('sub-total');
    subElement.innerText = totalPrice;
    
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhonePrice(newPhoneNumber);
})