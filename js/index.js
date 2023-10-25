class Producto{
    constructor(marca, producto, precio){
    this.marca = marca
    this.producto = producto
    this.precio = precio
    this.cantidad = cantidad;
    this.precioTotal = producto.precio; 
    }
    agregarUnidad() {
      this.cantidad++;
  }

  quitarUnidad() {
      this.cantidad--;
  }

  actualizarPrecioTotal() {
      this.precioTotal = this.precio * this.cantidad;
  }
}

let carrito = [];
let montoTotal = 0;

const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
//confirmar compra
const DOMConfirmarCompra = document.getElementById('#confirmar-compra');
const miLocalStorage = window.localStorage;

// // Función para vaciar el carrito
function vaciarCarrito() {
  const cartElement = document.getElementById("lista-carrito");
  cartElement.innerHTML = ""; // Elimina todos los elementos del carrito
}

// Agrega un controlador de eventos al botón "Vaciar Carrito"
document.getElementById("vaciar-carrito").addEventListener("click", () => {
  vaciarCarrito();

// Actualizar el monto total a 0.00
const montoTotalElement = document.getElementById("total");
montoTotalElement.textContent = "$0.00";    
});

const URL = "./productos.json"
const contenedorProductos=document.getElementById("contenedor")
const agregarAlCarrito = (prod, id) => {
  // Implementa la lógica para agregar productos al carrito
  console.log(`Agregado al carrito: ${prod.producto}, ${prod.marca}`);

  // Obtener el elemento del carrito en el DOM
  const cartElement = document.getElementById("lista-carrito");

  // Crear un nuevo elemento de lista (por ejemplo, un <li>) para el producto
  const newItem = document.createElement("li");
  newItem.textContent = `${prod.producto}, ${prod.marca}`

  // Agregar el elemento de producto al carrito en el DOM
  cartElement.appendChild(newItem);

   // Actualizar el monto total
   montoTotal += prod.precio;
   actualizarMontoTotal();

   function actualizarMontoTotal() {
      const totalElement = document.getElementById("total"); // Donde "total" es el ID del elemento donde deseas mostrar el monto total
      totalElement.textContent = `$${montoTotal.toFixed(2)}`;
  }
};

const pedirproductos = async () => {
    const resp = await fetch (URL)
    const data = await resp.json()
    console.log(data)

  data.forEach((prod) => {
      const div = document.createElement("div")
       div.innerHTML =`<div class="card">
      <div class="image-container">
      <img class="img" src="${prod.imagen}">
      </div>
      <div class="content">
        <div class="Marca">${prod.marca}</div>
        <div class="producto">${prod.producto}</div> 
        <div class="precio"> ${prod.precio}</div>
      </div>

      <button class="button" id="${prod.producto},${prod.marca}" >
      Comprar
      </button>
      </div>
      </div>`
    
      contenedorProductos.appendChild(div)
      const btnAgregar = document.getElementById(`${prod.producto},${prod.marca}`)
      btnAgregar.addEventListener("click", () => {
          agregarAlCarrito(prod, prod.id);
      })
  })
}

pedirproductos()

//sweetalert de boton confirmar
const btn = document.querySelector('#confirmar-compra')
btn.addEventListener('click', () => {
    Swal.fire({
        title: '¿Confirmar compra?',
        text: '¿Estás seguro de que deseas confirmar la compra de este carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, confirmar compra',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar la lógica para confirmar la compra
            Swal.fire('Compra confirmada', '', 'success');
        } else {
            Swal.fire('Compra cancelada', '', 'error');
        }
    });
});
//sweetalert de boton vaciar carrito
const btn1 = document.querySelector('#vaciar-carrito')
btn1.addEventListener('click', () => {
Swal.fire(
    '¿Desea Vaciar el carrito?',
    'Presione OK para continuar',
    'question'
  )})