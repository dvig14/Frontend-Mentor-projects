const generateBtn = document.getElementById('generate-btn');
const chkBoxs = document.querySelectorAll('.chk');
const boxes = document.querySelector('.chkboxes');
const passWord = document.querySelector('.password').firstElementChild;
const options = document.querySelector('.options');
const charLength = document.getElementById('slider')
const copyBtn = document.querySelector('i');

chkBoxs.forEach((chk) => {
    
    chk.addEventListener('click', () => chk.classList.toggle('active'))
    
})

function Length (){

    const len = document.querySelector('label').querySelector('span');
    charLength.addEventListener('input',(e) => {
        
        len.innerText = e.target.value

        const min = e.target.min;
        const max = e.target.max;
        const val = e.target.value;
        
        e.target.style.backgroundSize = `${((val - min) * 100) / (max - min)}% 100%`

    })
    return len.innerText ;

}
Length();

const generatePassword = () => {

    let charset='';
    let generatedPassword='';

    const activeChkBoxes = [...boxes.children].filter((child) => child.querySelector('input').classList.contains('active'));

    activeChkBoxes.map((bx) =>{

        const chkBoxName = bx.firstElementChild.getAttribute('id');

        switch(chkBoxName){

            case "uppercase" : charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
            case 'lowercase' : charset += "abcdefghijklmnopqrstuvwxyz"; 
            break;
            case 'numbers' : charset += "0123456789";
            break;
            case 'symbols' : charset += '!@#$%^&*~|/';
            break;
            default:
            break;

        }

    })
    
    const len = Length();

    if(len != 0 && activeChkBoxes.length != 0){

      for(let i=0; i<len ;i++){

        const letters = charset[Math.floor(Math.random()*charset.length)];
        generatedPassword += letters;

      }

      return {generatedPassword,activeChkBoxes,len};

    }

    else if(activeChkBoxes.length != 0 && len == 0){
        removeErr();
        setError('Please Select Character length')
    }

    else { 
        removeErr();
        setError('Please Select atLeast 1 option')
    }

}

function removeErr(){
    const p = document.getElementById('err-txt')
    if(options.contains(p)) p.remove();
}

function setError(errMsg) {

    if(options.lastElementChild.innerText != errMsg){

        const errTxt = document.createElement('p');
        options.appendChild(errTxt);
        errTxt.innerText = errMsg;
        errTxt.setAttribute('id','err-txt');
    
    }

}

function strength(passInp,bars,str,len){

    bars.forEach((bar)=>bar.style.backgroundColor='')

    function barClr(index,color,name){

        for(let i=0 ; i<=index ; i++){

            bars[i].style.backgroundColor = color;
            
        }
        
        str.innerText = name;
        str.style.color = color;

    }
    
    if(passInp.length == 1 || len < 10) barClr(0,'var(--red)','WEAK');
    else if(passInp.length == 2 || len <= 10) barClr(1,'var(--orange)','BETTER');
    else if(passInp.length == 3 || (len > 10 && len <= 13)) barClr(2,'var(--yellow)','MEDIUM');
    else if(passInp.length == 4 || len >= 14) barClr(3,'var(--neonGreen)','STRONG');

}

copyBtn.addEventListener('click',()=>{
    
    const copy = document.getElementById('copied');
    copy.style.color = 'var(--neonGreen)'
    copy.style.fontSize = '0.8rem'
    copy.style.marginLeft = '6rem'
     
    if(passWord.style.color === "white"){
      copy.innerText = 'copied';
      setTimeout(()=>{
        copy.innerText = '';
      },1000)
      navigator.clipboard.writeText(passWord.innerText)
    }

});

generateBtn.addEventListener('click', () => {

    const bars = document.querySelectorAll('.bar');
    const str = document.querySelector('.strength').querySelector('#str-type');

    try{

        const passwordInput =  generatePassword();
        passWord.innerText = passwordInput.generatedPassword;
        passWord.style.color = "white";

        strength(passwordInput.activeChkBoxes,bars,str,passwordInput.len);
        
        removeErr();

    }
    catch(e){
        console.log(e);
        passWord.style.color = '';
        str.innerText = '';
        bars.forEach((bar)=>bar.style.backgroundColor='');

    }

})

