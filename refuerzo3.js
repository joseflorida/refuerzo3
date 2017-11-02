var num = prompt ('Escribe un numero:' );
var estrella="";

while (num <2 || num >6) {
	alert("Los numeros son entre 2 y 6");
  num=prompt("Introduce un numeor entre 2 y 6");

}
console.log("num:", num);
for (var i=1; i <=num; i++){
	estrella=estrella+"*";
	console.log(estrella);
}