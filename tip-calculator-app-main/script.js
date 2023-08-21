const bill=document.getElementById('bill');
const nPeople=document.getElementById('n-people');
const cTip=document.getElementById('cTip');
const tipAmt=document.querySelector('.tip-amt-val').lastElementChild;
const totalVal=document.querySelector('.total-val').lastElementChild;
const tips=document.querySelectorAll('.tip');
const reset=document.getElementById('reset-btn');

tipAmt.innerText=`$${(0.0).toFixed(2)}`;
totalVal.innerText=`$${(0.0).toFixed(2)}`;

/*-------------------------------------------------TIP-----------------------------------------------*/
tips.forEach((tip)=>{
    tip.addEventListener('click',()=>{
        tips.forEach((tip)=> tip.classList.remove('tip-active'))
        tip.classList.add('tip-active')
        cTip.value='';
         calculateTip();
    })
})
//Custom Tip
cTip.addEventListener('input',()=>{calculateTip()});
/*--------------------------------------------------BILL--------------------------------------------------*/
function getAmount(){
        const billVal=bill.value;
        if(!billVal || billVal=='0') setError(bill,"Enter the amount");
        else if(billVal<0) setError(bill,"Invalid amount");
        else{
            success(bill);
            if(!nPeople.value) nPeople.value = 1;
            calculateTip();
        }
}
/*--------------------------------------------------NO.OF.PEOPLE----------------------------------------*/
function getPeople(){
     const peopleNo=nPeople.value;
    if(!peopleNo || peopleNo=='0') setError(nPeople,"Can't be blank/0");
    else if(peopleNo<0) setError(nPeople,"Invalid");
    else{
        success(nPeople);
        calculateTip();
    }
}
/*---------------------------------------------------CALCULATION-------------------------------------*/
function calculateTip(){
            let tiVal=parseFloat(document.querySelector('.tip-active').innerText)/100;
            if(!tiVal) tiVal=0;
            if(cTip.value!='') tiVal=parseFloat(cTip.value)/100;
           const tVal=parseFloat(bill.value)*tiVal;
           //tip calculate
           const tipAt=tVal/parseInt(nPeople.value);
           tipAmt.innerText=`$${tipAt.toFixed(2)}`;
          //total calculate
           const total=(parseFloat(bill.value)+tVal)/parseInt(nPeople.value);
           totalVal.innerText=`$${total.toFixed(2)}`;
}
/*------------------------------------------------------RESET------------------------------------------*/
reset.addEventListener('click',()=>{
    bill.value="";
    nPeople.value="";
    cTip.value="";
    tips.forEach((tip)=> tip.classList.remove('tip-active'))
    tips[0].classList.add('tip-active');
    tipAmt.innerText=`$${(0.0).toFixed(2)}`;
    totalVal.innerText=`$${(0.0).toFixed(2)}`;
    success(bill);
    success(nPeople);
})
/*----------------------------------------------------EXTRAS-------------------------------------------*/
bill.addEventListener('input',getAmount);
nPeople.addEventListener('input',getPeople);

function setError(id,msg){
    const span=id.parentElement.parentElement.querySelector('span');
    span.classList.add('err');
    span.innerText=msg;
    id.style.borderColor='red';
}
function success(id){
    const span=id.parentElement.parentElement.querySelector('span');
    span.innerText='';
    id.style.borderColor='';
}