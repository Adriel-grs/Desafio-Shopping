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
        let valorProduto = parseFloat(prompt ("Digite o valor do produto."));
        let chamado = carrinho(tipoDaLoja, nomeProduto, valorProduto);
        console.log(chamado);

        opcao = prompt("Você deseja continuar comprando nessa loja ?").toLowerCase ();
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
    const montante = totalLoja.reduce (function(soma, atual){
        return  soma + atual;
    },0);
    //Aqui, a depender do valor total das compras, a compra ou vai ser recusada ou vai ser aprovada.
    //Caso reprovada, o usuário será redirecionado para editar as compras.
    if (montante === 1000){
        console.log (`Você ganhou um desconto de 15%.
            Valor nominal: ${montante}
            Valor com o desconto: ${montante - (montante*0.15)}
            COMPRA APROVADA!`);
        lanchonete ();
        return;
    }else if (montante === 850 ){
        console.log (`Valor total das compras: ${montante};
            COMPRA APROVADA !`);
        lanchonete ();    
        return;   
    }else if (montante > 1000){
        console.log (`Valor total das compras: ${montante};
            COMPRA REPROVADA !
            Tente Retirar algum produto.`);
        editarCarrinho (montante);    
        return;  
    }else if (montante < 850){
         console.log ("Compra aprovada, mas ainda dava pra gastar mais em !");
         lanchonete ();
        return;
    }else if (montante > 850 && montante < 1000 ){
        console.log ("Compra acima do valor combinado (R$ 850). Retire alguns itens, ou acrescente até chegar em R$ 1000");
        editarCarrinho (montante); 
        return;
    }else {
        console.log ("ERRO!");
        return;
    }
}

//Caso o valor total esteja entre 850 e 1000 OU maior que mil, o usuário será redirecionado para aqui.
function editarCarrinho (totalDasCompras){
    console.log (`Gasto total: R$ ${totalDasCompras}`);
    if (totalDasCompras > 1000){
        console.log (`Você precisa tirar um total de: R$ ${totalDasCompras - 1000} em compras.`);
    }else if (totalDasCompras > 850 && totalDasCompras < 1000){
        console.log (`Ainda podes gastar: R$ ${1000 - totalDasCompras};
        Ou exluir compras equivalentes a: R$ ${totalDasCompras - 850}`)
    }

    const direcionamento = Number(prompt (`Escolha a operação:
        1- Excluir produto;
        2- Adicionar produto.`));
        //Caso ele dceida excluir algum produto ele entra aqui
        if (direcionamento === 1){
            for (i = 0; i < arrayValores.length; i++){
                console.log (`${i + 1}- ${arrayNomes[i]}: R$ ${arrayValores[i]}`);
            }
            let quantidadeItens = Number(prompt("Quantos ítens você deseja excluir ?"));

            if (typeof quantidadeItens !== "number"){
                console.log ("Escolha inválida");
                return;
            }else if (quantidadeItens > arrayValores.length || quantidadeItens <= 0){
                console.log ("Quantidade inválida.");
                return;
            }else {
                for (i = 0; i < quantidadeItens; i++){
                    let itenEscolhido = Number(prompt("Digite o íten que deseja excluir: "));
                    itenEscolhido -= 1; //Coloca a escolha do íten no índice correto (já que o array começa com 0)
                    if (typeof itenEscolhido !== "number"){
                        console.log ("Escolha inválida.");
                    }else if (itenEscolhido > arrayValores.length || itenEscolhido <= 0){
                        console.log ("Esse ítem não existe.");
                    }else {
                        //Exclusão dos ítens escolhidos.
                        arrayValores.splice ((itenEscolhido ), 1);
                        arrayNomes.splice ((itenEscolhido ), 1);
                    }
                } 
                encerrarOperacao ();
                return;              
            }

        //Caso ele decida comprar mais produtos ele entra aqui.
        }else if (direcionamento === 2){
            console.log ("Se atente ao valor do produto !");
            menuDeEscolhas();
            return;
        }else {
            console.log ("Escolha inválida !");
            return;
        }
}

const valorTotalLanches = 124;
arrayLanches = [];
function lanchonete (){
    let opcaoLanches = "sim";
    while (opcaoLanches === "sim"){
        opcaoLanches = prompt("Deseja comprar algum lanche").toLowerCase ();
        if (opcaoLanches === "nao" || opcaoLanches === "não"){
            return;
        }else if (opcaoLanches !== "sim"){
            console.log ("Resposta inválida.");
        }
    }
    

}

// Função callBack. É um tipo de função que entra como parâmetro para outra função,
//e dentro do código desta outra função ela é executada.