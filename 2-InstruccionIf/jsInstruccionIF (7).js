function mostrar()
{
//tomo la edad  
	var edad, estadocivil;
	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;
	if (estadocivil != 'Soltero' && edad<18) {
		alert("Es muy pequeño para NO ser soltero");

	}
	


}//FIN DE LA FUNCIÓN