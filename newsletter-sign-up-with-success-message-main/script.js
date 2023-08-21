const form=document.querySelector('form');
const email=document.querySelector('input');
const sButton=document.getElementById('success-btn');
const dButton=document.getElementById('dismiss-btn');

form.addEventListener('submit',validate);
sButton.addEventListener('click',validate);
dButton.addEventListener('click',()=>{
    location.reload();
});

function validate(e){
    e.preventDefault();
    const emailVal=email.value.trim();
    if(emailVal==''){
        setError(email,'Email is required')
    }
    else if(!isEmail(emailVal)){
        setError(email,'Valid email is required')
    }
    else{
        success(email);
    }
}
function setError(id,error){
      const card=id.parentElement;
      const span=card.querySelector('#txt').lastElementChild;
      span.innerText=error;
      span.className='err'; 
      id.className='err-txt';
      span.style.display='block';
      id.style.background='hsla(0, 96%, 64%,0.3)';
}
function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function success(id){
    id.className='success';
    const card=id.parentElement;
      const span=card.querySelector('#txt').lastElementChild;
      span.style.display='none';
    const grandParent=card.parentElement;
    const garndsParent=grandParent.parentElement;
    const successCard=document.querySelector('.wrapper-2');
    setTimeout(()=>{
         garndsParent.classList.add('hidden');
         successCard.classList.remove('hidden');
    },800);
    const text=successCard.querySelector('b');
    text.innerText=id.value.trim();
    id.style.background='#fff';
}