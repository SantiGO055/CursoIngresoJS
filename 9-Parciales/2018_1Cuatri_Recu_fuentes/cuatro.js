function mostrar()
{
	var numero1, numero2,resultado;

	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese otro numero");
	if (numero1==numero2) {
		resultado=numero1+numero2;
		alert(resultado);
	}
	else{
		if (numero1>numero2) {
			resultado=(numero1/numero2);
			alert(resultado);
			}
			else{
				numero1=parseInt(numero1);
				numero2=parseInt(numero2);
				resultado=numero1+numero2;
				
				if (resultado<50) {
					alert("La suma es "+resultado+" y es menor a 50");
				}
			}
		
	}
	
	

}
