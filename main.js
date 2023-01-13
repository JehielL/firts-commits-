//Carrito
let cartIcon = document.querySelector("#shopping-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
cartIcon.onclick = () => {
    cart.classList.add('active');
};
/* Cerrar carrito*/
closeCart.onclick = () => {
    cart.classList.remove('active');
    
}

//*funcion de carrito *//


if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready (){
    //remover productos de carrito//
    var buttonRemoveCart = document.getElementsByClassName("cart-remove")
    console.log(buttonRemoveCart)
    for (var i= 0; i<buttonRemoveCart.length; i++){
        var button = buttonRemoveCart[i]
        button.addEventListener("click", buttonRemoveItem )

    }


}

//agregar al carrito//
var addCart = document.getElementsByClassName("add-cart")
for (var i=0 ; i <addCart.length; i++){
    var button = addCart[i]
    button.addEventListener("click", addCartClicked)
}

function buttonRemoveItem (event){
    var buttonClick = event.target
    buttonClick.parentElement.remove ()
    updatetotal();
}
//actualizar cambio final// <

var quantityInputs = document.getElementsByClassName ("cart-quantity")
for (var i = 0; i<quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged);
}
//cambio de cantidades//


function quantityChanged(event){
    var input = event.target 
    if (isNaN(input.value)|| input.value <=0) {
        input.value = 1 

    }
    updatetotal()
}

//*Agregar al carrito*//
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price  = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg  = shopProducts.getElementsByClassName("product-img")[0].src; 
    addProductToCart(title,price, productImg);
    updatetotal();  
}
function addProductToCart (title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName ("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i< cartItemsNames.length; i++);
        if (cartItemsNames[i].innerText == title) {
            alert("Ya tienes este producto agregado al carrito");
            }
}
var cartBoxContent =  
cartShopBox.innerText = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.
getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem)
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged) 

//*Actualizar Total*/



function updatetotal(){
        var  cartContent = document.getElementsByClassName ("cart-content") [0];
        var cartBoxes = cartContent.getElementsByClassName ("cart-box");
        var total = 0;
        for ( var i = 0; i <cartBoxes.length; i++){
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName ("cart-price")[0];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            var price = parseFloat(priceElement.innerText.replace("$",""));
            var quantity = quantityElement.value; 
            total = total + (price * quantity);
            total = Math.round(total*100) / 100;
            
            document.getElementsByClassName("total-price")[0].innerText = "$" + total; 
        }
    }
//*Funcion boton de compra**//


document.getElementsByClassName("buy-bottom")[0]
.addEventListener("click", buyButtonClicked);

//**boton de compra**//

function buyButtonClicked(){
    alert('Tu pedido a sido realizado con exito.');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
}
}