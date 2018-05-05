/**
* Aqui comienza la parte mi script
* Dueño: raul peinado
*/
function mostrarBuffet1(){
	var x = document.getElementById("pant");
	x.setAttribute('src', 'buffet1.html')
}

//creacion de productos por buffet
var listaBuffet1=[];

var objcomida1={
	"nombre":"Pollo a la Brasa",
	"cantidad": 12,
	"cocinero":"Marco Buleggi",
	"costo": 18.5,
	"Calidad": "premium"
}
var objcomida2={
	"nombre":"Arroz con pollo",
	"cantidad": 14,
	"cocinero":"Marco Buleggi",
	"costo": 24.70,
	"Calidad": "premium"
}

var objcomida3={
	"nombre":"Aji de gallina",
	"cantidad": 8,
	"cocinero":"Marco Buleggi",
	"costo": 12,
	"Calidad": "premium"
}

var objcomida4={
	"nombre":"Escabeche de pescado",
	"cantidad": 30,
	"cocinero":"Marco Buleggi",
	"costo": 6.5,
	"Calidad": "premium"
}

var objcomida5={
	"nombre":"Lomo saltado",
	"cantidad": 30,
	"cocinero":"Marco Buleggi",
	"costo": 25,
	"Calidad": "premium"
}

listaBuffet1.push(objcomida1);
listaBuffet1.push(objcomida2);
listaBuffet1.push(objcomida3);
listaBuffet1.push(objcomida4);
listaBuffet1.push(objcomida5);
console.log(JSON.stringify(listaBuffet1));

function listarComidas(){
	
	var mapiando = listaBuffet1.map(function(bar) {
		
	})
	alert("hola mundo");
}
/**
* Termina la parte mi script
* Dueño: raul peinado
*/