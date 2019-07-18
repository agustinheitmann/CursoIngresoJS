function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';


	while(respuesta=="si")

		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);

			while(isNaN(numero))
				
				{
					numero=prompt("Ingrese un numero valido");
					numero=parseInt(numero);
				}	

				if(numero>0)
				{ 
					positivo=numero + positivo;
				}
				
				else
				{
					negativo=numero*negativo;			
				}			
		
		respuesta=prompt("Desea seguir agregando?");	
		}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN