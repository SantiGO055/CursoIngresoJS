function mostrar()
{
	var numero1, numero2, mayor;
	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese otro numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	if (numero1==numero2) {
		numero1=numero1.toString();
		numero2=numero1.toString();
		alert(numero1+numero2);
	}
	if (numero1>numero2) {
		mayor=numero1-numero2;
		alert(mayor);
		}
		else {
			suma=numero1+numero2;
			alert(suma);
			if (suma>10) {
				
			}
		}

}
