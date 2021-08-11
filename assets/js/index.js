// ABRE E FECHA O MENO QUANDO CLICAR NO ÍCONE

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for ( const element of toggle ){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

// DEIXAR O HEADER FIXO QUANDO ROLA O SCROLL

const header = document.querySelector('#header');

window.addEventListener('scroll', function(){
  let getScrollposition = window.scrollY;

  if(getScrollposition > 10){
    header.style.position = 'fixed'
    header.style.background = '#FFF'
    header.style.borderBottom = '1px solid rgb(248,248,248)'
  }else{
    header.style.position = 'relative';
    header.style.background = 'transparent'
    header.style.border = '0'
  }
})

// FORMULÁRIO   

const validForm = function(event){

    var inputName = document.querySelector('#name');
    var inputPhone = document.querySelector('#phone');
    var inputEmail = document.querySelector('#email');
    var inputMessage = document.querySelector('#message');

    if(inputName.value === ""){
        alert("Preencha seu nome!");
        inputName.focus(inputName);
        return false;
    }

    if(inputPhone.value === ""){
        alert("Preencha seu Telefone!");
        inputPhone.focus(inputPhone);
        return false;
    }

    if(inputEmail.value === ""){
        alert("Preencha seu email!");
        inputEmail.focus(inputEmail);
        return false;
    }

    if(inputMessage.value === ""){
        alert("Preencha a mensagem!");
        inputMessage.focus(inputMessage);
        return false;
    }

    alert("Mensagem enviada!")
}