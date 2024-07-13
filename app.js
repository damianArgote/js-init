
//objetos key(llave) : value (valor)
const producto = {
    nombre: 'notebook',
    id: 1,
    descripcion: 'Lenovo usado con garantia',
    precio: 2500000,
    disponible: true,
    categorias: ['Usado', 'Notebook', 'Garantia'],
    informacion: {
        marca: 'Lenovo',
        pais: 'Argentina',
        numeroSerie: 12345678
    }
}

//console.log(producto['nombre']);

/* for(let key in producto){
    //cuando producto este disponible
    if(producto.disponible){
        console.log(producto[key]);
    }else{
        console.log('No disponible');
    }
    //ternario
    producto.disponible ? console.log(producto[key]) :  console.log('No disponible')

    producto.disponible && console.log(producto[key]);

    producto.disponible = producto.disponible ?? console.log('No disponible')
} */


const listadoUl = document.querySelector('#listado');

function imprimirObjeto() {

    for (let key in producto) {
        const li = document.createElement('li');//creamos el elemento li

        //validar por el key informacion
        if (key === 'informacion') {
            //Se vuelve a interar el objeto producto.informacion
            for (let llave in producto.informacion) {
                const div = document.createElement('div');
                div.innerHTML = `<ul>
                    <li>${producto.informacion[llave]}</li>
                </ul>`

                li.appendChild(div);
            }

        } else {
            li.innerHTML = `<strong>${key}</strong>: <span>${producto[key]}</span>`; //le damo el valor al elemento
        }
        listadoUl.appendChild(li); //unimos el elemento al padre ul
    }
}

imprimirObjeto()

console.log('hola soy pablo');
console.log('hola soy damian');
