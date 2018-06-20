// grab everything

const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const total = document.getElementById('total');


// create the function

let calculate = () => {
    let totalPrice = price.value * quantity.value;
    //console.log(quantity.value);  
    
    total.innerText = `$ ${totalPrice.toFixed(2)}`;
}

// start page - start function

calculate();

// add the event listener

price.addEventListener('input', calculate);
quantity.addEventListener('input', calculate);