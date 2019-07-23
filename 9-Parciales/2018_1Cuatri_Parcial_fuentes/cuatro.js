function mostrar()
{
    var numeroUno=prompt("Ingrese numero uno");
    var numeroDos=prompt("Ingrese numero dos");
    var resultado;

    if(numeroUno == numeroDos)
        
        {
            resultado= numeroUno + numeroDos;
        }
    
    else
        
        {
            numeroUno=parseInt(numeroUno);
            numeroDos=parseInt(numeroDos);
            
            if(numeroUno>numeroDos)
            {resultado=numeroUno-numeroDos;}

            else{resultado=numeroUno + numeroDos;}
        }

        
    if(resultado>10)

        {
            resultado=resultado; alert("El resultado es " +resultado+ "y supero el 10");

        }

    alert(resultado)
    
}
