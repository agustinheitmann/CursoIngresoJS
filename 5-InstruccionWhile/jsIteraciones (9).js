function mostrar()
{


	var maximo=0;
	var minimo=10**99;
	var respuesta='si';
	var numero;

	while(respuesta!='no')
		
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
			
			while(isNaN(numero))
				{
					numero=prompt("Ingrese un numero valido");
					numero=parseInt(numero);
				}

			if(numero>maximo)
				{
					maximo=numero
				}	

			if(numero<minimo)

				{
					minimo=numero
				}

				respuesta=prompt("desea pedir otro numero?(Si/No)")
		}

	
	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN