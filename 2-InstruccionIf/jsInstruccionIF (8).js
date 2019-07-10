function mostrar()
{
//tomo la edad  

	var edad=document.getElementById('edad').value;
    var civil=document.getElementById('estadoCivil').value;

    if(edad<18 && civil!="Soltero"){alert("No hacer anda");}
    else if(edad>18 && civil=="Soltero"){alert("Es mayor pero es soltero")}


}//FIN DE LA FUNCIÓN