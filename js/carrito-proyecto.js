// 1era entrega proyecto----------------------------------------------------------------------------------------------------------

// const producto1 = {
//     nombre: "Lebron17",
//     precio: 8200,
//     marca: "Nike",
//     talle: 43,
//     cant: 1,

//     mostrarInfo: function() {
//         console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
//     }
// }
// const producto2 = {
//     nombre: "SpursManu",
//     precio: 8200,
//     marca: "Nike",
//     talle: "large",
//     cant: 1,

//     mostrarInfo: function() {
//         console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
//     }
// }
// const producto3 = {
//     nombre: "ShortAS",
//     precio: 8200,
//     marca: "Jordan",
//     talle: "large",
//     cant: 1,

//     mostrarInfo: function() {
//         console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
//     }
// }
// console.log(producto1)
// console.log(producto2)
// console.log(producto3)

// let carrito = [`producto1`, `producto2`, `producto3`];
// console.table(carrito)


// const carro = document.querySelector('#carrito');
// const contenedorCarrito = document.querySelector('#lista-carrito tbody')
// const listaProductos = document.querySelector('#lista-productos')

// function agregarProducto (e) {
//     e.preventDefault();
//     if (e.target.classList.contains('agregar-carrito')) {
//         console.log('hice click')
//     };
// }

//-------------- 2da entrega del proyecto----------------------------

// INDEX CARRITO
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaProductos = document.querySelector('#lista-productos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

listaProductos.addEventListener('click', agregarProducto);
carrito.addEventListener('click', eliminarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

document.addEventListener('DOMContentLoaded', () => {
	articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

	insertarCarritoHTML();
})


function vaciarCarrito() {
	borrarHTML();
	articulosCarrito = [];
	guardarStorage();
}

function agregarProducto(e) {
    e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const productoSeleccionado = e.target.parentElement.parentElement;
		obtenerDatosProducto(productoSeleccionado);
	};
}

function eliminarProducto(e) {
	if (e.target.classList.contains('borrar-producto')) {
		const productoId = e.target.getAttribute('data-id');

		articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

		insertarCarritoHTML();
		guardarStorage();
	}
}

function obtenerDatosProducto(producto) {

	const productoAgregado = {
		imagen: producto.querySelector('img').src,
		nombre: producto.querySelector('h4').textContent,
		precio: producto.querySelector('.precio span').textContent,
		id: producto.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}

	const existe = articulosCarrito.some(producto => producto.id === productoAgregado.id)

	if (existe) {
		const productos = articulosCarrito.map(producto => {
			if (producto.id === productoAgregado.id) {
				producto.cantidad++;
				producto.precio = `$${Number(productoAgregado.precio.slice(1)) * producto.cantidad}`;
				return producto;
			} else {
				return producto;
			}
		});
		articulosCarrito = [...productos];
	} else {
		
		articulosCarrito = [...articulosCarrito, productoAgregado];
	
	}


	insertarCarritoHTML();

}

function insertarCarritoHTML() {
	borrarHTML();

	articulosCarrito.forEach(producto => {
		const { nombre, imagen, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width=100>
			</td>
			<td>
				${nombre}
			</td>
			<td>
				${precio}
			</td>
			<td>
				${cantidad}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"> X </a>
			</td>
			
		`
		contenedorCarrito.appendChild(row);
	});

	guardarStorage();
}

function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function borrarHTML() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}


// CARRITO

$('h1').click(function() {
    $('.inifram, .sbm, form').toggle();
})

  

