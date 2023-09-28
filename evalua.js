alert("Bienvenido a la página de JavaScript");
var nom = prompt("Ingresa tu nombre");
var correctas = parseInt=0;
var incorrectas = parseInt=0;
alert("Saludos, " + nom  + " Esta es la Trivia de la primavera.")

var preg1 = prompt("¿1 ¿En que departamento se encuentra el lago titicaca? \n A: Tacna \n B: Puno * \nC: Cusco" );
if (preg1 == "B"){
    correctas = 1;
}else{
    incorrectas = 1;
}

var preg2 = prompt("2. ¿Desde qué parte del Perú se pueden avistar ballenas jorobadas? \n A: Lima e Ica \n B: Arequipa y Tacna \n C: Piura y Tumbes *" );
if (preg2== "C"){
    correctas = 1;
}else{
    incorrectas = 1;
}
var preg3 = prompt("3 Plato típico de la Selva peruana \n A: Tacacho con cecina * \n B: Arroz con pollo \n C: Lomo saltado" );
if (preg3== "A"){
    correctas = 1;
}else{
    incorrectas = 1;
}

if(correctas>incorrectas){
    document.write("<p>Lo has hecho bien...</p>");
}else{
    document.write("<p>Vuelve a intentarlo... </p>");
}
document.write("Hiciste:" + correctas + "preguntas correctas")
