function mostrar()
{
    var precio=prompt("Introduzca el Precio");
    var descuento=prompt("Introduzca el descuento")
    var preciofinal;

    preciofinal=precio * descuento /100;
    preciofinal=precio - preciofinal;

    document.getElementById("elPrecioFinal").value=preciofinal
}
