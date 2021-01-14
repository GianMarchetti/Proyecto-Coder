// CLASE 1 --------------------------VARIABLES---------------------------------------------------

// let nombre = prompt("Hola, como te llamas?")
// console.log("Hola " + nombre)

// let numero = 0
// let edad = prompt("Cuantos años tenes " + nombre + "?")
// console.log(0+parseInt(edad))

// let nombreCreador = "Gian"
// console.log("El creador de esta página es " + nombreCreador)


// let amigos = "si";
// let amigos2 = prompt("Quieres ser amigo del creador de esta página?");
// if(amigos2 === amigos){
//     console.log("Ahora " + nombre + " y " + nombreCreador + " son amigos");
// }
// else {
//     console.log(nombre + " y " + nombreCreador + " no son amigos");
// }
// alert(`${nombre1} y ${nombre2} son amigos`)

// CLASE 2 --------------------------COMPARACIONES------------------------------------------------------------

// let saludo = "hola";
// let saludo1 = prompt("Hola "+ nombre + ", si nos saludas tendrás una sorpresa en la consola de la página.")
// if (saludo1 === saludo) {
//     console.log("Solo queriamos recordarte que te queremos!! Y muchas gracias por comprar en nuestra tienda!!");
// }
// else {
//     console.log("Aunque no nos hayas saludado te queremos y igual, gracias por comprar en nuestra tienda!");
// }

// let NumCam = 1000;
// let retira = parseInt(prompt("¿Qué cantidad en precio desea gastar?"));
// if (retira > NumCam) {
//     console.log("Al llevar mas de $1000 en camisetas obtiene una super oferta");
// }
// else if (retira < NumCam) {
//     NumCam -= retira;
//     console.log(`Usted quiere gastar ${retira} y le falta ${NumCam} para llegar a una super oferta`)
// }

// let numero1 = 10;
// let numero2 = 50;
// let numero3 = parseInt(prompt("Dime un numero y entre 1 y 100, si aciertas te ganas una promo"))
// if ((numero3 > numero1) && (numero3 < numero2)) {
//     console.log("Felicidades te ganaste un %40 de descuento en una prenda")
// }
// else {
//     console.log("Fallaste, vuelve a intentarlo la proxima vez que compres uno de nuestros productos. Buena Suerte!")
// }

// CLASE 3 ---------------------------FUNCIONES-------------------------------------------------------

// let zapas = ["KobeShoes", "Kobe1", "Kobe2", "Kobe3", "Kobe4", "Kobe5", "Kobe6", "Kobe7", "Kobe8"];
// for(let i=0; i<8; i++) {
//     if(i === 8){
//         console.log(zapas[i] + " estas zapatillas estan en promo!")
//         continue
//     }
//     if(i !== 0){
//         console.log(zapas[i] + " Zapatillas en stock")
//         continue
//     }
//     console.log(zapas[i])
// }


// let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// for(let i=0; i<7; i++) {
//     if(i === 6){
//         console.log(dias[i] + " es el último día de la semana!")
//         continue
//     }
//     if(i%2 !== 0){
//         console.log("el siguiente día es par:" + dias[i])
//         continue
//     }
//     console.log(dias[i]);
// }

// CLASE 4 ---------------------------FUNCIONES-------------------------------------------------------


// let operacion = "sumar"

// let modelo1 = prompt("Ingrese un modelo de zapatilla que le gustaría tener y en las cuales crees que jugarías mejor")
// let modelo2 = prompt("Ingrese otro modelo de zapatilla que le gustaría tener y en las cuales crees que jugarías mejor")

// let numero1 = Number(prompt(`Ingrese el primer numero, el cuál sería la cantidad de puntos que vos harias si tu vieras las ${modelo1}`));
// let numero2 = Number(prompt(`Ingrese el segundo número, el cuál sería la cantidad de puntos que vos harias si tu vieras las ${modelo2}`));

// let resultado;

// operar(numero1, numero2, operacion);

// function operar(n1, n2, op) {
// 	switch (op) {
// 		case "sumar":
// 			resultado = sumar(n1, n2);
// 			break;
// 		default:
// 			resultado = "No existe esa opción, intente nuevamente";
// 	}

// 	mostrarResultado(resultado);
// }

