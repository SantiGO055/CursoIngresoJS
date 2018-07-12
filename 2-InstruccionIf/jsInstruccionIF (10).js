function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.round(Math.random()*10);
	alert(numero);
	if (numero<5) {
		alert("Vamos, la proxima se puede");
	}
	else{
		if (numero<9) {
			alert("APROBÓ");
		}
		else{
			alert("EXCELENTE");
			}

	}


}//FIN DE LA FUNCIÓN