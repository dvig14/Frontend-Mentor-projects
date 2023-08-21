const form=document.querySelector('form');
const dayInp=document.getElementById('day');
const monthInp=document.getElementById('month');
const yearInp=document.getElementById('year');
const button=document.getElementById('btn');

const dOpt=document.getElementById('DD');
const mOpt=document.getElementById('MM');
const yOpt=document.getElementById('YY');

form.addEventListener('submit',validate);

let date=new Date();
let day=date.getDate();
let month=1+date.getMonth();
let year=date.getFullYear();
let validator=false;
let validateD=false;
let validateM=false;
let validateY=false;
let daysArr=[31,28,31,30,31,30,31,31,30,31,30,31];

function validate(e){
    e.preventDefault();
    checkreq([dayInp,monthInp,yearInp]);
     if(validator==true && validateD==true && validateM==true && validateY==true){
        if(dayInp.value>day){
            day+=daysArr[month-1];
            month--;
            if(month<0){
                month=11;
                year--;
            }
        }
        if(monthInp.value>month){
            month+=12;
            year--;
        }
        const d=day-dayInp.value;
        const m=month-monthInp.value;
        const y=year-yearInp.value;
        dOpt.innerText=d;
        mOpt.innerText=m;
        yOpt.innerText=y;
     }
}
function checkreq(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim()==''){
            setError(input,'This field is required');
            validator=false;
        }
        else{
            leapyr(yearInp);
            validDay(dayInp);
            validMonth(monthInp);
            validYear(yearInp);
            validator=true;
        }
    })
}
function leapyr(input){
    if((input.value%4==0 && input.value%100!=0) || (input.value%400==0)){
       daysArr[1]=29;
    }
    else{
      daysArr[1]=28;
    }
}
function validDay(input){
    const dayVal=input.value.trim();
    if(dayVal<0 || dayVal>31 || dayVal>daysArr[(monthInp.value.trim())-1]){
        setError(input,'Must be a valid date');
        validateD=false;
    }
    else if(dayVal!=0){
        success(input);
        validateD=true;
    }
}
function validMonth(input){
    const monthVal=input.value.trim();
    if(monthVal<0 || monthVal>12){
        setError(input,'Must be a valid month');
        validateM=false;
    }
    else if(monthVal!=0){
        success(input);
        validateM=true;
    }
}
function validYear(input){
    const yearVal=input.value.trim();
    if(yearVal>year){
        setError(input,'Must be in the past');
        validateY=false;
    }
    else if(yearVal!=0){
        success(input);
        validateY=true;
    }
}
function setError(id,error){
    const card=id.parentElement;
    const span=card.lastElementChild;
    const name=card.firstElementChild;
    span.innerText=error;
    span.style.display='block';
    span.className='err-txt'
    id.style.borderColor='var(--Light-red)'
    name.style.color='var(--Light-red)'
}
function success(id){
    const card=id.parentElement;
    const span=card.lastElementChild;
    const name=card.firstElementChild;
    span.style.display='none';
    id.style.borderColor='';
    name.style.color='';
}
