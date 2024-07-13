const producto = {
    categorias: ['Usado', 'Notebook', 'Lenovo', 'Garantia'],
    descripcion: 'Lenovo Usado con garantia',
    nombre: 'notebook',
    precio: 250000,
    disponible: true,
    id: 1,
    informacion: {
        marca: 'Lenovo',
        pais: 'Argentina',
        numeroSerie: '12345678',
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeObjectKeys(obj) {
    const capitalizedObj = {};
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'object' && !Array.isArray(value)) {
            value = capitalizeObjectKeys(value);
        } else if (typeof value === 'string') {
            value = capitalizeFirstLetter(value);
        }
        capitalizedObj[capitalizeFirstLetter(key)] = value;
    }
    return capitalizedObj;
}

const productoCapitalized = capitalizeObjectKeys(producto);

const listadoUl = document.querySelector('#listado');

function imprimirObjeto() {
    for (let key in productoCapitalized) {
        const li = document.createElement('li'); // Creamos el elemento li

        // Validar por el key informacion
        if (key === 'Informacion') {
            const div = document.createElement('div');
            div.innerHTML = `<p>Información:</p>`;
            const ul = document.createElement('ul');

            // Se vuelve a iterar el objeto productoCapitalized.Informacion
            for (let llave in productoCapitalized.Informacion) {
                const liInfo = document.createElement('li');
                liInfo.textContent = `${llave}: ${productoCapitalized.Informacion[llave]}`;
                ul.appendChild(liInfo);
            }

            div.appendChild(ul);
            li.appendChild(div);

        } else {
            li.innerHTML = `<strong>${key}</strong>: <span>${productoCapitalized[key]}</span>`; // Le damos el valor al elemento
        }
        listadoUl.appendChild(li); // Unimos el elemento al padre ul
    }
}

imprimirObjeto();

console.log('hola soy pablo');
console.log('hola soy damian');
