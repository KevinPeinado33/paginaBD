/**
* Aqui comienza la parte mi script
* Dueño: raul peinado
*/
//de diego :,v
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav,{});

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators:false,
    height:600,
    transition:500,
    interval:5500
    
});




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
var objcomida1={
	"nombre":"Arroz con pollo",
	"cantidad": 14,
	"cocinero":"Marco Buleggi",
	"costo": 24.70,
	"Calidad": "premium"
}

var objcomida1={
	"nombre":"Aji de gallina",
	"cantidad": 8,
	"cocinero":"Marco Buleggi",
	"costo": 12,
	"Calidad": "premium"
}

var objcomida1={
	"nombre":"Escabeche de pescado",
	"cantidad": 30,
	"cocinero":"Marco Buleggi",
	"costo": 6.5,
	"Calidad": "premium"
}


/**
* Termina la parte mi script
* Dueño: raul peinado
*/
