document.querySelector('#t1').textContent='JavaScritp';

function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.backgroundColor = cor;
}