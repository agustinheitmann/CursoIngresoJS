/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var Fahrenheit; 
    Fahrenheit=document.getElementById('Temperatura').value;
    parseInt(Fahrenheit);

    var formula;
    formula= 32 / 1,8;

    var resultado;
    resultado= (Fahrenheit - formula);
    console.log(resultado)

    alert(+Fahrenheit+ " Fahrenheit son " +resultado+ " centigrados" )
}

function CentigradosFahrenheit () 
{
    var centígrados;
    centígrados=document.getElementById('Temperatura').value;
    parseInt(centígrados);

    var Fahrenheit;
    parseInt(Fahrenheit);
    
    var formula;
    formula=  1.8;

    var resultado;
    resultado= (centígrados * formula);

    resultado=resultado + 32;

    alert(+centígrados+ " centigrados son " +resultado+ " Fahrenheit")

}
