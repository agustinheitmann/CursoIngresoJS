function mostrar()
{

/*var sexo = prompt("ingrese f ó m .");



while (sexo!="f" && sexo !="m")

    {
        sexo=prompt("El sexo es desconocido")
    }       

document.getElementById('Sexo').value=sexo;
*/

    var sexo;

    do
        {
            sexo=prompt("Ingrese f o m");
            document.getElementById("Sexo").value=sexo;
        }

    while(sexo!="m" && sexo!="f");
    
}//FIN DE LA FUNCIÓN