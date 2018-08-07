function mostrar()
{
	var nota;
	nota=prompt("Ingrese la nota");
	nota=parseInt(nota);
	switch(nota){
	case 0:
	case 1:
	case 2:
	case 3:
	mensaje='La proxima se puede';
	break;
	case 4:
	case 5:
	case 6:
	mensaje='Raspando';
	if (nota<5) {
		mensaje='Debes preocuparte mas';
	}
	break;
	case 7:
	case 8:
	case 9:
	case 10:
	mensaje='Aprobo!';
	if (nota>8) {
		mensaje='Muy bien!'
	}
	break;
	default:
	mensaje='La nota ingresada no es valida';
	break;

	}
	alert(mensaje);
}
