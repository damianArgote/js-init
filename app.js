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
    },
    imagen: 'https://previsoraarg.vtexassets.com/arquivos/ids/158535-800-auto?v=638216540368500000&width=800&height=auto&aspect=true'
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

function formatCurrency(number) {
    return '$' + number.toLocaleString('es-AR'); // Formato de Argentina
}

const productoCapitalized = capitalizeObjectKeys(producto);

const listadoUl = document.querySelector('#listado');

function imprimirObjeto() {
    // Asignar la imagen al elemento img
    const productoImagen = document.querySelector('#producto-imagen');
    productoImagen.src = productoCapitalized.Imagen;

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

        } else if (key === 'Disponible') {
            const disponibilidad = productoCapitalized[key] ? 'SI' : 'NO';
            const color = productoCapitalized[key] ? 'green' : 'red';
            li.innerHTML = `<strong>${key}</strong>: <span style="color:${color}">${disponibilidad}</span>`;
        } else if (key === 'Precio') {
            li.innerHTML = `<strong>${key}</strong>: <span class="precio">${formatCurrency(productoCapitalized[key])}</span>`;
        } else if (key !== 'Imagen') { // Excluir la propiedad Imagen
            li.innerHTML = `<strong>${key}</strong>: <span>${productoCapitalized[key]}</span>`; // Le damos el valor al elemento
        }
        listadoUl.appendChild(li); // Unimos el elemento al padre ul
    }
}

imprimirObjeto();
