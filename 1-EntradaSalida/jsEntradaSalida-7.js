/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	

function sumar(numero1, numero2)
{	


	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado=numero1+numero2;
	alert("La suma de los numeros es: "+resultado);
	}



function restar(numero1, numero2)
{
	
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado=numero1-numero2;
	alert("La resta de los numeros es: "+resultado);
	}



function multiplicar(numero1, numero2)
{ 
	
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado=numero1*numero2;
	alert("La suma de los numeros es: "+resultado);


	}



function dividir(numero1, numero2)
{
	
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado=numero1/numero2;
	alert("La division de los numeros es: "+resultado);
	}


