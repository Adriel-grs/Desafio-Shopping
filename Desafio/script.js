
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
                lojas(escolha);
                break;
            case 2:
                lojas(escolha);
                break;
            case 3:
                lojas(escolha);
                break;
            case 0:
                lojas(escolha);
                break;
            default:
                console.log("Operação inválida.")
        }
}


function lojas (tipoDaLoja){
    let opcao = "sim";
    if (tipoDaLoja === 1){
        while (opcao === "sim"){
            let nomeProduto = prompt ("Digite o nome do produto");
            let valorProduto = Number(prompt ("Digite o valor do produto."));
            carrinho(tipoDaLoja, nomeProduto, valorProduto);
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
       
    }else if (tipoDaLoja === 2){
         while (opcao === "sim"){
            let nomeProduto = prompt ("Digite o nome do produto");
            let valorProduto = Number(prompt ("Digite o valor do produto."));
            carrinho(tipoDaLoja, nomeProduto, valorProduto);
            opcao = prompt("Você deseja continuar comprando nessa loja ?");
            if (opcao === "não" || opcao === "nao"){
                menuDeEscolhas ();
            }else if (opcao === "sim"){
                lojas (tipoDaLoja);
            }else {
                console.log("Resposta inválida");
                menuDeEscolhas ();
            }
        }
       
 
    }else if (tipoDaLoja === 3){
         while (opcao === "sim"){
            let nomeProduto = prompt ("Digite o nome do produto");
            let valorProduto = Number(prompt ("Digite o valor do produto."));
            carrinho(tipoDaLoja, nomeProduto, valorProduto);
            opcao = prompt("Você deseja continuar comprando nessa loja ?");
            if (opcao === "não" || opcao === "nao"){
                menuDeEscolhas();
            }else if (opcao === "sim"){
                lojas (tipoDaLoja);                
            }else {
                console.log ("Resposta inválida");
                menuDeEscolhas ();
            }
        }
       
    }

}


function carrinho (opcaoLoja, nome, valor){
    codigoProduto++;
    switch (opcaoLoja){
        case 1:
            arrayLoja [0];
            arrayNomes [codigoProduto] = nome;
            arrayValores [codigoProduto] = valor; 
            totalLoja [0] = (totalLoja[0] + valor);
            break;
        case 2:
            arrayLoja [1];
            arrayNomes [codigoProduto] = nome;
            arrayValores [codigoProduto] = valor;
            totalLoja [1] = (totalLoja[1] + valor);
            break;
        case 3:
            arrayLoja [2];
            arrayNomes [codigoProduto] = nome;
            arrayValores [codigoProduto] = valor;
            totalLoja [2] = (totalLoja[2] + valor);
            break;    
    }
}


function encerrarOperacao (){

}