
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
                console.log("OPeração inválida.")
        }
}

function lojas (tipoDaLoja){
    let opcao = "sim";
    if (tipoDaLoja === 1){
        while (opcao === "sim"){
            let nomeProduto = prompt ("Digite o nome do produto");
            let valorProduto = prompt ("Digite o valor do produto.");
            registroDasLojas(nomeProduto, valorProduto);
            carrinho(valorProduto);
            opcao = prompt("Você deseja continuar comprando nessa loja ?");
            if (opcao === "não" || opcao === "nao"){
                menuDeEscolhas();
            }
        }
       
    }else if (tipoDaLoja === 2){
         while (opcao === "sim"){
            let nomeProduto = prompt ("Digite o nome do produto");
            let valorProduto = prompt ("Digite o valor do produto.");
            registroDasLojas(nomeProduto, valorProduto);
            carrinho(valorProduto);
            opcao = prompt("Você deseja continuar comprando nessa loja ?");
            if (opcao === "não" || opcao === "nao"){
                menuDeEscolhas();
            }
        }
       
 
    }else if (tipoDaLoja === 3){
         while (opcao === "sim"){
            let nomeProduto = prompt ("Digite o nome do produto");
            let valorProduto = prompt ("Digite o valor do produto.");
            registroDasLojas(nomeProduto, valorProduto);
            carrinho(valorProduto);
            opcao = prompt("Você deseja continuar comprando nessa loja ?");
            if (opcao === "não" || opcao === "nao"){
                menuDeEscolhas();
            }
        }
       
    }

}
let arrayNomes = [];
let arrayValores = [];
function registroDasLojas (nome,valor){
    let codigoProduto;
    codigoProduto++;

}

function carrinho (){

}