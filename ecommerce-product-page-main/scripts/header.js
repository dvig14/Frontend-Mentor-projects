
function header(){

   const header = document.querySelector('header'); 

   const div1 = document.createElement('div');
   const div2 = document.createElement('div');
 
   div1.setAttribute('class',"menu-logo");
   div2.setAttribute('class',"cart-avt");


   function menuLogo(){
      const menuBtn = document.createElement('img');
      menuBtn.src = "images/icon-menu.svg";
      menuBtn.setAttribute('alt',"");
      menuBtn.id = 'menuBtn';
     
      const logo = document.createElement('img');
      logo.src = "images/logo.svg";
      logo.setAttribute('alt',"");

      const nav = document.createElement('nav');
      nav.setAttribute('role','navigation');
     
      div1.appendChild(menuBtn);
      div1.appendChild(logo);
      div1.appendChild(nav);
      navbar(nav);

      
      function openNav(){
         
         nav.style.display = "block";

         overlay.className = 'sidenav-overlay';
         header.after(overlay);
         
         const closeBtn = menuBtn;
         closeBtn.src = "images/icon-close.svg";
         closeBtn.id = "closeBtn";

      }

      function closeNav(){

         nav.style.display = "none";
         overlay.remove();
      
         menuBtn.src = "images/icon-menu.svg";
         menuBtn.id = 'menuBtn';

      }
      
      const overlay = document.createElement('div');

      menuBtn.addEventListener('click',()=>{

         if(menuBtn.id == "menuBtn") openNav();
         else closeNav();
            
      })

      /*----------------------------MEDIA QUERY--------------------------*/
      const mediaQuery = window.matchMedia('(min-width:800px)');
      function myfunc(e){
         if(e.matches){
            nav.style.display = "block";
            overlay.remove();
         }
         else{
           closeNav();
         }
      }
 
      myfunc(mediaQuery);
      mediaQuery.addListener(myfunc);
      /*-----------------------------------------------------------------*/ 

   }


   function imgs(){

      const cartImg = document.createElement('img');
      cartImg.src = "images/icon-cart.svg";
      cartImg.setAttribute("alt","cart");
      cartImg.classList.add('cart')

      function showCart(sliderImg,cart){

         sliderImg.appendChild(cart); 
         cart.setAttribute('class',"cart-container");

         for(let i=1; i<=2; i++){
            const text = document.createElement('p');
            cart.appendChild(text);
         }
         cart.firstChild.innerText = "Cart";
         cart.lastElementChild.innerText = "Your cart is empty";

      }

      function hideCart(sliderImg){
         sliderImg.querySelector('.cart-container').remove();
      }

      cartImg.addEventListener('click',()=>{

         const sliderImg = document.getElementById('img-slider');
         const cart = document.createElement('div');
             
         cartImg.classList.toggle('is-active');
         if(cartImg.classList.contains('is-active')) showCart(sliderImg,cart);
         else hideCart(sliderImg);

      })

      const avtar = document.createElement('img');
      avtar.src = "images/image-avatar.png";
      avtar.setAttribute('alt',"avtar");

      div2.appendChild(cartImg);
      div2.appendChild(avtar);

   } 

   
   function navbar(nav){

     const itemsArr = ["Collections", "Men", "Women", " About", "Contact"];

     for(let i=0 ; i<itemsArr.length ; i++){
       const itemLink = document.createElement('a');
       nav.appendChild(itemLink);
       itemLink.innerText = itemsArr[i];
       itemLink.setAttribute('href',`#${itemLink.innerText}`);
     }

   }


   header.appendChild(div1);
   menuLogo();
   header.appendChild(div2);
   imgs();

}

header();