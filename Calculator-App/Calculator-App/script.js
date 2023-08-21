const theme=document.querySelectorAll('.num');
const toggle=document.querySelector('.toggle');
const spans=document.querySelectorAll('span');
const header=document.querySelector('header');
const btnBg=document.querySelector('.Color-Change-btn');
const colorBtn=document.querySelector('.color-btn');
const display=document.querySelector('.display-result-inp');
const calBg=document.querySelector('.calculator-keys');
const keys=document.querySelectorAll('.okey');
const delClr=document.querySelectorAll('.del-clr');
const equalTo=document.querySelector('.output');


theme.forEach((num)=>{ 
   num.addEventListener('click',()=>{
       const numVal=parseInt(num.innerText);
       if(numVal==2) theme2();
       else if(numVal==3) theme3();
       else theme1();
   })
})

/*---------------------------------------------------THEME:1---------------------------------------------------*/
function theme1(){
    document.body.style.backgroundColor='hsl(222, 26%, 31%)';
    spans.forEach((span)=>span.className='s-theme1');
    header.className='h-theme1';
    toggle.className='toggle theme1';
    btnBg.className='Color-Change-btn CCb-theme1';
    colorBtn.className='color-btn Cb-theme1';
    display.className='display-result-inp Dr-theme1';
    calBg.className='calculator-keys Ck-theme1';
    keys.forEach((key)=>key.className='okey btheme1');
    delClr.forEach((DR)=>DR.className='del-clr d-r-theme1');
    equalTo.className='output otheme1';
}

/*---------------------------------------------------THEME:2---------------------------------------------------*/
function theme2(){
    document.body.style.backgroundColor='hsl(0, 0%, 90%)';
    spans.forEach((span)=>span.className='s-theme2');
    header.className='h-theme2';
    toggle.className='toggle theme2';
    btnBg.className='Color-Change-btn CCb-theme2';
    colorBtn.className='color-btn Cb-theme2';
    display.className='display-result-inp Dr-theme2';
    calBg.className='calculator-keys Ck-theme2';
    keys.forEach((key)=>key.className='okey btheme2');
    delClr.forEach((DR)=>DR.className='del-clr d-r-theme2');
    equalTo.className='output otheme2';
}

/*--------------------------------------------------------THEME:3----------------------------------------------------*/
function theme3(){
    document.body.style.backgroundColor='hsl(268, 75%, 9%)';
    spans.forEach((span)=>span.className='s-theme3');
    header.className='h-theme3';
    toggle.className='toggle theme3';
    btnBg.className='Color-Change-btn CCb-theme3';
    colorBtn.className='color-btn Cb-theme3';
    display.className='display-result-inp Dr-theme3';
    calBg.className='calculator-keys Ck-theme3';
    keys.forEach((key)=>key.className='okey btheme3');
    delClr.forEach((DR)=>DR.className='del-clr d-r-theme3');
    equalTo.className='output otheme3';
}

/*-------------------------------------------------------CALCULATIONS--------------------------------------------------*/
keys.forEach((key)=>{
     key.addEventListener('click',()=>{
         let keyVal=key.innerText;
         if(keyVal=='x') keyVal='*';
            display.value+=keyVal;
             if(display.value.match(/^[0-9\,\.]+$/)) display.value=displayScreen(display.value);
             else display.value=operator(display.value);
     })
})
function operator(value){
      for(let i=0;i<value.length;i++){
         if(value[i].match(/^[\+\-\*\/]+$/)){
            let ops=display.value.split(value[i]);
             ops= operatorNum(ops) 
             value= ops.join(value[i]);
         }
      }
    return value;
}
function operatorNum(op){
    for(let i=0;i<op.length;i++){
       const val=displayScreen(op[i]);
        op[i]=val;
     }
     return op;
}
/*------------------------------Screen--------------------------*/
function displayScreen(screen){
     if(screen.length>3){
        if(screen.match(/^[0-9\,]+$/)||(screen.match(/^[0-9\,-]+$/)&&screen<0)){
            screen=splitStr(screen.replaceAll(',',''));
        }
        else if(screen.match(/^[0-9\,\.]+$/)||(screen.match(/^[0-9\,\.-]+$/)&&screen<0)){
            const value=screen.split('.')
            screen=splitStr(value[0].replaceAll(',',''))+'.'+value[1];
        }
    }
    return screen;
}
function splitStr(val){
    const textSplit=val.split('');
    let count=0;
    let textArr=[];
       for(let i=textSplit.length-1;i>=0;i--){
           textArr.push(textSplit[i]);
           count++;
           if(count%3==0 && textSplit[i-1] && textSplit[i-1]!='-'){
             textArr.push(',');
           }
       }
       textArr=textArr.reverse('');
      return textArr.join('');
}

/*-------------------------------------Result(=)---------------------*/
equalTo.addEventListener('click',()=>{
        try{
            const clrInp=clearInput(display.value);
            const output=eval(clrInp);
            display.value=output;
            display.value=displayScreen(display.value);
        }
        catch(err){
            display.value='Error';
        }
        try{
            const inf=Infinity;
            if(display.value==inf ||display.value===`-${inf}`){
                throw ("Can't divide by 0")
            }
        }
        catch(err){
            display.value=err;
        }
})
function clearInput(inpVal){
    let inpArr=[]
    for(let i=0;i<inpVal.length;i++){
        if(inpVal[i].match(/^\,+$/)){
             continue;
        }
        inpArr.push(inpVal[i]);
    }
      return inpArr.join('');
}
/*-------------------------DELETE btn----------------------*/
delClr[0].addEventListener('click',()=>{
    if(display.value.match(/^[0-9\,\.]+$/)||display.value.match(/^[0-9\,]+$/)){
        display.value=displayScreen(display.value.substring(0,display.value.length-1));
    }
    else{
        display.value=display.value.substring(0,display.value.length-1);
        display.value=operator(display.value);
    }
})
/*---------------------------Reset btn----------------------*/
delClr[1].addEventListener('click',()=>{
    display.value='';
})
