/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;

 	edad=prompt("Ingrese edad");
 	edad=parseInt(edad);
 	while (isNan(edad) || edad<18 || edad>90){
 		edad=prompt("Ingrese edad");
 		edad=parseInt(edad);
 	}
 	sexo=prompt("Ingrese sexo. M o F");
 	while (sexo!='M' && sexo!='F'){
 		sexo=prompt("Ingrese sexo. M o F");;
 	}
 	estadoCivil=prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	estadoCivil=parseInt(estadoCivil);
 	while (){
 		estadoCivil=prompt("Ingrese estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		estadoCivil=parseInt(estadoCivil);
 	}
 	
 	

 	estadoCivil=prompt("Ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	sueldoBruto=prompt("Ingrese edad entre 18 y 90 años inclusive");
 	legajo=prompt("Ingrese edad entre 18 y 90 años inclusive");
 	nacionalidad=prompt("Ingrese edad entre 18 y 90 años inclusive");
}
