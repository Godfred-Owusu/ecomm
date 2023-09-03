var mainPic = document.querySelector('.main-shoe');
var subpic = document.querySelectorAll('.sub-pics img');
var buttons = document.querySelectorAll('.btn');
var quantity = document.querySelector('.quantity');
var cartButton = document.querySelector('.dot');
var cartNum = document.querySelector('.cartnum');
var cart = document.querySelector('.cart')
var mainPicClicked = document.querySelector('.main-shoe-clicked');
var subpicClicked = document.querySelectorAll('.sub-pics-clicked img');
var close = document.querySelector('.close');
var popup = document.querySelector('.bg-model');
var cartClicked = document.querySelector('.cart-clicked');
var cartValue = document.querySelector('.cart-value');
var amount = document.querySelector('.cart-value span');
var price = document.querySelector('.price').innerHTML;
var discount = document.querySelector('.discount').innerHTML;
var oldPrice = document.querySelector('.old-price').innerHTML;
console.log(discount);
console.log(oldPrice);
var count = 0;
// console.log(price);

  //console.log(cart);


  //Discount calculation
//   var discountCalc = oldPrice*discount;
//   console.log(discountCalc);

 
// Attribute of the main image
var mainImageLink = (mainPic.getAttribute('src'));


// Adding Eventlistener to the sub-pictures
for( let i = 0; i< subpic.length; i++){
    subpic[i].addEventListener('click' , function(){
        var Attr = this.getAttribute('src');
       mainPic.setAttribute('src', Attr)
    })

}

// Adding event listener to the main picture
mainPic.addEventListener('click', function(){
    popup.style.display = 'block';
})



// Adding event listener to the add and remove from cart button.

for(let i = 0; i< buttons.length; i++){
buttons[i].addEventListener('click' , function(e){
   
    var value = this.innerHTML;
//    the minus button
var newCount;
   if (value.includes('minus')){
    if (count == 0){
        quantity.innerHTML = 0; 
        
    }else
    quantity.innerHTML = --count;
        
   } else if (value.includes('plus')){
   quantity.innerHTML = count++;
   }
   quantity.innerHTML = count;
   newCount = count;
   
  //console.log(newCount);
   if (value.includes('cart')){
    if(newCount == 0){
        cartButton.style.display = 'none';
    }else{
        cartButton.style.display = 'block';
        cartNum.innerHTML = newCount;
    }
   }
})
}

// adding event Listener to the cart icon
cart.addEventListener('click' , function(){
   if (cartNum.innerHTML > 0){
    var originalPrice = eval(price*cartNum.innerHTML);
        amount.innerHTML = `${price} *  ${cartNum.innerHTML}  <b>$${originalPrice.toFixed(2) }</b>`; 
        cartValue.classList.toggle('none')
        if (cartNum.innerHTML == 0){
            cartClicked.classList.toggle('none')
        }
   }else{
    cartClicked.classList.toggle('none')
  
   }
})

//clicked picture
for( let i = 0; i< subpicClicked.length; i++){
    subpicClicked[i].addEventListener('click' , function(){
        var Attr = this.getAttribute('src');
       mainPicClicked.setAttribute('src', Attr)
    })

}

close.addEventListener('click', function(){
popup.style.display = 'none';
})

window.addEventListener('click' , function(e){
    if(e.target == popup){
        popup.style.display = 'none';
    }
    else if(e.target == cartClicked){
        cartClicked.style.display = 'none';
    }
   
 })

 window.addEventListener('click', function(e){
    if(e.target == cartValue){
        cartValue.style.display = 'none';
    }
 })
