/*
1-cantidad mujeres=2
2-cantidad hombres=2
3-cantidad mayores de edad=3
4-cantidad menores de edad=1
5-la edad mas baja=16
6-la edad mas alta=81
7-promedio de edad mujeres=48
8-promedio edad hombres=29
9-promedio de edad total=38
10-nombre del mas vieje=fer
11-nombre del mas joven=maria
12-sexo del mas viejo=f
13-nombre de la mujer mas vieja=fer


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
	var promedioMujeres;
	var promedioHombres;
	var acumuladorEdadHombres=0;
	var acumuladorEdadMujeres=0;
	var edadMaximaMuj;
	var nombreMujerMasVieja;
	var sexoMasViejo;
	var acumuladorEdad;
	var acumuladorEdad=0;
	
	while(contador<4){
		nombre=prompt("Ingrese el nombre de la persona");
		sexo=prompt("Ingrese el sexo de la persona. M o F");
		edad=prompt("Ingrese la edad de la persona");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<0 || edad>100){
			edad=prompt("Ingrese la edad de la persona");
			edad=parseInt(edad);
			acumuladorEdad+=edad;
			contadorEdad++; //para promedio de edad total
		}
		while(sexo!='m' && sexo!='f'){
			sexo=prompt("Ingrese el sexo de la persona. M o F");
		}
		//punto 1 y 2
		if (sexo=='f') {
			contadorDeMujeres++;
			acumuladorEdadMujeres+=edad; //para luego hacer el promedio
			if (edad>edadMaximaMuj) {  // calculo el maximo de edad de mujeres
				edadMaximaMuj=edad;  
				nombreMujerMasVieja=nombre;
				}

		}
		else{
			contadorDeHombres++;
			acumuladorEdadHombres+=edad; //para luego hacer el promedio
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
			sexoMasViejo=sexo;
		}
		else{
			if (edad>maximo) {
				maximo=edad;
				sexoMasViejo=sexo;
			}
			if(edad<minimo){
				minimo=edad;
			}
		}
		


		contador++;

	}
	//calculo el promedio de la edad de hombres y mujeres
		
		promedioMujeres=acumuladorEdadMujeres/contadorDeMujeres; //promedio edad mujeres
		promedioHombres=acumuladorEdadHombres/contadorDeHombres; //promedio edad hombres
		promedioEdadTotal=edadTotal/
		
	document.write("1-La cantidad de mujeres es ====> "+contadorDeMujeres+"<br>");
	document.write("2-La cantidad de hombres es ====> "+contadorDeHombres+"<br>");
	document.write("3-La cantidad de mayores de edad es ====> "+contadorMayoresEdad+"<br>");
	document.write("4-La cantidad de menores de edad es ====> "+contadorMenoresEdad+"<br>");
	document.write("5-La edad mas baja es ====> "+minimo+"<br>");
	document.write("6-La edad mas alta es ====> "+maximo+"<br>");
	document.write("7-El promedio de edad de mujeres es ====> "+promedioMujeres+"<br>");
	document.write("7-El promedio de edad de hombres es ====> "+promedioHombres+"<br>");
	


}
