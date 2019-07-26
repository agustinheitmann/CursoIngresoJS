function mostrar()
{
    var alumnos=0;
    var notas=0;
	var sexo;
	var promedio;
    var notabaja;

    while(alumnos<5)
    
    {   
        notas = prompt("ingrese un número entre 0 y 10.");
        notas = parseInt(notas);
        sexo = prompt("ingrese f o m");
       

        while(isNaN(notas))
        {
            notas=prompt("El numero es invalido, ingrese un numero valido");
        }
        
        while (sexo!="f" && sexo !="m")

        {
            sexo=prompt("El sexo es invalido;Ingrese un sexo verdadero")
        }       
    
        alumnos++;
        notas+=sexo;
        promedio=notas/5;
       

    }   



}
