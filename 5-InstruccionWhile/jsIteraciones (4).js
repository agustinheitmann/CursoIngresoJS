function mostrar()
{
/*
	var numero = prompt("ingrese un número entre 0 y 10.");
	
	
	while (numero== 0 || numero>9)

	{
		numero=prompt("Error; Ingrese numero del 1 al 10")
	}
	
	document.getElementById('Numero').value=numero;
*/	

	var numero;

	do
		{
			numero=prompt("Ingrese un numero del 0 al 9");
			document.getElementById('Numero').value=numero;
		}

	while(numero==0 || numero>9);


}//FIN DE LA FUNCIÓN