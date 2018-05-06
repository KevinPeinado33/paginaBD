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

//creacion de productos por buffet
var listaBuffet1=[];

var objcomida1={
	"nombre":"Pollo a la Brasa",
	"cantidad": 12,
	"cocinero":"Marco Buleggi",
	"costo": 18.5,
	"calidad": "premium"
}
var objcomida2={
	"nombre":"Arroz con pollo",
	"cantidad": 14,
	"cocinero":"Chefini Misansio",
	"costo": 24.70,
	"calidad": "premium"
}

var objcomida3={
	"nombre":"Aji de gallina",
	"cantidad": 8,
	"cocinero":"Marco Buleggi",
	"costo": 12,
	"calidad": "premium"
}

var objcomida4={
	"nombre":"Escabeche de pescado",
	"cantidad": 20,
	"cocinero":"Marcost lenin",
	"costo": 6.5,
	"calidad": "premium"
}

var objcomida5={
	"nombre":"Lomo saltado",
	"cantidad": 5,
	"cocinero":"Spider man",
	"costo": 25,
	"calidad": "premium"
}

listaBuffet1.push(objcomida1);
listaBuffet1.push(objcomida2);
listaBuffet1.push(objcomida3);
listaBuffet1.push(objcomida4);
listaBuffet1.push(objcomida5);

alert(JSON.stringify(listaBuffet1));

var tb = document.getElementById("tabla");
var cont = 0;
function listarB1(){
	var foo = listaBuffet1.map(function(bar) {
		var n = tb.rows.length;
		var row = tb.insertRow(n);
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


/**
* Termina la parte mi script
* Dueño: raul peinado
*/
