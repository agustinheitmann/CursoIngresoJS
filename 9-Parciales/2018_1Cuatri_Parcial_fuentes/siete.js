function mostrar()
{
  
    var notas=0;
    var alumnos=0;
    var sexo;
    var promedio;
    var notabaja=10;
    var contador=0;
    var sexoNotaBaja;
    var sumanotas=0;

    while(alumnos<5)

        {
            notas=prompt("Ingrese un numero del 1 al 10")
            notas=parseInt(notas);

            while(isNaN(notas)||notas<0||notas>10)
                
                {
                    notas=prompt("Incorrecto, ingrese un numero del 1 al 10")
                    notas=parseInt(notas);
                }
            
            sexo=prompt("Ingrese f o m");
            sexo=sexo.toLowerCase();

            while(sexo!="f" && sexo!="m")
                
                {
                    sexo=prompt("El sexo es invalido, ingrese sexo f o m");
                    sexo=sexo.toLowerCase();
                }
        
            if(notas<notabaja)
                
                {
                    notabaja=notas;
                    sexoNotaBaja=sexo;
                }
            
            if(sexo=="m" && notas>=6)
                
                {
                    contador++;
                }

            alumnos++;
            sumanotas+=notas;
            promedio=sumanotas/5;

        
        }

        alert("Promedio: "+promedio);
        alert("Nota baja: "+notabaja+" Sexo: "+sexoNotaBaja);
        alert("Varones con nota mayor o igual a 6: "+contador);
    


}
