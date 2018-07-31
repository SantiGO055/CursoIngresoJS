/*
cantidad mujeres=2
cantidad hombres=2
cantidad mayores de edad=3
cantidad menores de edad=1
la edad mas baja=16
la edad mas alta=81
promedio de edad mujeres=48
promedio edad hombres=29
promedio de edad total=38
nombre del mas vieje=fer
nombre del mas joven=maria
sexo de lmas viejo=f
nombre de la mujer mas vieja=fer


Ingreso estos datos por prompt
prompt, validar sexo entre f o m
prompt, parseint, while >0 && <100 validar edad entre 0 y 100 y isNaN
JOSE-M-25
MARIA-F-16
JESUS-M-33
FER-F-81
*/
function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador=0;
	var contadorDeMujeres=0;
	var contadorDeHombres=0;
	var contadorMayoresEdad=0;
	var contadorMenoresEdad=0;
	var promedio;
	var acumuladorEdadHombres++;
	var acumuladorEdadMujeres++;
	while(contador<4){
		nombre=prompt("Ingrese el nombre de la persona");
		sexo=prompt("Ingrese el sexo de la persona. M o F");
		edad=prompt("Ingrese la edad de la persona");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<0 || edad>100){
			edad=prompt("Ingrese la edad de la persona");
			edad=parseInt(edad);
		}
		while(sexo!='m' && sexo!='f'){
			sexo=prompt("Ingrese el sexo de la persona. M o F");
		}
		//punto 1 y 2
		if (sexo=='f') {
			contadorDeMujeres++;
			acumuladorEdadMujeres++; //para luego hacer el promedio
			}
		else{
			contadorDeHombres++;
			acumuladorEdadHombres++; //para luego hacer el promedio
		}
		//punto 3 y 4
		if (edad>17) {
			contadorMayoresEdad++;
		}
		else{
			contadorMenoresEdad++;
		}
		//punto 5 y 6
		if (contador==0) {
			maximo=edad;
			minimo=edad;
		}
		else{
			if (edad>maximo) {
				maximo=edad;
			}
			if(edad<minimo){
				minimo=edad;
			}
		}
		//calculo el promedio de la edad de hombres y mujeres
		if (sexo='f') {
			promedio=acumuladorEdadMujeres/contadorDeMujeres; //verificar y probar si esta bien
		}


		contador++;

	}
	document.write("1-La cantidad de mujeres es ====> "+contadorDeMujeres+"<br>");
	document.write("2-La cantidad de hombres es ====> "+contadorDeHombres+"<br>");
	document.write("3-La cantidad de mayores de edad es ====> "+contadorMayoresEdad+"<br>");
	document.write("4-La cantidad de menores de edad es ====> "+contadorMenoresEdad+"<br>");
	document.write("5-El promedio de edad de mujeres es ====> "+promedio+"<br>");

}
