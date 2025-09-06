/*
Funcionamento dos arreys:
Cada  índices dos arrays "arrayNomes" e "arrayValores" estão correlacionados diretamente.
Ou seja, o nome do produto que está salvo em "arrayNomes[0]" tem o seu respectivo valor salvo em "arrayValores[0]"
*/
let arrayLoja = ["Vestuário", "Perfumaria", "Loja de Calçados"];
let arrayNomes = [];
let arrayValores = [];
let totalLoja = [0,0,0];
let codigoProduto;

         menuDeEscolhas ();
function menuDeEscolhas (){
    let escolha = Number(prompt(`Digite o que deseja fazer a seguir
        1- Ir loja de roupas;
        2- Ir a perfumaria;
        3- Ir a loja de calçados;
        0- Encerrar operação.`));

        switch (escolha){
            case 1:
                escolha = 0;
                lojas(escolha);
                break;
            case 2:
                escolha = 1;
                lojas(escolha);
                break;
            case 3:
                escolha = 2;
                lojas(escolha);
                break;
            case 0:
                escolha = 5;
                lojas(escolha);
                break;
            default:
                console.log("Operação inválida.")
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
        }else if (opcao === "sim"){
            lojas (tipoDaLoja);
        }else{
            console.log("Resposta inválida.");
            menuDeEscolhas ();
        }
    }
       

}

//Armazenamento dos nomes e valores de cada produto em cada loja
function carrinho (opcaoLoja, nome, valor){
    codigoProduto++;  
    arrayLoja [opcaoLoja];
    arrayNomes.push (nome);
    arrayValores.push (valor);
    totalLoja [opcaoLoja] = (totalLoja[opcaoLoja] + valor);
    
    let mostrarResultado =  `Relatório de compra:
    Produto: ${arrayNomes[codigoProduto]}
    Valor: ${arrayValores[codigoProduto]}
    Total gasto em "${arrayLoja[opcaoLoja]}: ${totalLoja}"`;

    return mostrarResultado;
}


function encerrarOperacao (){

}