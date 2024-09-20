import { Producto } from "./producto.js";

let boton = document.getElementById('btn-agregar');

/*boton.addEventListener('click',()=>
{
    console.log("Producto agregado");
})*/

let carritolista= document.getElementById('lista');
let carrito = [];

boton.addEventListener('click', ()=>
{
    ///agarra los valores de los campos///
    let nombreproducto = document.getElementById('nombre-producto').value;
    let precioproducto = document.getElementById('precio-producto').value;
    let cantidadproducto = document.getElementById('cantidad-producto').value;
   

    ///Valida que todos los campos del producto esten llenos///
         if(!nombreproducto || !precioproducto || !cantidadproducto)
            {
                alert("Todos los campos tienen que estar llenos");
                return;
            }
   
    ///crea un nuevo producto con los valores///
    let producto = new Producto(nombreproducto,precioproducto,cantidadproducto);

    ///agrega el producto al arreglo///
    carrito.push(producto);
    ///crea un elemento LI en el documento///
    let nuevoelemento = document.createElement("li"); 
            ///Le da texto al LI(info de los productos)//
    nuevoelemento.textContent=`Producto: ${nombreproducto}, precio: ${precioproducto}, cantidad: ${cantidadproducto}`;

    ///cuando se hace click en el LI(nuevo elemento)///
    nuevoelemento.addEventListener('click',()=>
        {

            //sacamos la posicion dentro del array donde se hace el click//
            const index = carrito.indexOf(producto);
            if(index > -1)
            {
                //eliminamos del array
                carrito.splice(index,1);
            }
            //eliminamos del ul//
            carritolista.removeChild(nuevoelemento);
            console.log(carrito);
        })

    //Pone al LI creado como hijo del UL//
    carritolista.appendChild(nuevoelemento);
    console.log(carrito);
        let suma =0;
    let total= document.getElementById('total-compra');
    carrito.forEach(producto => {
        let precio_x_cantidad= producto.precio * producto.cantidad;
         suma = suma+ precio_x_cantidad;
    }
    );
    total.textContent= `El total del carrito es de: ${suma}`;    
}) 



