function mostrar()
{
    var letra;
    var numero;
    var numpar=0;
    var numinpar=0;
    var cantceros=0;
    var promediopositivos=0;
    var numeronegativo=0;
    var sumanegativos=0;
    var cantpositivos=0;
    var cantnegativos=0;
    var numeromax=0;
    var letramax;
    var letramin;
    var numeromin=100;
    var respuesta="si";
    var sumanumeros=0;
    var contador=0;

        while(respuesta=="si")

            {
                
                letra=prompt("Ingrese un letra");
                
                while(letra.length!=1)
                    {
                        letra=prompt("Ingrese un solo digito");
                    }

                numero=prompt("Ingrese un numero del -100 al 100");
                numero=parseInt(numero);
                
                    while(isNaN(numero) || numero<=-100 || numero>=100)
                    {
                        numero=prompt("Ingrese un numero valido");
                        numero=parseInt(numero);
                    }
            
                if(numero%2==0)
                    {
                        numpar++;
                    }
                else
                    {
                        numinpar++;
                    }
                
                if(numero=="0")
                    {
                        cantceros++;
                    }

                if(numero>0)
                    {
                        sumanumeros+=numero;
                        cantpositivos++;
                        promediopositivos=sumanumeros/cantpositivos;
                    }

                else
                    {
                        sumanegativos+=numero;
                        cantnegativos++
                    }

                if(numero>numeromax)
                    {
                        numeromax=numero;
                        letramax=letra;
                    }
                
                else
                {
                    if(numero<numeromin)
                    {
                        numeromin=numero;
                        letramin=letra;
                    }
                }

                promediopositivos=sumanumeros/cantpositivos;


                respuesta=prompt("Desea ingresar otra letra?");
                respuesta=prompt("Desea ingresar otro numero?");
            }

            document.write("La cantidad de numeros pares es "+numpar + "<br>");
            document.write("La cantidad de numeros impares es " +numinpar + "<br>") ;
            document.write("La cantidad de ceros es "+cantceros + "<br>");
            document.write("El promedio de todo los positivos es "+promediopositivos+ "<br>");
            document.write("La suma de todos los negativos es "+cantnegativos+ "<br>");
            document.write("El numero maximo es "+numeromax+ "y su letra es "+letramax+ "<br>");
            document.write("El numero minimo es "+numeromin+ "y su letra es "+letramin+ "<br>")

}
