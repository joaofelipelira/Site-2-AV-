function cadastrarItem(event) {
    event.preventDefault(); 

 
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;


    if (nome.trim() === '' || descricao.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

 
    const novoItem = {
        nome,
        descricao
    };

    let itens = JSON.parse(localStorage.getItem('itens')) || [];

   
    itens.push(novoItem);

    
    localStorage.setItem('itens', JSON.stringify(itens));


    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';

   
    exibirItens();
}


function exibirItens() {
    const listaItens = document.getElementById('listaItens');
    listaItens.innerHTML = ''; 


    const itens = JSON.parse(localStorage.getItem('itens')) || [];

  
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome}: ${item.descricao}`;
        listaItens.appendChild(li);
    });
}


document.getElementById('cadastroForm').addEventListener('submit', cadastrarItem);


exibirItens();


const navbar = document.querySelector(".navbar");
const menuButtom = document.querySelector(" .menu-button")

menuButtom.addEventListener("click", () => {
        navbar.classList.toggle("show-menu");
});


const itens = [
    { nome: 'Item 1', descricao: 'Descrição do Item 1' },
    { nome: 'Item 2', descricao: 'Descrição do Item 2' },

];


localStorage.setItem('itens', JSON.stringify(itens));

const itemsString = localStorage.getItem('itens');


if (itemsString) {
    const itemList = JSON.parse(itemsString);


    const listaItens = document.getElementById('listaItens');


    itemList.forEach(item => {
        const li = document.createElement('li');

        li.textContent = `Nome: ${item.nome}, Descrição: ${item.descricao}`;
        listaItens.appendChild(li);
    });
} else {

    const listaItens = document.getElementById('listaItens');
    listaItens.innerHTML = '<li>Nenhum item cadastrado</li>';
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ul');
    const navLinks = document.querySelectorAll('.nav-ul li');
   
    burger.addEventListener('click', () => {
 
       nav.classList.toggle('nav-active');
   

       navLinks.forEach((link, index) => {
         link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
       });
       
       burger.classList.toggle('toggle');
    });
   }
