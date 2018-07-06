function mostrar()
{
	var dia;
	dia=prompt("Ingrese un dia de la semana escrito en minuscula");
	switch (dia){
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
			alert("A trabajar");
			break;
		case "viernes":
			alert("Buen finde");
			break;
		case "sabado":
			alert("Buen finde");
			break;
		case "domingo":
			alert("Buen finde");
			break;
		default:
			alert("No ingresaste un dia");
			break;

	}
}
