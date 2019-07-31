function mostrar()
{

    var contador=0;
    var numero=prompt("Ingresar un numero");
;   

    for(i=1;i<=numero; i++)
    
        {

            if(i%2==0)
               
                {
                    contador++;
                    console.log(i)
                }
                
            alert(contador)
        }



}//FIN DE LA FUNCIÓN