let foodContainer= document.querySelector('.food-container')

const food = 
[
{
    nome: "Tagliere di salumi",
    prezzo: "12$",
    foodimg: 'img/salumi.jpg',
    tipo: "antipasto",
    des: "Tagliere di salumi nostrani"
},

{
    nome: "Tagliere di formaggi",
    prezzo: "10$",
    foodimg: 'img/formaggi.jpg',
    tipo: "antipasto",
    des: "Tagliere di formaggi locali"
},

{
    nome: "Orecchiette al sugo",
    prezzo: "10$",
    foodimg: 'img/orecchiette.jpg',
    tipo: "primo",
    des: "Orecchiette fatte a mano con farina Senatore Cappelli e sugo al pomodoro"
},

{
    nome: "Fave e cicorie",
    prezzo: "10$",
    foodimg: 'img/fave.jpg',
    tipo: "primo",
    des: "Fave pugliesi accompagnate da un contorno di cicorie nostrane"
},

{
    nome: "Polpette fritte",
    prezzo: "8$",
    foodimg: 'img/polpette.jpg',
    tipo: "secondo",
    des: "Polpette fritte di pane e uova"
},

{
    nome: "Tonno in crosta di pistacchi",
    prezzo: "18$",
    foodimg: 'img/tonno.jpg',
    tipo: "secondo",
    des: "Tonno rosso del mediterraneo con saporita panatura di pangrattato e pistacchi"
},

{
    nome: "Gelato della casa",
    prezzo: "4$",
    foodimg: 'img/gelato.avif',
    tipo: "dolce",
    des: "Gelato della casa al gusto cioccolato, crema e pistacchio"
},

{
    nome: "Pasticciotto",
    prezzo: "6$",
    foodimg: 'img/pasticciotto.webp',
    tipo: "dolce",
    des: "Pasticciotto pugliese con ripieno a scelta tra crema, crema e amarena e cioccolato"
},

{
    nome: "Acqua minerale Levissima",
    prezzo: "2$",
    foodimg: 'img/acqua.jpg',
    tipo: "bevanda",
    des: "Altissima, Purissima, Levissima"
},

{
    nome: "Negramaro",
    prezzo: "15$",
    foodimg: 'img/vino2.jpg',
    tipo: "bevanda",
    des: "Calafuria Salento IGT, vino rosé italiano, ottimo per accompagnare qualunque portata"
},

]

const foodlist = food.map(item => {
const listitem= `<div class="col-md-6 foodbox ${item.tipo}">
<!-- content div -->
<div class="content b my-2">
    <!-- image -->
    <div class="c-image">
        <img src="${item.foodimg}" alt="">
    </div>
    <div class="t-n-p my-2">
        <div class="header">
            <!-- title -->
            <span class="title">${item.nome}</span>
            <!-- price -->
            <span class="price">${item.prezzo}</span>
        </div>
        <!-- Description -->
        <div class="des my-3 ">
            <p>${item.des}</p>
        </div>
    </div>
</div>
</div>`;
foodContainer.innerHTML += listitem;

})

const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('button');

menu.forEach(m =>{  //la m viene usata per dire che c'è un elemento all'interno dell'html
  m.addEventListener('click', e =>{
    console.log(e.target.innerHTML)
    foodbox.forEach(box =>{
        box.classList.add('d-none')
        if(e.target.innerHTML === 'Tutto')
        {
            box.classList.remove('d-none')
        }
        else if (e.target.innerHTML === 'Antipasti'){
            if(box.classList.contains('antipasto'))
            {
                box.classList.remove('d-none')
            }
        }

        else if (e.target.innerHTML === 'Primi'){
            if(box.classList.contains('primo'))
            {
                box.classList.remove('d-none')
            }
        }

        else if (e.target.innerHTML === 'Secondi'){
            if(box.classList.contains('secondo'))
            {
                box.classList.remove('d-none')
            }
        }
        else if (e.target.innerHTML === 'Dolci'){
            if(box.classList.contains('dolce'))
            {
                box.classList.remove('d-none')
            }
        }
        else if (e.target.innerHTML === 'Bevande'){
            if(box.classList.contains('bevanda'))
            {
                box.classList.remove('d-none')
            }
        }
    })



})













})