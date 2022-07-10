const [login,password] = document.querySelectorAll('input')
const btn = document.querySelector('button')

function verificar(){
    if(login.value && password.value.length>=8){
        btn.removeAttribute('disabled')
        btn.classList.add('ativo')
    }else{
        btn.setAttribute('disabled','disabled')
        btn.classList.remove('ativo')
    }
}
login.addEventListener('input',verificar)
password.addEventListener('input',verificar)