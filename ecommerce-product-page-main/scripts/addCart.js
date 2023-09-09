
function addCart(){
     
    const cart = document.getElementById('addCart');

    function elementCreate(parent,eleType,reqNo){
        for(let i=0; i<reqNo; i++){
            const element = document.createElement(eleType);
            parent.appendChild(element);
            if(eleType == 'img') element.setAttribute('alt','');
        }
    }

    //Element1//
    elementCreate(cart,"div",2);

    const text = [...cart.children][0];
    text.classList.add('text');

    const cartBtns = [...cart.children][1];
    cartBtns.classList.add('cartBtns');

    text.innerHTML = "<p>Sneaker Company</p> <h2>Fall Limited Edition Sneakers</h2> <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>"
     
    const amnt = document.createElement('div');
    amnt.classList.add('amnt');
    amnt.innerHTML = "<p>$125.00</p> <p>50%</p> <p>$250.00</p>"
    text.appendChild(amnt);
    

    //Element2//
    elementCreate(cartBtns,'button',2);

    const itemsNum = [...cartBtns.children][0];
    itemsNum.id = 'items-num';

    //Element3//
    elementCreate(itemsNum,'img',2);
    
    const minusBtn = [...itemsNum.children][0];
    minusBtn.src = "images/icon-minus.svg";

    const numVal = document.createElement('span');
    numVal.innerText = '0';
    minusBtn.after(numVal);

    const plusBtn = [...itemsNum.children][2];
    plusBtn.src = "images/icon-plus.svg";

    const addToCart = [...cartBtns.children][1];
    addToCart.id = "add-to-cart";
    
    //Element4//
    elementCreate(addToCart,'img',1);
    const cartImg = [...addToCart.children][0];
    cartImg.src = 'images/icon-cart.svg';
    
    //Element5//
    elementCreate(addToCart,'p',1)
    const addCartText = [...addToCart.children][1];
    addCartText.innerText = "Add to cart";

    function itemsSelect(){
        let currVal = 0;
        plusBtn.addEventListener('click',()=>{
            numVal.innerText = ++currVal;
        }) 
        minusBtn.addEventListener('click',()=>{
            if(currVal>0){
             numVal.innerText = --currVal;
            }
        }) 
    }
   

    function commonElements(el,count=1,itemsNumAdded=1){
        const cartImg = document.querySelector(".cart");
        const elem = document.createElement(el);

        if(cartImg.classList.contains('is-active')){
            const container = document.querySelector('.cart-container');
            container.replaceChild(elem,[...container.children][1]);
            if(el == 'div' && count == 1 ) {
                cartContainer(elem,itemsNumAdded);
                count++;
            }
            else if(el == 'p') removeItemFromCart(elem);
        }

        cartImg.addEventListener('click',()=>{
          const checkContainer = document.querySelector("#img-slider").lastChild;
          const cont = document.querySelector('.cart-container');
           if(checkContainer.classList.contains('cart-container')){
              cont.replaceChild(elem,[...cont.children][1]);
              if(el == 'div' && count == 1 ) {
                cartContainer(elem,itemsNumAdded);
                count++;
              }
              else if(el == 'p') removeItemFromCart(elem);
           }
        })

    }


    function cartContainer(elm,val){

        const value = 125*val;

        elm.classList.add('item-add');
        elementCreate(elm,'div',1);
        elementCreate(elm,'button',1);

        const itemCont = elm.firstChild;
        elementCreate(itemCont,'img',2); 

        const itemImg = [...itemCont.children][0];
        itemImg.src = 'images/image-product-1-thumbnail.jpg';

        const itemAmnt = document.createElement('div');
        itemImg.after(itemAmnt);
        itemAmnt.innerHTML = `<p>Fall Limited Edition Sneakers</p> <p> $125.00 x ${val} <b> $${value}.00 </b> </p>`;

        const delItemBtn = [...itemCont.children][2];
        delItemBtn.src = 'images/icon-delete.svg';
        delItemBtn.addEventListener('click',()=>{
            commonElements('p');
            document.querySelector('.cart-avt').lastChild.remove();
        })
        
        const btn = elm.lastChild;
        btn.innerText = 'Checkout';
        btn.id = 'checkout';
        
    }

    function removeItemFromCart(elm){
        elm.innerText = 'Your cart is empty';
    }


    function addCartItems(){
        const cartI = document.querySelector('.cart-avt');
        const itemsVal = document.createElement('span');
        addToCart.addEventListener('click',()=>{
          if(cartI.lastChild != 'span' && numVal.innerText != '0'){
            cartI.appendChild(itemsVal);
            itemsVal.innerText = numVal.innerText;
            commonElements('div',1,itemsVal.innerText);
          }
          else if(numVal.innerText != '0'){
            itemsVal.innerText = numVal.innerText;
            commonElements('div',1,itemsVal.innerText);
          } 
          else {
            itemsVal.remove();
            commonElements('p');
          }
        })
    }

    itemsSelect();
    addCartItems();

}
addCart();