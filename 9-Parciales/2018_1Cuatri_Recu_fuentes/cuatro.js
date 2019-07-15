function mostrar()
{
   var numero1=prompt("Numero uno es ");
   var numero2=prompt("Numero dos es ");
   var resultado;

    if(numero1 == numero2) {resultado=numero1 + numero2;}

    else{

        if (numero1>numero2){resultado=numero1/numero2;}

        else{resultado=+numero1 + +numero2;}

    }

    if(resultado<50) {resultado="La suma "+resultado +" es resultado es menor a 50"}



   alert(resultado)
}
