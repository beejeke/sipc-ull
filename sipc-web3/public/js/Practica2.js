/*Practica 2 SIPC
AUTOR : Omar Mendo Mesa
Creación de landing page
ARCHIVO JS*/

//Función que chequea los campos de nombre,apellidos,facultad,grado y curso.
function comprobar(){
  //Comprueba si los campos están vacios y muestra un error para cada campo.
    if( document.getElementById("nombre").value == null || document.getElementById("nombre").value.length == 0){
      alert("[ERROR] Campo del nombre vacio, intentelo de nuevo");
      return false;

    }else if( document.getElementById("apellidos").value == null || document.getElementById("apellidos").value.length == 0){
      alert("[ERROR] Campo del apellidos vacio, intentelo de nuevo");
      return false;

    }else if( document.getElementById("email").value == null || document.getElementById("email").value.length == 0){
      alert("[ERROR] Campo del email vacio, intentelo de nuevo");
      return false;

    }else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(document.getElementById("email").value))){
       alert("[ERROR] La dirección de email es incorrecta");
       return false;

    }else if( document.getElementById("telefono").value == null || document.getElementById("telefono").value.length == 0){
      alert("[ERROR] Campo del telefono vacio, intentelo de nuevo");
      return false;

    }else if (!(/^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/.test(document.getElementById("telefono").value))){
       alert("[ERROR] El telefono introducido es incorrecto");
       return false;

    }else if(!document.getElementById("general").checked && !document.getElementById("pass").checked && !document.getElementById("vip").checked){
      alert("[ERROR] No se ha seleccionado ningún tipo de entrada, intentelo de nuevo");
      return false;
    }

      return true;

}

//Funcion en js que muestra la imagen del tick
function MostrarCaja(){

	document.getElementById("tick").style.visibility ='visible';

}

//Funcion en js que muestra la imagen de la cara sonriente
function Mostrarsmile() {

    document.getElementById("smile").style.visibility ='visible';

}

//Funcion en js que muestra la imagen de la cara triste
function Mostrarsad() {

    document.getElementById("sad").style.visibility ='visible';

}

function cambiarPestanna(pestannas,pestanna) {

    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);

    // Obtiene las divisiones que tienen el contenido de las pestañas.
    cpestanna = document.getElementById('c'+pestanna.id);
    listacPestannas = document.getElementById('contenido'+pestannas.id);

    i=0;
    // Recorre la lista ocultando todas las pestañas y restaurando el fondo
    // y el padding de las pestañas.
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
 }

    $(document).ready(function(){
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        // cambia el color de la pestaña y aumenta el padding para que tape el
        // borde superior del contenido que esta juesto debajo y se vea de este
        // modo que esta seleccionada.
        $(cpestanna).css('display','');
        $(pestanna).css('background','dimgray');
        $(pestanna).css('padding-bottom','2px');
});

}
