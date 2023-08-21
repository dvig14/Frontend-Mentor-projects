const cName=document.getElementById('name');
const cNumber=document.getElementById('card-num');
const mm=document.getElementById('month');
const yy=document.getElementById('year');
const cvc=document.getElementById('cvc-inp');
const form=document.querySelector('form');

form.addEventListener('submit',validate);
function validate(e){
    e.preventDefault();
    const input=document.querySelectorAll('input');
    checkreq(input);
}
function checkreq(input){
    input.forEach((input)=>{
        if(!input.value){
          setError(input,"Can't be blank")
        }
    })
}
/*---------------------------------------NAME--------------------------------------*/
                                   // setName //
cName.addEventListener('input',()=>{
    cName.value = fstCapt(cName.value);
    if(cName.value.match(/^[A-Za-z\s/]+$/)){
      const cNam=document.getElementById('nam');
       cNam.innerText = cName.value;
       success(cName)
    }
    else if(cName.value!=""){
        setError(cName,'Only letters')
    }
})
                                   // fCaptial //
 function fstCapt(name){
    let namArr=name.split(" ");
    for(let i=0;i<namArr.length;i++){
            namArr[i]=namArr[i].charAt(0).toUpperCase()+namArr[i].slice(1);
    }
 return namArr.join(" ");
 }
/*--------------------------------------NUMBER------------------------------------*/
                                   // setNum //
cNumber.addEventListener('input',()=>{
    cNumber.value=splitNum(cNumber.value.replaceAll(" ",""));
    cNumber.value=cNumber.value.substring(0,19);
    const reg=cNumber.value.match(/^[0-9\s]+$/);
    const cNum=document.getElementById('c-num');
    if(cNumber.value.length!=19 && reg){
        cNum.innerText = cNumber.value;
        setError(cNumber,'16 values req');
    }
    else if(reg){
        cNum.innerText = cNumber.value;
         success(cNumber);
    }
    else{
        setError(cNumber,'Wrong format,numbers only');
     }
})
                                     // splitNumber //
function splitNum(num){
    let numArr=num.split("");
    let newArr=[];
    for(let i=0;i<numArr.length;i++){
        if(i!=0 && i%4==0){
            newArr.push(" ");
        }
        newArr.push(numArr[i]);
    }
    return newArr.join("");
}
/*----------------------------------------EXPDATE && CVC---------------------------------*/
                                   // month //
 mm.addEventListener('input',()=>{
    mm.value=mm.value.substring(0,2);
     if(mm.value<=12 && mm.value!=0){
        const mnth=document.getElementById('mnth');
       mnth.innerText=(mm.value.length==1)?`0${mm.value}`:mm.value;
       success(mm);
     }
     else if(mm.value!=""){
        setError(mm,"Invalid month")
     }
 })                          
                                  // year //
 yy.addEventListener('input',()=>{
    yy.value=yy.value.substring(0,2);
     if(yy.value.length<2){
        setError(yy,"Invalid year");
     }
     else if(yy.value[0]<2 || yy.value[1]<3){
        setError(yy,"Must be 23 or above");
     }
     else{
      const yr=document.getElementById('yr');
       yr.innerText=yy.value;
       success(yy);
     }
 }) 
                                       // cvc //
 cvc.addEventListener('input',()=>{
    cvc.value=cvc.value.substring(0,3);
     if(cvc.value.length==3 && cvc.value!=0){
      const cv=document.getElementById('cvc');
       cv.innerText=cvc.value;
       success(cvc);
     }
     else{
        setError(cvc,"Must be of 3 digits")
     }
 })                                   
/*------------------------------------------ERR/SUCC------------------------------*/
function elements(id){
    const card=id.parentElement;
    let errfield=card.querySelector('span');
    if(card.classList.contains('time')){
       const card2=card.parentElement;
       errfield=card2.querySelector('span');
    }
    return errfield;
}
                                     //check error msg//
function setError(id,errMsg){
     const val= elements(id);
    val.classList.add('err');
     val.innerText=errMsg;
    id.style.borderColor='var(--Red)';
}
                                       //check success//
function success(id){
   const val1=elements(id)
   val1.classList.remove('err');
    val1.innerText='';
   id.style.borderColor='';
}