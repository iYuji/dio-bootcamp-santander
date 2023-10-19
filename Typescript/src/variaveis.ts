/* variáveis */

//tipos primitivos: boolean, number, string
    let ligado:boolean = false;
    let nome:string = "Raphael";
    let idade: number = 10;
    let altura: number = 1.7;

//tipos especiais null, undefined 
    let nulo : null = null;
    let indefinido: undefined = undefined;

//tipos abrangentes: any, void 
    let retorno:void;
    let retornoView:any = "qualquer coisa";

//objeto - sem previsibilidade  
let produto:object = {
    name:"Raphael",
    cidade:"Mogi das Cruzes",
    idade: 30,
};

//objeto tipado - com previsibilidade
type ProdutoLoja={
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto: ProdutoLoja ={
nome: "Tênis",
preco: 109.99,
unidades:10,
};

// arrays / vetores
let dados:string[] = ["Raphael", "Yuji", "Nakano"];
let dados2: Array<string> = ["Raphael", "Yuji", "Nakano"];

//array de multitipos
let infos: (string | number)[]= ["Raphael", 24];

//tuplas - array multitipo com ordem específica
let boleto:[string,number,number] = ["agua conta", 70.99, 129301285];

//arrays métodos
dados.pop();

//datas
let aniversario:Date = new Date("1999-08-21 21:12");
console.log(aniversario.toString());
