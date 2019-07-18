function mostrar()
{

	var contador;
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


		var acumulada=document.getElementsById('suma')=acumulada;
		var promedio=document.getElementById('promedio')=promedio;

		respuesta=prompt("Desea poner otro numero")
		}
		 


}//FIN DE LA FUNCIÓN