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

function formatCurrency(number) {
    return '$' + number.toLocaleString('es-AR'); // Formato de Argentina
}

function imprimirObjeto() {
    // Asignar la imagen al elemento img
    const productoImagen = document.querySelector('#producto-imagen');
    productoImagen.src = producto.imagen;

    // Asignar nombre y descripción
    const productoNombre = document.querySelector('#producto-nombre');
    productoNombre.textContent = capitalizeFirstLetter(producto.nombre);

    const productoDescripcion = document.querySelector('#producto-descripcion');
    productoDescripcion.textContent = capitalizeFirstLetter(producto.descripcion);

    // Crear listado de detalles
    const listadoUl = document.querySelector('#listado');
    listadoUl.innerHTML = '';

    for (let key in producto) {
        if (key !== 'id' && key !== 'nombre' && key !== 'descripcion' && key !== 'imagen') {
            const li = document.createElement('li');

            if (key === 'informacion') {
                li.innerHTML = `<strong>Información:</strong>`;
                const ul = document.createElement('ul');
                ul.classList.add('list-unstyled');

                for (let llave in producto[key]) {
                    const liInfo = document.createElement('li');
                    liInfo.textContent = `${capitalizeFirstLetter(llave)}: ${producto[key][llave]}`;
                    ul.appendChild(liInfo);
                }

                li.appendChild(ul);

            } else if (key === 'disponible') {
                const disponibilidad = producto[key] ? 'Sí' : 'No';
                const color = producto[key] ? 'text-success' : 'text-danger';
                li.innerHTML = `<strong>${capitalizeFirstLetter(key)}:</strong> <span class="${color}">${disponibilidad}</span>`;

            } else if (key === 'precio') {
                li.innerHTML = `<strong>${capitalizeFirstLetter(key)}:</strong> <span class="precio">${formatCurrency(producto[key])}</span>`;

            } else {
                li.innerHTML = `<strong>${capitalizeFirstLetter(key)}:</strong> ${producto[key]}`;
            }

            listadoUl.appendChild(li);
        }
    }
}

imprimirObjeto();
