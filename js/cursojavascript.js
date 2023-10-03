// const mouse = [
//     {producto:"mouse", precio: 1100, Marca: "Logitech"},
//     {producto:"mouse", precio: 1400, Marca: "Genius"},
//     {producto:"mouse", precio: 1700, Marca: "Noga"},
//     {producto:"mouse", precio: 5500, Marca: "Razer"}
// ]
// const teclados = [
//     {producto:"teclado", precio: 1100, Marca: "Logitech"},
//     {producto:"teclado", precio: 1400, Marca: "Genius"},
//     {producto:"teclado", precio: 1700, Marca: "Noga"},
//     {producto:"teclado", precio: 5500, Marca: "Razer"}
// ]
// const monitores = [
//     {producto:"monitor", precio: 50000, Marca: "Samsung", stock: 20},
//     {producto:"monitor", precio: 65500, Marca: "Lg", stock: 10},
//     {producto:"monitor", precio: 105500, Marca: "Asus", stock: 5},
//     {producto:"monitor", precio: 85500, Marca: "Philips", stock: 25}   
// // ]


// const productos = [
//     {"mouse": 400, "teclado": 200, "monitor": 150}
//   ]
  
//   let nombre = prompt("Ingrese su nombre")
//   alert(`Bienvenido ${nombre}!`)
  
//   function cargarproducto() {
//     let nombreproducto = prompt("Ingrese el nombre del producto a agregar")
//     let cantidad = parseInt(prompt("Ingrese la cantidad del producto a agregar"))
  
//     let productoExistente = productos[0][nombreproducto]
//     if (productoExistente) {
//       productos[0][nombreproducto] += cantidad
//       alert("El producto ya existe. Se ha actualizado la cantidad.")
//     } else {
//       productos[0][nombreproducto] = cantidad
//       alert("El producto se agregó correctamente.")
//     }
//   }
  
//   let carga = true
//   while (carga) {
//     cargarproducto();
//     carga = confirm("¿Quieres agregar otro producto?")
//     if (!carga) {
//       mostrarproductos()
//     }
//   }
  
//   function mostrarproductos() {
//     let productosamostrar = "";
//     for (let producto in productos[0]) {
//       productosamostrar += `${producto}: ${productos[0][producto]} / `
//     }
//     alert(`Los productos a mostrar son: ${productosamostrar}`)
//     console.log(`stock actualizado: ${productosamostrar}`)
//   }
  

