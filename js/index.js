class Producto{
    constructor(marca, producto, precio){
    this.marca = marca
    this.producto = producto
    this.precio = precio
    
    }
    mostrardatos(){
        return `Producto ${this.marca}`
    }
}

const listadoProductos= [];

function guardarProducto(e) {
    e.preventDefault();
    // console.log(e)

    const marca = document.querySelector("#marca").value;
    const producto = document.querySelector("#producto").value;
    const precio = document.querySelector("#precio").value;

   
    listadoProductos.push(new Producto(marca, producto, precio));

    localStorage.setItem("Producto", JSON.stringify(listadoProductos));
    mostrarListado(listadoProductos);

    document.getElementById("formularioProductos").reset();
}

//  Funcion asociada a evento para cambiar tema a darkMode

function cambiarTema() {
    document.body.classList.toggle("darkMode")

    if (document.body.classList == "darkMode"){
        localStorage.setItem("darkMode", true)
    }else {
        localStorage.setItem("darkMode", false)
    }
}

function chequearDarkMode(){
    const darkMode = localStorage.getItem("darkMode")
    console.log(darkMode)

    if(darkMode == "true"){
        document.body.classList = "darkMode"
    }
}


//  Funcion asociada a evento para mostrar menu productos

function mostrarFormulario() {
    let menuOculto = document.getElementById("menu agregar");
    menuOculto.classList.toggle("oculto");
}
function mostrarEnFavoritos(Producto) {
    // Simulación
    console.log(`Se agregó ${Producto.marca} al listado de Favoritos`);
}

function mostrarListado(listadoProductos) {
    // Obtiene el id del contenedor del listado de productos
    const listado = document.getElementById("listadoProductos");
    listado.textContent = "";

    
    for(const Producto of listadoProductos) {
        const div = document.createElement("div");
        div.innerHTML = `
			<div class="Card">
				<h3>${Producto.marca}</h3>
				<p>${Producto.producto}<p>
				<p>${Producto.precio}<p>
				<button id="${Producto.marca}" type="button">Guardar en Favoritos</button>
			</div>
		`;

        listado.appendChild(div);
        let boton = document.getElementById(`${Producto.marca}`);
        boton.onclick= () => mostrarEnFavoritos(Producto);
    }
}
//  Funcion para ver los productos cargados en el Storage
function verificarProductosenStorage() {
    if (JSON.parse(localStorage.getItem(`Producto`))) {
      let listadoProductos = JSON.parse(localStorage.getItem(`Producto`));
      mostrarListado(listadoProductos);
    }
  }
  
//  Evento para guardar formulario productos
let formulario = document.getElementById("formularioProductos");
formulario.addEventListener("submit", guardarProducto);

//  Evento para mostrar menu productos
let mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", mostrarFormulario);

//  Evento para dark mode.
let botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click",  cambiarTema);

// Ejecucion de programas
chequearDarkMode()
verificarProductosenStorage();