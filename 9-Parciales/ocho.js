function mostrar()
{
    var numero;
    var letra;
    var numeropar=0;
    var numeroinpar=0;
    var cantidadceros=0;
    var promediopositivos=0;
    var sumapositivos=0;
    var sumanegativos=0;
    var NumeroMaximo=-101;
    var numeroMinimo=101;
    var letraMaxima;
    var letraMinimo;
    var cantidadpositivos=0;
    var cantidadnegativos=0;
    var respuesta="si";



        while(respuesta=="si")

            {
                
                letra=prompt("Ingresar letra");
                
                while(letra.length!=1)
                    {
                        letra=prompt("Ingrese un solo digito");
                    }
                
                numero=prompt("Ingresar numero");
                numero=parseInt(numero);

                while(isNaN(numero) || numero<-100 || numero>100)
                    {
                        numero=prompt("Ingrese un numero valido")
                        numero=parseInt(numero);
                    }
            
                if(numero%2==0)
                    
                    {
                        numeropar++;
                    }

                else

                    {
                        numeroinpar++;
                    }
                    
                if(numero=="0")
    
                    {
                        cantidadceros++;
                    }
                    
                if(numero>0)

                    {
                        sumapositivos+=numero;
                        cantidadpositivos++
                    }
    
                else

                    {
                        sumanegativos+=numero;
                        cantidadnegativos++;
                    }
            
                if(numero>NumeroMaximo)

                    {
                        NumeroMaximo=numero;
                        letraMaxima=letra;
                    }
            
                else

                    {
                        numeroMinimo=numero;
                        letraMinimo=letra;
                    }
    
            promediopositivos=sumapositivos/cantidadpositivos;

            respuesta=prompt("Desea ingresar otro numero?");
            respuesta=prompt("Desea ingresar otra letra?");
     
            }

        
            document.write("Numeros pares son "+numeropar+"<br>");
            
            document.write("Numeros impares " +numeroinpar+"<br>");
            
            document.write("Cantidad de ceros " +cantidadceros+"<br>");
            
            document.write("El promedio de lo positivos es  "+promediopositivos+"<br>");
            
            document.write("La suma del numero negativo es " +cantidadnegativos+"<br>");
            
            document.write("El numero maximo es  " +NumeroMaximo+ " y la letra maxima es "+letraMaxima+"<br>" );
            
            document.write("El numero minimo es  " +numeroMinimo+ " y la letra minima es "+letraMinimo+"<br>" );






}
