var nome = "Guilherme"
var resultado = document.getElementById("resultado") // Desafio Rafa 

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2 

//Desafio Gui
var soma = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre
var notaFinal = soma / 4

var notaFixada = notaFinal.toFixed(1)

//Desafio Rafa
resultado.innerHTML = "Bem vindo " + nome + "<br>"
resultado.innerHTML += "Nota final: " + notaFixada 

//Desafio Gui
if(notaFixada < 6){
  resultado.innerHTML += "<br>" + "Você foi reprovado"
} else {
  resultado.innerHTML += "<br>" + "Você foi aprovado"
}


console.log("Bem vindo " + nome)

/*Desafio Paulo!
console.log(((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1) )
*/

console.log(notaFixada)