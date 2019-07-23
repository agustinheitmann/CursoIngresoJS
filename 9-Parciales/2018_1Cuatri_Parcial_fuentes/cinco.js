function mostrar()
{
    var SistemaSolar=prompt("Ingrese un planeta del Sistema Solar");

    switch(SistemaSolar)
        
        {
            case "tierra":{alert("Vivimos aca");break};
            case "mercurio":
            case "venus":{alert("Aca hace mas calor");break};
            case "marte":
            case "jupiter":
            case "saturno":
            case "urano":
            case "neptuno":{alert("Aca hace más frio");break};
            default:{alert("Es un planeta enano");break};
        }
}