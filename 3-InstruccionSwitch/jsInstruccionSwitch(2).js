function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":{alert("Falta para el invierno");break};
    case "Julio":
    case "Agosto":{alert("Abrigate que hace frio");break};
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":
    case "Febrero": {alert("Calor");break};
}

}//FIN DE LA FUNCIÓN