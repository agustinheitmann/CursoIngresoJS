function mostrar()
{
    var marca;
    var peso=0;
    var temperatura=0;
    var respuesta="si";
    var pesomaximo=0;
    var pesogeneral=0;
    var marcamaxima;
    var cantceros=0;
    var maximo=0;
    var minimo=100;
    var cantpeso=0;
    var temperaturapar=0;

        while(respuesta=="si")
        {
            marca=prompt("Ingrese la marca del producto");

            peso=prompt("Ingrese el peso del producto");
            peso=parseInt(peso);
            
            while(isNaN(peso)||peso<0||peso>100)
            {
                peso=prompt("Ingrese un peso valido");
                peso=parseInt(peso);
            }

            temperatura=prompt("Ingrese temperatura");
            temperatura=parseInt(temperatura);

            while(isNaN(temperatura)||temperatura<-31 || temperatura>31)
            {
                temperatura=prompt("Ingrese una temperatura valida");
                temperatura=parseInt(temperatura);
            }   


            if(temperatura%2=="0")
            {
                temperaturapar++;
            }

            if(peso>pesomaximo)
            {
                pesomaximo=peso;
                marcamaxima=marca;

            }
            
            if(temperatura<"0")
            {
                cantceros++;
            }

            if(peso>0)
            {
                pesogeneral+=peso;
                cantpeso++;
                promedio=pesogeneral/cantpeso;
            }

            if(peso>maximo)
            {
                maximo=peso;
            }
            
            if(peso<minimo)
        
            {
                minimo=peso;
            }
       
            respuesta=prompt("Desea ingresar otra marca?");
            respuesta=prompt("Desea ingresar otro peso?");
            respuesta=prompt("Desea ingresar otra temperatura?");
        }

            document.write("La cantidad de temperaturas pares es "+temperaturapar+ "<br>");
            document.write("La marca del producto más pesado "+marcamaxima+ "<br>");
            document.write(" La cantidad de productos que se conservan a menos de 0 grados." +cantceros+ "<br>");
            document.write("El promedio del peso de todos los productos. "+promedio+ "<br>");
            document.write("El peso máximo "+maximo+ "<br>");
            document.write("El peso minimo  "+minimo+ "<br>");



    }
