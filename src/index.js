//Declaração das Variáveis
let nomeDoHeroi = "Agacet"
let quantExp = 10001
let nivelDoHeroi = ""

console.log("Qual o nível do Herói " + nomeDoHeroi + "?")

//Estrutura Condicional If responsável por definir o nível do herói com base na quantidade de experiência.
if(1000 > quantExp){
    nivelDoHeroi = "Ferro"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}else if (quantExp >= 1000 && 2000 >= quantExp) {
    nivelDoHeroi = "Bronze"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}else if (quantExp >= 2001 && 5000 >= quantExp) {
    nivelDoHeroi = "Prata"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}else if (quantExp >= 5001 && 7000 >= quantExp) {
    nivelDoHeroi = "Ouro"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}else if (quantExp >= 7001 && 8000 >= quantExp) {
    nivelDoHeroi = "Platina"
    console.log("O Heroi de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}else if (quantExp >= 8001 && 9000 >= quantExp) {
    nivelDoHeroi = "Ascendente"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}else if (quantExp >= 9001 && 10000 >= quantExp) {
    nivelDoHeroi = "Imortal"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}else{
    nivelDoHeroi = "Radiante"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
}