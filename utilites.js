// case---------------
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;

    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}
function updateCasePrice(newCaseNumber){
    
    const newCaseElement = newCaseNumber * 59;
    const newCaseAmount = document.getElementById('case-total')
    newCaseAmount.innerText = newCaseElement;
}
// Phone------------------
function updatePhoneNumber(isIncreasePhone){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncreasePhone){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    
    const newPhoneElement = newPhoneNumber * 1219;
    const newPhoneAmount = document.getElementById('phone-total');
    newPhoneAmount.innerText = newPhoneElement;
}
// Calculate ---------------
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

