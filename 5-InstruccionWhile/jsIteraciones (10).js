function mostrar()
{
	var numero;
	var respuesta="si";
	var sumanegativos=0;
	var sumapositivos=0;
	var cantidadpositivos=0;
	var cantidadnegativos=0;
	var cantidadpares=0;
	var promediopositivos=0;
	var promedionegativos=0;
	var diferencia=0;
	var cantidadceros=0;
	var modulo=0;

	while(respuesta!="no")
		
		{
			numero=prompt("Ingrese un numero valido");
			numero=parseInt(numero);
		
			while(isNaN(numero))
				
				{
					numero=prompt("Ingrese un numero valido")
					numero=parseInt(numero);
				}

			if(numero>0)

				{
					sumapositivos+=numero;
					cantidadpositivos++;
					promediopositivos=sumapositivos/cantidadpositivos;
				}

			else 

				{
					if(numero<0)
							
						{
							sumanegativos+=numero;
							cantidadnegativos;
							promedionegativos=sumanegativos/cantidadnegativos

						}

					else{cantidadceros++}
				}

			modulo=numero%2;

			if(modulo!=-1)

				{
					cantidadpares++;
				}

			diferencia=sumapositivos-sumanegativos;

			respuesta=prompt("Calcular ingresando (si/no)")


		document.write("Suma positivos: "+sumapositivos+"<br>");
		document.write("Suma negativos: "+sumanegativos+"<br>");
		document.write("Cantidad positivos: "+cantidadpositivos+"<br>");
		document.write("Cantidad negativos: "+cantidadnegativos+"<br>");
		document.write("Cantidad de Ceros: "+cantidadceros+"<br>");
		document.write("Cantidad pares: "+cantidadpares+"<br>");
		document.write("PromedioPositivos: "+promediopositivos+"<br>");
		document.write("Promedio Negativos: "+promedionegativos+"<br>");
		document.write("Diferencia entre Positivos y negativos: "+diferencia+"<br>");


		}




}//FIN DE LA FUNCIÓN