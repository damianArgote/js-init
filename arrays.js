//Arrays declaraciones y metodos
const numeros = [1, 50, 10, 4, 100, 2000]
const booleanos = [true, false, false, true]
const arrayVariado = [12, false, 'hola mundo', { mensaje: 'esto es un mensaje' }];
//Mas comunes
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']
const tecnologias = [
    {
        framework: 'React',
        stack: 'Frontend',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJS-A8NEllfqbKf-4GUKetJe8J3GKqKP6A&s',
        id: 1
    },
    {
        framework: 'Angular',
        stack: 'Frontend',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
        id: 2,
    },
    {
        framework: 'Nodejs',
        stack: 'Backend',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        id: 3
    },
    {
        framework: 'Nestjs',
        stack: 'Backend',
        logo: 'https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg',
        id: 4
    },
    {
        framework: '.NET',
        stack: 'Backend',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRYzE6vnRTPpJK4DV0v8Af0WyiuTteVj9cg&s',
        id: 5
    },
    {
        framework: 'Nextjs',
        stack: 'Frontend',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpA-HSZ8PwRVGSnKwXNtbm-f3ZB_tc6Kdhg&s',
        id: 6
    },
    {
        framework: 'MySQL',
        stack: 'Database',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3P-jnVaFvLyC8AweZzJ9vQY6Y4egFM2tLQ&s',
        id: 7
    },
    {
        framework: 'MongoDb',
        stack: 'Database',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYP2wh48_6wrG4tZleiAngKQ0ThkCjuKaSzw&s',
        id: 8
    }
]

const tecnologias2 = [
    {
        framework: 'React',
        stack: 'Frontend',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJS-A8NEllfqbKf-4GUKetJe8J3GKqKP6A&s',
        id: 1,
        precio: 20000
    },
    {
        framework: 'Angular',
        stack: 'Frontend',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
        id: 2,
        precio: 30000
    },
]


let frontend = tecnologias.map((tecnologia) => {
    if (tecnologia.stack === 'Reset') {
        return tecnologia;
    }
    return;
});

let resultado;



resultado = tecnologias2.reduce((total, tecnologia) => total - tecnologia.precio, 0);



const divContenedor = document.getElementById('contenedor');
const Usuario = document.getElementById('nombre-usuario').innerText = "Damian Loquito";
let btnFavorito = document.getElementById('btnFav');


document.getElementById('Front').onclick = function () {
    console.log('filtro de front');

    filtro('Frontend')
}
document.getElementById('Back').onclick = function () {
    console.log('filtro de backend');
    filtro('Backend')
}
document.getElementById('Data').onclick = function () {
    console.log('filtro de database');
    filtro('Database')
}
document.getElementById('Reset').onclick = function () {
    console.log('filtro de Reset');
    filtro('Reset')
}
document.getElementById('Favoritos').onclick = function () {
    console.log('Filtro Favoritos!!');

}
/* document.getElementById('btnFav').onclick = function(){
    console.log("Click de agregar a favoritos");
    
} */

cargarHTML(tecnologias);
let flagFiltro = '';

function cargarHTML(array) {
    limpiarHtml();
    array.map(item => {
        const div = document.createElement('div');
        div.classList.add('col-6', 'col-sm-6', 'col-md-4', 'col-lg-3', 'text-light', 'rounded', 'd-flex', 'p-1', 'img-fluid');
        div.innerHTML = `
        <div class="card border border-success h-10 p-5 text-center img-fluid ">
        <img src="${item.logo}" class="card-img-top img-thumbnail img-fluid border-5" alt="${item.framework}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-decoration-underline">${item.framework}</h5>
          <p class="card-text text-bg-warning">${item.stack}</p>
          <p class="card-text ">${item.description}</p>
          <button id="btnFav" class="card-text" > Agregar a favorito</button>
        </div>
      </div>
        `;
        divContenedor.appendChild(div);
    })
}
console.log(btnFavorito);



//filtro
function filtro(stack) {
    if (flagFiltro === stack || stack === 'Reset') {
        flagFiltro = '';
        cargarHTML(tecnologias)
    } else {
        flagFiltro = stack;
        cargarHTML(tecnologias.filter(item => item.stack === stack));
    }

}

function limpiarHtml() {
    while (divContenedor.firstChild) {
        divContenedor.removeChild(divContenedor.firstChild)
    }
}

//una funcion para agregar una descripcion a cada tecnologia
function agregarDescripcion(id, descripcion) {
    const tecnologia = tecnologias.find(item => item.id === id);
    if (tecnologia) {
        tecnologia.description = descripcion;
    }
}
agregarDescripcion(1, 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario.');
agregarDescripcion(2, 'Angular es un framework para aplicaciones web desarrollado en TypeScript');
agregarDescripcion(3, 'Node.js es un entorno en tiempo de ejecución multiplataforma');
agregarDescripcion(4, 'NestJS es un framework para crear eficientes y escalables Aplicaciones web Node.js');
agregarDescripcion(5, 'NET es una plataforma para desarrolladores gratuita, multiplataforma de código abierto.');
agregarDescripcion(6, 'Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel');
agregarDescripcion(7, 'MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia');
agregarDescripcion(8, 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.');

cargarHTML(tecnologias);


