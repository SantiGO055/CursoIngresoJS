function mostrar()
{

	var numero;
	var divisores=0;
	var numeroAnterior;
	var numerosRecorridos;
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	for(numerosRecorridos=numero;numerosRecorridos>1;numerosRecorridos--)
	{
			divisores=0;
			for (numeroAnterior=numerosRecorridos-1; numeroAnterior>1 ;numeroAnterior--) {		
	//devuelve un 0 cuando es primo
			if (numerosRecorridos%numeroAnterior==0) { 
			divisores++; //encontre un divisor
			break;
			}	
					
		}
		if (divisores==0) {
			console.log("El numero es primo: "+numerosRecorridos);
			}
	}



}//FIN DE LA FUNCIÓN