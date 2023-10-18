//tipos primitivos

//boolean
var vouf = false;
console.log(typeof vouf);

//number
var numeroqualquer = 1;
console.log(typeof numeroqualquer);

//string
var nome = "Raphael";
console.log(typeof nome);

//como declarar
var variavel = "Raphael";
variavel = "Yuji";
console.log(variavel);

let variavel2 = "Raphael";
variavel2 = "Yuji";
console.log(variavel2);

const constante = "Raphael";
constante = "Yuji";
console.log(constante);

var escopoglobal = "global";
console.log(escopoglobal);

function escopolocal() {
    let escopolocalinterno = "interno";
    console.log(escopolocalinterno);
}
escopolocal();

//atribuição

var atribuicao = "Yuji";

//comparação

var comparacao = "0" == 0;
console.log(comparacao);

//comparacao idêntica
var comparacaoidentica = "0" === 0;
console.log(comparacaoidentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoreal = 6 / 2;
console.log(divisaoreal);

// divisão inteira
var divisaointeira = 5 % 2;
console.log(divisaointeira);

//potenciação
var potenciaocao = 2 ** 10;
console.log(potenciaocao);
//maior que
var maiorque = 5 > 2;
console.log(maiorque);

//menor que
var menorque = 5 > 2;
console.log(menorque);

//maior igual que
var maiorouigual = 5 >= 2;
console.log(maiorouigual);

//menor igual que
var menorouigual = 5 <= 2;
console.log(menorouigual);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);
