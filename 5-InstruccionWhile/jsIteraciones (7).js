function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	while(respuesta=="si")

		{
			
			numero=prompt("Tomar numeros");
			numero=parseInt(numero);

			while(isNaN(numero))
				{
					numero=prompt("Eso no es valido/Ingresar un numero")	
					numero=parseInt(numero);	
				}

		contador++;
		acumulador+=numero;

		respuesta=prompt("Desea poner otro numero");
		}
		 
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN