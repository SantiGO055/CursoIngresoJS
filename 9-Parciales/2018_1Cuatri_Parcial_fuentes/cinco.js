function mostrar()
{
	var planeta;
	planeta=prompt("Ingrese un planeta del sistema solar");
	switch (planeta) {
    case "mercurio":
        alert("Acá hace más calor");
        break;
    case "venus":
        alert("Acá hace más calor");
        break;
    case "tierra":
        alert("Acá vivimos");
        break;
    case "marte":
        alert("Acá hace mas frio");
        break;
    case "jupiter":
        alert("Acá hace mas frio");
        break;
    case "saturno":
        alert("Acá hace mas frio");
        break;
    case "urano":
        alert("Acá hace mas frio");
        break;
    case "neptuno":
        alert("Acá hace mas frio");
        break;
    default:
    	alert("No es un planeta valido");
	}

}
