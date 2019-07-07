/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    largo=document.getElementById('Largo').value;
    parseInt(largo);
    
    var ancho;
    ancho=document.getElementById('Ancho').value;
    parseInt(ancho);

    var RectanguloAlambre;
    var alambre;
    alambre= 3 ;

    RectanguloAlambre= (+largo + +ancho ) * alambre;
   
    console.log(RectanguloAlambre)
   
   
    alert("La cantidad de alambre a comprar en metros es " + RectanguloAlambre )

}
function Circulo () 
{
    var radio;
    radio=document.getElementById('Radio').value;
    parseInt(radio);
    
    var CirculoAlambre;
    var alambre;
    alambre=3;

    CirculoAlambre= radio * alambre;
    
    alert("La cantidad de alambre a comprar en metros es "+ CirculoAlambre);



}
function Materiales () 
{

    var largo;
    largo=document.getElementById('Largo').value;
    parseInt(largo);
    
    var ancho;
    ancho=document.getElementById('Ancho').value;
    parseInt(ancho);

    var Bcemento; Bcemento=2;
    var Bcal; Bcal=3;

    var resultado;

    resultado= +largo + +ancho  * Bcemento;

    var resultado2;

    resultado2= +largo + +ancho * Bcal;

    alert('La cantidad de cemento es '+ resultado + " y la cantidad de cal es " +resultado2)

    

}