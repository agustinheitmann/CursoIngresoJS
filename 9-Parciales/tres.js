function mostrar()
{
    var precio =prompt("El precio es");parseInt(precio)
    var porcentaje =prompt("El porcentaje es");parseInt(porcentaje);

    var resultado = precio * porcentaje/100;

    document.getElementById('elPrecioFinal').value=resultado;

}
