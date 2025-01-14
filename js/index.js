// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 //declaro una variable que dice donde trabajamos del html.
  let priceElem = product.querySelector(".price span");
 //declaro variable  que recoja el texto escrito en el html
  let priceNum = priceElem.innerHTML;
 // selecciono de donde quiero extraer los datos
  let quantityElem = product.querySelector(".quantity input");
 //declaro variable que coja los datos del value del input.
  let quantityNum = quantityElem.value;
 // declaro funcion que diga donde quiero actuar del html
  let subtotalElem = product.querySelector(".subtotal span");
 // declaro variable que recoja el texto del html tanto del price como del quantity y los multiplique
  let subtotalNum = priceNum * quantityNum;
 //digo que el texto del subtotal que tenemos en el html se sustituya por el que se da en subtotalNum
  subtotalElem.innerHTML = subtotalNum;
  return subtotalNum;
 
}

function calculateAll() {
  /*code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //Declaramos vairable con el total de subtotalNum y la vamos a buscar al html (cajita:)

  --> let totalElement = document.querySelector("#total-value span");

  // escribimos dentro de la cajita: el subtotal 

  --> totalElement.innerText = allSubtotalNum;
  
  // end of test*/

 // ITERATION 2
 let total = 0;
 let allProductsElem = document.querySelectorAll(".product");
 for (productos of allProductsElem){
   total += updateSubtotal(productos);
 }

  

  // ITERATION 3
  let totalElement = document.querySelector("#total-value span");
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
