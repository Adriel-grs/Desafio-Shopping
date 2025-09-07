/*
Funcionamento dos arreys:
Cada  índices dos arrays "arrayNomes" e "arrayValores" estão correlacionados diretamente.
Ou seja, o nome do produto que está salvo em "arrayNomes[0]" tem o seu respectivo valor salvo em "arrayValores[0]"
*/
let arrayLoja = ["Vestuário", "Perfumaria", "Loja de Calçados"];
let arrayNomes = [];
let arrayValores = [];
let totalLoja = [0,0,0];


         menuDeEscolhas ();
function menuDeEscolhas (){
    let escolha = Number(prompt(`Digite o que deseja fazer a seguir
        1- Ir loja de roupas;
        2- Ir a perfumaria;
        3- Ir a loja de calçados;
        0- Encerrar operação.`));

       if (escolha === 1){
        escolha = 0;
        lojas (escolha);
       }else if (escolha === 2){
        escolha = 1;
        lojas (escolha);
       }else if (escolha === 3){
        escolha = 2;
        lojas (escolha);
       }else if (escolha === 0){
        encerrarOperacao ();
       }else{
        console.log ("OPeração inválida")
       }
}

//Aqui realiza o redirecionamento com base nas escolhas que foram feitas anteriormente, cada escolha está relacionada a uma loja.
function lojas (tipoDaLoja){
    let opcao = "sim";

    while (opcao === "sim"){
        let nomeProduto = prompt ("Digite o nome do produto");
        let valorProduto = Number(prompt ("Digite o valor do produto."));
        let chamado = carrinho(tipoDaLoja, nomeProduto, valorProduto);
        console.log(chamado);

        opcao = prompt("Você deseja continuar comprando nessa loja ?");
        if (opcao === "não" || opcao === "nao"){
            menuDeEscolhas ();
            return;
        }else if (opcao !== "sim"){
            console.log("Resposta inválida.");
            menuDeEscolhas ();
            return;    
        }
    }
       

}

//Armazenamento dos nomes e valores de cada produto em cada loja
function carrinho (opcaoLoja, nome, valor){

    arrayNomes.push (nome);
    arrayValores.push (valor);
    totalLoja [opcaoLoja] = (totalLoja[opcaoLoja] + valor);

    let mostrarResultado = `Relatório de compra:
    Produto: ${arrayNomes[arrayNomes.length-1]}
    Valor: ${arrayValores[arrayValores.length-1]}
    Total gasto em "${arrayLoja[opcaoLoja]}" : ${totalLoja[opcaoLoja]}`;

    return  mostrarResultado ;
    
}


function encerrarOperacao (){

}

function editarProduto (){

}
// Função callBack. É um tipo de função que entra como parâmetro para outra função,
//e dentro do código desta outra função ela é executada.