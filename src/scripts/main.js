document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button');
    const questions = document.querySelectorAll('[data-faq-question]');
    //se tienen que usar corchetes para seleccionar un atributo
    const heroSection = document.querySelector('.hero');
    const clientHeight = heroSection.clientHeight;
    //para seleccionar la altura usamos la propiedad clientHeight
window.addEventListener('scroll', function(){
    const posicaoAtual= window.scrollY;
    if (posicaoAtual < clientHeight){
        hideHeaderElements();
    } else{
        showHeaderElements();
    }
});
    //Section shows, programacao das abas
    for (let i= 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeActive();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
    //section faq, abre e fecha resposta
    for(let i = 0; i < questions.length ; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})
function abreOuFechaResposta(elemento){
    const classe= 'faq__questions__item--is-open';
    console.log(elemento);
    const fatherElement = elemento.target.parentNode;

    fatherElement.classList.toggle(classe);
}

function removeActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i=0; i< buttons.length;i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
        
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
function showHeaderElements(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}
function hideHeaderElements(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}