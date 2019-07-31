function mostrar()
{
    var numero=prompt("Ingrese numeros");
    var cantdivisores;

    for(i=1; i<=numero; i++)

        {

            if(numero%i==0)

                {
                    cantdivisores++;
                    console.log(i);
                }
                

        }


}//FIN DE LA FUNCIÓN