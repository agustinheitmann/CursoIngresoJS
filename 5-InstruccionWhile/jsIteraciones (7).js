function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

while(numero=="si")

	{
		numero=prompt("Pedir un numero");

		numero=parseInt(numero);

		contador++;

		acumulador+=numero;

		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;

		respuesta=prompt(" desea ingresar otro numero (si/o no)" );
	}
		 


}//FIN DE LA FUNCIÓN