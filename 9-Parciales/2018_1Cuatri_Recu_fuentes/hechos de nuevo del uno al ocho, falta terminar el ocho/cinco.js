function mostrar()
{
	var dia;
	var mensaje;
	dia=prompt("Ingrese un dia");
	switch(dia){
		case 'lunes':
		mensaje=("A trabajar");
		break;
		case 'martes':
		mensaje=("A trabajar");
		break;
		case 'miercoles':
		mensaje=("A trabajar");
		break;
		case 'jueves':
		mensaje=("A trabajar");
		break;
		case 'viernes':
		case 'sabado':
		case 'domingo':
		mensaje=("Buen finde!");
		break;
		default:
		mensaje=("No es un dia valido");
		break;

	}
	alert(mensaje);
}
