function mostrar()
{
	var nota;
	var edad;
	var sexo;
	var contadorAlumnos=0;
	var contadorNota=0;
	var promedio;
	var acumuladorNota=0;
	var maximo;
	var minimo;
	var sexoNotaMasBaja;
	var varonesMayores=0;
	var sexoMasJoven;
	var notaMasJoven;
	var masJoven;
	var primerMujer;
	var edadPrimerMujer;
	var notaPrimerMujer;
	var acumuladorMujer=0;
	var notaPrimerMujer;
	var existeMujer;
	while(contadorAlumnos<5){
		nota=prompt("Ingrese una nota");
		nota=parseInt(nota);
		contadorNota=contadorNota+nota; //para calcular promedio
		acumuladorNota++;
		while(nota<0 || nota>10){
			nota=prompt("Ingrese una nota");
			nota=parseInt(nota);
		}
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		while(edad<0 || edad>100){
			edad=prompt("Ingrese la edad");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese el sexo. M ó F");
		
		while(sexo!='m' && sexo!='f'){
			sexo=prompt("Ingrese el sexo. M ó F");
		}

		if (sexo=='f' && acumuladorMujer==0) {
			acumuladorMujer++;
			edadPrimerMujer=edad;
			notaPrimerMujer=nota;
			existeMujer=true;
		}

		if (contadorAlumnos==0) {
			minimo=nota;
			sexoNotaMasBaja=sexo;
			sexoMasJoven=sexo;
			notaMasJoven=nota;
			masJoven=edad;
			
		}
		else if (nota<minimo) {
			minimo=nota;
			sexoNotaMasBaja=sexo;
		}
		if (edad>18) {
			if (nota>=6) {
				varonesMayores++;
			}
		}

		if (edad<masJoven) {
			sexoMasJoven=sexo;
			notaMasJoven=nota;
			masJoven=edad;
		}
		

	contadorAlumnos++;
	}
	promedio=contadorNota/acumuladorNota;
	alert("El promedio de las notas es "+promedio);
	alert("La nota mas baja es "+minimo+" y el sexo de esa persona es "+sexoNotaMasBaja);
	alert("La cantidad de varones mayor a 18 años y que su nota fue mayor a 6 es de "+varonesMayores);
	alert("La nota de la persona mas joven es "+notaMasJoven+" y el sexo es "+sexoMasJoven);
	
	if (existeMujer) {
			alert("La edad de la primera mujer ingrsada es "+edadPrimerMujer+" y la nota es "+notaPrimerMujer);
		}
	else{
		alert("No existe mujeres");
	}

}
