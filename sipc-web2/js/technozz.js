function validar() {
	var user = document.getElementById("user");
	var email = document.getElementById("email");
	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
	var impresion = document.getElementsByName("impresion");
	var seleccionado = false;
	var aspectos = document.getElementById("aspectos").selectedIndex;
	var elementoCHECK = document.getElementById("terminos");


	if(user.value.length == 0)
	{
    	alert("Debe ingresar el Usuario");
    	user.focus();
    	return false;
	}
	if(email.value.length == 0)
	{
		alert("Por favor, ingrese su Email");
		email.focus();
		return false;
	}

	if(pass1.value.length < 6)
	{
		alert("Debe ingresar una contraseña de mas de 6 caracteres");
		pass1.focus();
		return false;
	}
	else if(pass1.value != pass2.value)
	{
		alert("Las contraseñas no coinciden");
		pass2.focus();
		return false;
	}

	for(var i = 0; i<impresion.length; i++)
	{
		if(impresion[i].checked)
		{
			seleccionado = true;
		}
	}
	if(!seleccionado)
	{
		alert("Debes indicar tu impresión de la página");
		return false;
	}
	if(aspectos == 0 || aspectos == null)
	{
		alert("Por favor, seleccione un aspecto a mejorar");
		return false;
	}
	if(!elementoCHECK.checked)
	{
		alert("Debe aceptar los terminos y condiciones");
		return false;
	}
	return true;
}
