//Arrays declaraciones y metodos

const numeros = [1,50,10,4,100,2000]
const booleanos = [true,false,false,true]
const arrayVariado = [12,false,'hola mundo',{mensaje:'esto es un mensaje'}];
//Mas comunes
const meses = ['Enero','Febrero','Marzo','Abril']
const tecnologias =[
    {
        framework:'React',
        stack:'Frontend',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJS-A8NEllfqbKf-4GUKetJe8J3GKqKP6A&s',
        id:1
    },
    {
        framework:'Angular',
        stack:'Frontend',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
        id:2,
    },
    {
        framework:'Nodejs',
        stack:'Backend',
        logo:'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        id:3
    },
    {
        framework:'Nestjs',
        stack:'Backend',
        logo:'https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg',
        id:4
    },
    {
        framework:'.NET',
        stack:'Backend',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRYzE6vnRTPpJK4DV0v8Af0WyiuTteVj9cg&s',
        id:5
    },
    {
        framework:'Nextjs',
        stack:'Frontend',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpA-HSZ8PwRVGSnKwXNtbm-f3ZB_tc6Kdhg&s',
        id:6
    },
    {
        framework:'MySQL',
        stack:'Database',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3P-jnVaFvLyC8AweZzJ9vQY6Y4egFM2tLQ&s',
        id:7
    },
    {
        framework:'MongoDb',
        stack:'Database',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYP2wh48_6wrG4tZleiAngKQ0ThkCjuKaSzw&s',
        id:8
    }
]

const tecnologias2 = [
    {
        framework:'React',
        stack:'Frontend',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJS-A8NEllfqbKf-4GUKetJe8J3GKqKP6A&s',
        id:1,
        precio:20000
    },
    {
        framework:'Angular',
        stack:'Frontend',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
        id:2,
        precio:30000
    },
]

//console.log(tecnologias);

//foreach
/* let resultado = tecnologias.forEach((tecnologia) =>{
    console.log(tecnologia);
});

console.log(resultado); */

let frontend = tecnologias.map((tecnologia) =>{
    if(tecnologia.stack === 'Frontend'){
        return tecnologia;
    }
    return;
});

let resultado;

//resultado = tecnologias.some( tecnologia => tecnologia.framework === 'MySQL')
//resultado = tecnologias.find( tecnologia => tecnologia.framework === 'MySQL')

//resultado = tecnologias2.every( tecnologia => tecnologia.stack === 'Frontend')
//resultado = tecnologias.filter( tecnologia => tecnologia.id !== 3)

resultado = tecnologias2.reduce((total,tecnologia) =>  total - tecnologia.precio,0);

//console.log('total',resultado);

const divContenedor = document.getElementById('contenedor');

//cargarHTML(tecnologias);
filtro('Backend')
function cargarHTML(array){
    limpiarHtml();
    array.map(item =>{
        const div = document.createElement('div');
        div.classList.add('col-3', 'text-light', 'rounded');
        div.innerHTML=`
        <div class="card border border-success">
        <img src="${item.logo}" class="card-img-top" alt="${item.framework}">
        <div class="card-body">
          <h5 class="card-title">${item.framework}</h5>
          <p class="card-text">${item.stack}</p>
        </div>
      </div>
        `;
        divContenedor.appendChild(div);
    })
}

//filtro
function filtro(stack){
    cargarHTML(tecnologias.filter(item => item.stack === stack));
}

function limpiarHtml(){
    while(divContenedor.firstChild){
        divContenedor.removeChild(divContenedor.firstChild)
    }
}

//una funcion para agregar una descripcion a cada tecnologia
function agregarDescripcion(id,descripcion){

}