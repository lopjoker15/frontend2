// alert("archivo js listo");

// Variables globales
let btnProducts = document.querySelectorAll(".btn-product");
let contadorCarrito = document.querySelector(".contar-pro");
let listadoCarrito = document.querySelector(".list-cart tbody"); // Agregado para usar en `agregarProducto()`
let con = 0;
//console.log (btnProducts);
document.addEventListener("DOMContentLoaded", () =>{

});

// Evento para cada botón de producto
btnProducts.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        
       // alert (`Diste clic en el botón ${i + 1}`);
        // contador del producto en el carrito
        con++;
        contadorCarrito.textContent = con;
        //agregar el producto al carrito
        
        infoProducto( i);
        


        
    });
});

// Agregar producto al carrito

function agregarProducto(producto , con) {
    let fila = document.createElement("tr");

    fila.innerHTML = `
    <td> ${con} </td>
    <td> <img src="${producto.imagen}" width="70px"> </td>
    <td> ${producto.nombre} </td>
    <td> ${producto.precio} </td>
    <td> <span  onclick="borrrarproducto()${con})"  class="btn btn-danger"> 😛😛 </td>
    
    `;
    
    listadoCarrito.appendChild(fila);
    
}



// Función para agregar información del producto al carrito (pendiente de implementa

function infoProducto(pos) {
    let producto = btnProducts[pos].parentElement.parentElement.parentElement;
    console.assert(producto);

    let infoPro = {
        nombre: producto.querySelector("h3").textContent,

        imagen: producto.querySelector("img").src,
        
        precio: producto.querySelector("h5")?.textContent,
    }    
   // console.log (infoPro);   
   agregarProducto(infoPro);
   guardarproLocalStorage(infoPro);

}


//funcion para  eliminar productos del carrito
function borrrarproducto (pos){
    let  producto = event.target;
    //console.log(producto.parentElement.parentElement);
    producto.parentElement.parentElement.remove(producto);
    //disminuir el contador del producto del carrito
    if(con > o){
        con--;
        contadorCarrito.textContent = con;
    }

    eliminarProlocalStorage(pos);
}

//guardar los productos n localSgestorage
function guardarproLocalStorage(producto){
    let todolosPRODUCTOS = [];
    let productoPrevios =  JSON.parse  (localStorage.getItem("pro-carrito"));
    if(productoPrevios != null){
        todolosPRODUCTOS =Object.values(productoPrevios);
    }
    todolosPRODUCTOS.push(producto);
    localStorage.setItem("pro-carrito", JSON.stringify(todolosPRODUCTOS));
}

//eliminar producto localStorage
function eliminarProlocalStorage(pos){
        let todolosPRODUCTOS = [];
        let productoPrevios =  JSON.parse  (localStorage.getItem("pro-carrito"));
        if(productoPrevios != null){
            todolosPRODUCTOS =Object.values(productoPrevios);



        }
        todolosPRODUCTOS.splice((pos-1),1);
        localStorage.setItem("pro-carrito", JSON.stringify(todolosPRODUCTOS));


}
    //cargar productos delocalStorage
    function cargarProlocalStorage(){
        let todolosPRODUCTOS = [];
        let productoPrevios =  JSON.parse  (localStorage.getItem("pro-carrito"));
        if(productoPrevios != null){
            todolosPRODUCTOS =Object.values(productoPrevios);
        }
        
        todolosPRODUCTOS.forEach((producto)=>{
            //agregarProducto(producto);
            let fila = document.createElement("tr");

            fila.innerHTML = `
            <td> ${con} </td>
            <td> <img src="${producto.imagen}" width="70px"> </td>
            <td> ${producto.nombre} </td>
            <td> ${producto.precio} </td>
            <td> <span  onclick="borrrarproducto()${con})"  class="btn btn-danger"> 😛😛 </td>
            
            `;
            
            listadoCarrito.appendChild(fila);

        });

    }
