
function productImgs(){
   
    const slider = document.getElementById('img-slider');
    

    function sliderImgs(nxtBtn,prvBtn,img){

      function showImg(cnt){
        img.src = `images/image-product-${cnt}.jpg`;
        img.setAttribute('alt',`product-${cnt}`);
      }

      let count = 1;
      nxtBtn.addEventListener('click',()=>{
        if(count<4) showImg(++count);
        else count=0;
      })
      prvBtn.addEventListener('click',()=>{
        if(count>1) showImg(--count);
        else count=5;
      })

    }


    function mobileView(){

      const imgMobile = document.createElement('img');
      slider.appendChild(imgMobile);
      imgMobile.src = `images/image-product-1.jpg`;
      imgMobile.setAttribute('alt',"product-1");

      for(let i=0; i<2; i++){
        const button = document.createElement('button');
        const btnImg  = document.createElement('img');
        slider.appendChild(button);
        button.appendChild(btnImg);
        btnImg.setAttribute('alt',"");
      }
      
      const nxtBtn = [...slider.children][1];
      nxtBtn.id = "nxtBtn";
      nxtBtn.firstChild.src = "images/icon-next.svg";

      const prvBtn = [...slider.children][2];
      prvBtn.id = "prvBtn";
      prvBtn.firstChild.src = "images/icon-previous.svg";;

      sliderImgs(nxtBtn,prvBtn,imgMobile);

    }


    function createThumbnail(thumbnails){
        for(let i=1; i<=4; i++){
            const thumbnail = document.createElement('img');
            thumbnail.src = `images/image-product-${i}-thumbnail.jpg`;
            thumbnail.setAttribute('class','thumImg');
            thumbnails.appendChild(thumbnail);
          } 
    }


    function desktopView(){

       const thumbnails = document.createElement('div');
       slider.appendChild(thumbnails);
       thumbnails.classList.add("thumbnails");
       createThumbnail(thumbnails);

       thumbnails.firstElementChild.classList.add('active');
       thumbnails.firstElementChild.style.border="2px solid var(--Orange)";

       //Function for desktop slider//
       function deskslider(overlay,closeBtn){

        const deskSlider = document.createElement('div');
        deskSlider.classList.add("desktop-slider");
        overlay.after(deskSlider);

        const imgDesktop = document.createElement('img');
        imgDesktop.src = `images/image-product-1.jpg`;
        imgDesktop.setAttribute('alt',"product-1");

        const sliderImg = document.createElement('div');
        const nxtdeskBtn = document.createElement('img');
        const prvdeskBtn = document.createElement('img');
         
        createThumbnail(sliderImg);
        sliderImg.setAttribute('class',"thumbnails slider-thumbnails");
        sliderImg.firstElementChild.classList.add('active');
        sliderImg.firstElementChild.style.border="2px solid var(--Orange)";

        nxtdeskBtn.src = "images/icon-next.svg";
        nxtdeskBtn.setAttribute('alt',"");
    
        prvdeskBtn.src = "images/icon-previous.svg";
        prvdeskBtn.setAttribute('alt',"");

        deskSlider.appendChild(closeBtn);
        deskSlider.appendChild(imgDesktop);
        deskSlider.appendChild(prvdeskBtn);
        deskSlider.appendChild(nxtdeskBtn);
        deskSlider.appendChild(sliderImg);
         
        sliderImgs(nxtdeskBtn,prvdeskBtn,imgDesktop);

        function slidethumbnail(e){
           let index = [...sliderImg.children].indexOf(e.target);
           imgDesktop.src = `images/image-product-${++index}.jpg`;
           imgDesktop.setAttribute('alt',`product-${index}`);
        }

        const sliderthumImg = document.querySelector('.slider-thumbnails').querySelectorAll('img');
        sliderthumImg.forEach((img)=>{
          img.addEventListener('click',slidethumbnail);
        })
        
        closeBtn.addEventListener('click',()=>{
          deskSlider.remove();
          overlay.remove();
          thumImg.forEach((img)=>img.classList.remove('active'))
        })

      }

      const thumImg = document.querySelectorAll('.thumImg');
      thumImg.forEach((img)=>{
        img.addEventListener('click',()=>{

          const header = document.querySelector('header');

          const overlay = document.createElement('div');
          overlay.className = 'desktop-overlay';
          img.classList.toggle('active');

          const closeBtn = document.createElement('img');
          closeBtn.src = "images/icon-close.svg";
          closeBtn.setAttribute('alt','');
          closeBtn.setAttribute('id','close-deskSlider')
          
          header.after(overlay);
          deskslider(overlay,closeBtn);

        })
      })

    }

  mobileView();
  desktopView();
}
productImgs();