function getPin(){
    const pin = generatePin();
    const pinString = pin + "";
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click",function(){
    const pin = getPin();

    const displayPinField = document.getElementById("display-pin");
     displayPinField.value = pin;
})

document.getElementById("calculator").addEventListener("click",function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById("typed-number");
    const previousTypedNumber = typeNumberField.value;
    if(isNaN(number)){
            if(number === "C"){
                typeNumberField.value = ""
            }
            else if(number === "<"){
                const digit = previousTypedNumber.split("");
                digit.pop();
                const remainingDigits = digit.join("");
                typeNumberField.value = remainingDigits

            }
    }
    else{
       
        
        const newTypedNumber = previousTypedNumber + number;
        typeNumberField.value = newTypedNumber;
    }
        console.log(event.target.innerText)
})

document.getElementById("verify-pin").addEventListener("click",function(){
    const generatePin = document.getElementById("display-pin");
    const getGeneratePin = generatePin.value;

    const typedPinField = document.getElementById("typed-number");
    const getTypedPin = typedPinField.value;

    const pinSuccess = document.getElementById("pin-success");
    const pinFail = document.getElementById("pin-fail");

    if(getGeneratePin ===  getTypedPin){
        
        pinSuccess.style.display = "block";
        pinFail.style.display = "none"
    }
    else{
       
        pinFail.style.display = "block"
        pinSuccess.style.display = "none";
    }

})