// function mostrarResultado(resultado) {
// 	console.log(`El resultado de la operación es: ${resultado}`)
// 	alert(`La suma de los puntos que harías es: ${resultado} y si llegas a gastar como mínimo esta cantidad, agredado de un cero al final (${resultado}0) te llevas un descuento del %23`)
// }
// function sumar(a, b) {
//     	return a + b;
//     }

// CLASE 6-----------------------------------------------------------------------------------------------------------------

// const dias = ["lunes", "martes", "miercoles"];
// let dias2 = new Array("jueves", "viernes", "sabado", "domingo");

// const semana = [...dias, ...dias2];
// console.log(semana)

// const Lebron = [17, 'nike', true, { precio: 8200, stock: "no disponible" },
//     [1, "dos", 3]
// ];
// console.log(Lebron)

// Lebron[3].stock = "disponible";
// // console.log(Lebron[3].stock)

// const tallesl = [...Lebron, "talle 35 a 45"]
// console.log(tallesl)


// CLASE 8 ---------------------------DOM-------------------------------------------------------

// document.body.style.backgroundColor = 'black'
// document.body.style.margin = '5px'

// console.log(document.body)

// const titulo = document.getElementById('Inicio')
// titulo.style.fontFamily = 'monospace'
// titulo.style.color = 'gold'

// const elementonuevo = document.createElement('div')
// var content = document.createTextNode("Mamba for ever");
// elementonuevo.appendChild(content);
// elementonuevo.className = 'newclass'
// elementonuevo.style.backgroundColor = 'red'
// document.body.appendChild(elementonuevo);
// console.log(elementonuevo)

// const pic = document.createElement('img')
// pic.src = 'imagenes/KOBE.jpg'
// pic.style.height = '200px'
// elementonuevo.appendChild(pic)

// let pref = prompt('¿Prefiere Zapatillas Jordan o Kobe?')
// if (pref === 'Jordan') {
//     document.body.style.backgroundColor = 'red'
// }else if (pref === 'Kobe') {
//     document.body.style.backgroundColor = 'purple'
// }

// CLASE 9 ----------------------------- EVENTOS ------------------------------------------------------
  
// function capturarEnter(e) {
//     if (event.which == 13 || event.keyCode == 13) {
//         console.log("Procesando datos");
//      }
//  }   

//     document.querySelector("#boton").addEventListener("click", frase);

//     function frase() {
//         document.querySelector("#frase").textContent = '"The most important thing is to try and inspire people so that they can be great at whatever they want to do."';
//     }

//     const acc = document.getElementsByClassName("accordion");
    
//     for (let i = 0; i < acc.length; i++) {
//       acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
    
//         let panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//           panel.style.display = "none";
//         } else {
//           panel.style.display = "block";
//         }
//       });
//     }

// CLASE 12 --------------------------------- JQUERY ---------------------------------------------------------------

window.addEventListener('load', function() {
    console.log('Load')
}) 

document.addEventListener('DOMContentLoaded', function (){
    console.log('DOMContentLoaded')
})


$('h1').click(function() {
    $('#carrito2').toggle();
})

// $('#eliminar').click(function () {
//     $('#seccion1').hide()
// })
// $('#eliminar2').click(function () {
//     $('#seccion2').hide()
// })
// $('#eliminar3').click(function () {
//     $('#seccion3').hide()
// })
// $('#btjs').click(function () {
//     $('#lista-carrito2').hide()
// })

// $('input').on('keypress', function(e) {
//     if(e.which == 13)
//     alert('Tus datos han sido enviados')
// })



// CLASE 14 ----------------------- AJAX-------------------------

$("button").click(function(){ 
	$.ajax({
	 url: "data/datos.json", //un archivo json con datos de usuarios: nombre, apellido, etc
	 dataType: "json",
	 success: function(response) {
	   $.each(response.usuarios, function(item) {
		 alert(item.nombre); 
	   });
	 }
	});
   
   });
 
   
   function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		myFunction(this);
	  }
	};
	xhttp.open("GET", "catalog.xml", true);
	xhttp.send();
  }
  function myFunction(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>MARCA</th><th>MODELO</th></tr>";
	var x = xmlDoc.getElementsByTagName("CD");
	for (i = 0; i <x.length; i++) { 
	  table += "<tr><td>" +
	  x[i].getElementsByTagName("MARCA")[0].childNodes[0].nodeValue +
	  "</td><td>" +
	  x[i].getElementsByTagName("MODELO")[0].childNodes[0].nodeValue +
	  "</td></tr>";
	}
	document.getElementById("demo").innerHTML = table;
  }