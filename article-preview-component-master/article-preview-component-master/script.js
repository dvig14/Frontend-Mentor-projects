const sharebtn=document.querySelector('.btn');
const share=document.querySelector('.share');

sharebtn.addEventListener("click",()=>{
    if(share.classList.contains('hidden')){
        share.classList.toggle('hidden');
        sharebtn.style.marginTop="1rem";
        sharebtn.style.background="hsl(210, 46%, 95%)";
    }
    else{
        sharebtn.style.marginTop="0";
        share.classList.add('hidden');
    }
})