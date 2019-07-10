function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero=Math.floor(Math.random()*10)+1

		if (numero=9 && numero==10)
		{alert("Excelente");}
		else if (numero>=4 || numero<=8)
		{alert("Aprobaste");}
		else{alert("Reprobaste")}

}//FIN DE LA FUNCIÓN