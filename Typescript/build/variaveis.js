"use strict";
/* variáveis */
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Raphael";
let idade = 10;
let altura = 1.7;
//tipos especiais null, undefined 
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void 
let retorno;
let retornoView = "qualquer coisa";
//objeto - sem previsibilidade  
let produto = {
    name: "Raphael",
    cidade: "Mogi das Cruzes",
    idade: 30,
};
let meuProduto = {
    nome: "Tênis",
    preco: 109.99,
    unidades: 10,
};
// arrays / vetores
let dados = ["Raphael", "Yuji", "Nakano"];
let dados2 = ["Raphael", "Yuji", "Nakano"];
//array de multitipos
let infos = ["Raphael", 24];
//tuplas - array multitipo com ordem específica
let boleto = ["agua conta", 70.99, 129301285];
//arrays métodos
dados.pop();
//datas
let aniversario = new Date("1999-08-21 21:12");
console.log(aniversario.toString());
