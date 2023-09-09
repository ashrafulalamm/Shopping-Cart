function updateProductInput(product, inCreasing, price) {
    const inputField = document.getElementById( product + '-number');
     let inputNumber = inputField.value;

    if(inCreasing) {
        inputNumber = parseInt(inputNumber) + 1;
    } else if (inputNumber > 0) {
          inputNumber = parseInt(inputNumber) - 1;
    }

    const updateTotal = document.getElementById(product + '-total');
    updateTotal.innerText = inputNumber * price;
 

   inputField.value = inputNumber;
   calculateTotal()

}

function getProductInput(productId) {
    const productInput = document.getElementById(productId + '-number');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}

function calculateTotal(){
    const phoneAmount = getProductInput('phone') * 1000;
    const caseAmount = getProductInput('case') * 20;
    const subTotal = phoneAmount + caseAmount;
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = grandTotal;
}












document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductInput('phone', true, 1000)
    
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductInput('phone', false, 1000)
    
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductInput('case', true, 20)
    
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductInput('case', false, 20)
    
})