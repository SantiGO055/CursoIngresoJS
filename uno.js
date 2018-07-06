
function mostrar()
{
	var numero1;
	var numero2;
	var numero3;
	var suma;
	var promedio;
	var resta;
	numero1=prompt("Ingrese un numero");
	numero2=prompt("Ingrese otro numero");
	numero3=prompt("Ingrese otro numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);
	suma=(numero1+numero2+numero3);
	promedio=(suma)/3;
	resta=numero1-numero2-numero3;
	alert("La suma de los numeros es "+suma+" el promedio es "+promedio+" la resta de los numeros es "+resta);
}










/*
Se ingresan tres numeros, informar en un solo alert la suma, el promedio, y la resta de los numeros tal cual como fueron ingresados
*/