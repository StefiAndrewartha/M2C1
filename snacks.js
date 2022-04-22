var edad = 20;
var edadMaxima = 89;
var snackFavorito = "Chocolate";
var snacksPorDia = 7;
var diasRestantes = (edadMaxima * 365) - (edad * 365);
var snacksPorComer = diasRestantes * snacksPorDia;
var precioChocolate = 20;
alert(`Necesitarás ${snacksPorComer} snacks para que te alcancen hasta los ${edadMaxima} años`);
document.write(`<h2>Necesitaras ${snacksPorComer} snacks para que te alcancen hasta los ${edadMaxima} años </h2>`)
var costo = precioChocolate * snacksPorComer;
alert("Gastaras " + costo + " en snacks por el resto de tu vida");
document.write(`<h3> Gastarás $ ${costo} en snacks por el resto de tu vida </h3>`)