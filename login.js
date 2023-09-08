var err1=document.getElementById('erro1')
var err2=document.getElementById('erro2')
var form=document.getElementById('form')

var expun=''
var expPwd=''

form.addEventListener('submit',(e)=>{
e.preventDefault();


var untxt=document.getElementById('email').value
var pwdtxt=document.getElementById('password').value
un.value=``
pwd.value=``
if(untxt != expun){
    err1.innerText=`Please, enter correct username`
    err1.style.color='red';

}
if(pwdtxt != expPwd){
    err2.innerText=`Please, enter correct password`
    err2.style.color='red';
}
})