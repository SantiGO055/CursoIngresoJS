/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;
	numero1=parseInt(numero1); /*Me habia olvidado de asignar el parseInt a numero1 entonces funcionaba pero me concatenaba los numeros, no los sumaba*/
	numero2=parseInt(numero2);
	
        	resultado=(numero1+numero2);
	alert("La suma de los numeros es: "+resultado);
}