function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var promedio;


	while(contador<5)
	{
		numero=prompt("pedir numeros");
		
		numero=parseInt(numero)

		contador++;

		acumulador+=numero;

		promedio=acumulador/contador;
	}







document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN