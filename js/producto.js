export class Producto
{
    constructor(nombre,cantidad,precio)
    {
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }

    mostrardetalles()
    {
        console.log("Producto: ",this.nombre);
        console.log("Precio individual: ",this.precio);
        console.log("Cantidad productos: ",this.cantidad);
    }
}