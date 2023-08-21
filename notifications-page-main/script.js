(function(){
const unseenMsg=document.querySelectorAll('.new-msg');
const notifyNums=document.getElementById('notify-numbers');
const markRead=document.getElementById('mark-all-read');
const showMsg=document.getElementById('show-msg');

notifyNums.innerText=unseenMsg.length;
unseenMsg.forEach((msg)=>{
      msg.addEventListener('click',()=>{
        msg.classList.remove('new-msg');
        const newunseenMsg=document.querySelectorAll('.new-msg');
        notifyNums.innerText=newunseenMsg.length;
      })
})

markRead.addEventListener('click',()=>{
  notifyNums.innerText='0';
  unseenMsg.forEach((msg)=>msg.classList.remove('new-msg'));
  show();
})
function show(){
  showMsg.classList.add('active')
}
showMsg.addEventListener('click',show)
}());