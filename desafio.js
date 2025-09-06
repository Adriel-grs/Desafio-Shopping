const prompt = require("prompt-sync")();

const nomeAgt = prompt("Informe o nome do agente! ");
const especialidade = prompt("Apresente sua especialidade: (Hacker, Engenheiro, Analista, etc...) : ");
const idade = Number(prompt("Digite sua idade: ")); /*No lugar do Number poderia se utilizar (parseInt --> para converte em número a entrada de dados) */
const pontuacaoHancker = parseFloat(prompt("Qual a sua pontuação atual no Hanckin:(ex: 75.5)  "));
const simboloDig = prompt("Digite um caractere especial (ex: !, @, #, $, %, &) ");
const veteranoEnt = prompt("Você é um veterano da resistência? < Sim | Não > : " );

const veterano = veteranoEnt === "sim \n";
console.log("Seja Bem-Vindo!");

console.log("\n---Ficha do Agente---");
console.log(`Nome do Agt: ${nomeAgt} `);
console.log(`Você é um : ${especialidade} que bom ter você em nossa equipe. `);
console.log(`Tenho ${idade} anos de experiência `);
console.log(`Minha pontuação atual é: ${pontuacaoHancker} `);
console.log(`O caracterer especial usado é: ${simboloDig} `);
//console.log(`Sou considerado um ${veterano} `);

console.log("\n--- Mensagem do QG ---");
console.log(`Bem-vindo, ${nomeAgt}! Sua experiência como ${especialidade} e sua pontuação de ${pontuacaoHancker} nos tornam mais fortes. \n`);


if(veterano){
  console.log("Sua jornada anterior na Resistência é uma inspiração para todos nós. Avante!");
}else{
  console.log("Estamos prontos para sua primeira missão. O futuro da Resistência está em suas mãos.");
}




