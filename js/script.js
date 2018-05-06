/**
* Aqui comienza la parte mi script
* Dueño: raul peinado
*/
//de diego :,v
/**const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav,{});

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators:false,
    height:600,
    transition:500,
    interval:5500
    
});*/




function mostrarBuffet1(){
	var x = document.getElementById("pant");
	x.setAttribute('src', 'buffet1.html')
}
function mostrarBuffet2(){
	var x = document.getElementById("pant");
	x.setAttribute('src', 'buffet2.html')
}
function mostrarBuffet3(){
	var x = document.getElementById("pant");
	x.setAttribute('src', 'buffet3.html')
}

//creacion de productos por buffet1
var listaBuffet1=[];

var objcomidaA1={
	"nombre":"Pollo a la Brasa",
	"cantidad": 12,
	"cocinero":"Marco Buleggi",
	"costo": 18.5,
	"calidad": "premium"
}
var objcomidaA2={
	"nombre":"Arroz con pollo",
	"cantidad": 14,
	"cocinero":"Chefini Misansio",
	"costo": 24.70,
	"calidad": "premium"
}

var objcomidaA3={
	"nombre":"Aji de gallina",
	"cantidad": 8,
	"cocinero":"Marco Buleggi",
	"costo": 12,
	"calidad": "premium"
}

var objcomidaA4={
	"nombre":"Escabeche de pescado",
	"cantidad": 20,
	"cocinero":"Marcost lenin",
	"costo": 6.5,
	"calidad": "premium"
}

var objcomidaA5={
	"nombre":"Lomo saltado",
	"cantidad": 5,
	"cocinero":"Spider man",
	"costo": 25,
	"calidad": "premium"
}

listaBuffet1.push(objcomidaA1);
listaBuffet1.push(objcomidaA2);
listaBuffet1.push(objcomidaA3);
listaBuffet1.push(objcomidaA4);
listaBuffet1.push(objcomidaA5);

//alert(JSON.stringify(listaBuffet1));

var tb1 = document.getElementById("tabla1");
function listarB1(){
	var foo = listaBuffet1.map(function(bar) {
		var n = tb1.rows.length;
		var row = tb1.insertRow(n);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		var cell4 = row.insertCell(4);
		for(var i  = 0; i<listaBuffet1.length; i++){
			cell0.innerHTML=bar.nombre;
			cell1.innerHTML=bar.cantidad;
			cell2.innerHTML=bar.cocinero;
			cell3.innerHTML=bar.costo;
			cell4.innerHTML=bar.calidad;
		}
	})
}

//termino para el buffet1

//comienxo para el buffete2
var listaBuffet2=[];

var objcomidaB1={
	"nombre":"Pollo a la Brasa",
	"cantidad": 12,
	"cocinero":"Marco Buleggi",
	"costo": 18.5,
	"calidad": "premium"
}
var objcomidaB2={
	"nombre":"Arroz con pollo",
	"cantidad": 14,
	"cocinero":"Chefini Misansio",
	"costo": 24.70,
	"calidad": "premium"
}

var objcomidaB3={
	"nombre":"Aji de gallina",
	"cantidad": 8,
	"cocinero":"Marco Buleggi",
	"costo": 12,
	"calidad": "premium"
}

var objcomidaB4={
	"nombre":"Escabeche de pescado",
	"cantidad": 20,
	"cocinero":"Marcost lenin",
	"costo": 6.5,
	"calidad": "premium"
}

var objcomidaB5={
	"nombre":"Lomo",
	"cantidad": 5,
	"cocinero":"Spider man",
	"costo": 25,
	"calidad": "premium"
}

listaBuffet2.push(objcomidaB1);
listaBuffet2.push(objcomidaB2);
listaBuffet2.push(objcomidaB3);
listaBuffet2.push(objcomidaB4);
listaBuffet2.push(objcomidaB5);

//alert(JSON.stringify(listaBuffet1));

var tb2 = document.getElementById("tabla2");

function listarB2(){
	var foo = listaBuffet2.map(function(bar) {
		var n = tb2.rows.length;
		var row = tb2.insertRow(n);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		var cell4 = row.insertCell(4);
		for(var i  = 0; i<listaBuffet2.length; i++){
			cell0.innerHTML=bar.nombre;
			cell1.innerHTML=bar.cantidad;
			cell2.innerHTML=bar.cocinero;
			cell3.innerHTML=bar.costo;
			cell4.innerHTML=bar.calidad;
		}
	})
}
//termino para el buffet2

//comienzo para el buffet3
var listaBuffet3=[];

var objcomidaC1={
	"nombre":"Pollo a la Brasa",
	"cantidad": 12,
	"cocinero":"Marco Buleggi",
	"costo": 18.5,
	"calidad": "premium"
}
var objcomidaC2={
	"nombre":"Arroz con pollo",
	"cantidad": 14,
	"cocinero":"Chefini Misansio",
	"costo": 24.70,
	"calidad": "premium"
}

var objcomidaC3={
	"nombre":"Aji de gallina",
	"cantidad": 8,
	"cocinero":"Marco Buleggi",
	"costo": 12,
	"calidad": "premium"
}

var objcomidaC4={
	"nombre":"Escabeche de pescado",
	"cantidad": 20,
	"cocinero":"Marcost lenin",
	"costo": 6.5,
	"calidad": "premium"
}

var objcomidaC5={
	"nombre":"Lomo saltado",
	"cantidad": 5,
	"cocinero":"Spider man",
	"costo": 25,
	"calidad": "premium"
}

listaBuffet3.push(objcomidaC1);
listaBuffet3.push(objcomidaC2);
listaBuffet3.push(objcomidaC3);
listaBuffet3.push(objcomidaC4);
listaBuffet3.push(objcomidaC5);

//alert(JSON.stringify(listaBuffet1));

var tb3 = document.getElementById("tabla3");
function listarB3(){
	var foo = listaBuffet3.map(function(bar) {
		var n = tb3.rows.length;
		var row = tb3.insertRow(n);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		var cell4 = row.insertCell(4);
		for(var i  = 0; i<listaBuffet3.length; i++){
			cell0.innerHTML=bar.nombre;
			cell1.innerHTML=bar.cantidad;
			cell2.innerHTML=bar.cocinero;
			cell3.innerHTML=bar.costo;
			cell4.innerHTML=bar.calidad;
		}
	})
}

//termino para el buffet3

/**
* Termina la parte mi script
* Dueño: raul peinado
*/
