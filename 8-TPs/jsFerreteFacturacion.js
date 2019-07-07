/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1; 

    precio1=document.getElementById('PrecioUno').value;
    parseInt(precio1);
    
    var precio2; 

    precio2=document.getElementById('PrecioDos').value;
    parseInt(precio2)

    var precio3;

    precio3=document.getElementById('PrecioTres').value;
    parseInt(precio3);

    var suma;

    suma= +precio1 + +precio2 + +precio3;

    alert("La suma es "+suma);

}
function Promedio () 
{
    
    var precio1; 

    precio1=document.getElementById('PrecioUno').value;
    parseInt(precio1);
    
    var precio2; 

    precio2=document.getElementById('PrecioDos').value;
    parseInt(precio2)

    var precio3;

    precio3=document.getElementById('PrecioTres').value;
    parseInt(precio3);

    var promedio;

    promedio= (+precio1 + +precio2 + +precio3) / 3;
    console.log(promedio);

    alert("El promedio es " +promedio)
    

}
function PrecioFinal () 
{
    var precio1; 

    precio1=document.getElementById('PrecioUno').value;
    parseInt(precio1);
    
    var precio2; 

    precio2=document.getElementById('PrecioDos').value;
    parseInt(precio2)

    var precio3;

    precio3=document.getElementById('PrecioTres').value;
    parseInt(precio3);

    var suma;
    var IVA;
    IVA=1.21;

    suma= (+precio1 + +precio2 + +precio3)*IVA;

    alert("La suma (IVA incluido) "+suma);
    
    


}