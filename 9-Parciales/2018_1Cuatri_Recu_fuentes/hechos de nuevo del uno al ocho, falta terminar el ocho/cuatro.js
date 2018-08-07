function mostrar()
{
	var numero1;
	var numero2;
	var suma;

	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese otro numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if (numero1==numero2) {
		alert(numero1+""+numero2);
	}

	else if (numero1>numero2) {
		alert(numero1/numero2);
	}
	else{
		suma=numero1+numero2;
		if (suma<50) {
			alert("La suma es "+suma+" y es menor a 50");
		}
	}
	

}
