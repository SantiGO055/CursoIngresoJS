/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt("Ingrese su nombre");
	document.getElementById('elNombre').value=nombre;

	//Uso la ventana que ve el usuario para mostrar su nombre
	//Interactuo con el usuario para no usar alert
}

