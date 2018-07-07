function mostrar()
{
//tomo la edad  
var edad, estadocivil;
	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;
	if (estadocivil != 'Soltero' && edad<18) {
	}
	else{
		if (estadocivil == 'Soltero' && edad>17) {
			alert("Es soltero y no es menor");
		}

	}
	


}//FIN DE LA FUNCIÓN