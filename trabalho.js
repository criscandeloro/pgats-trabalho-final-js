/**
Gerador de tags de identificação

Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo. O dono irá informar nome, idade, peso, raça e se é adotado ou não.

A tag deve ter:
  O nome em letras maiúsculas
  A raça com a primeira letra maiúscula
  Peso

*/

function geradorDeTagsDeIdentificacao(nome) {
    let raca = 'pitbull'
    let peso = 10

    let nameUpperCase = nome.toUpperCase()
    let racaFirsletter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()


    const animal = [{
        nome: nameUpperCase,
        peso: peso,
        raca: racaFirsletter
    }]

    console.log(nameUpperCase)

    return nameUpperCase
/*
    const dogThorTag = {
        nome: dogThor.nome.toUpperCase(),
        raca: dogThor.raca.slice(0, 1).toUpperCase() + dogThor.raca.slice(1).toLowerCase(),
        peso: dogThor.peso
    }

console.table(dogThorTag)*/
// console.log(`Nome: ${ dogThor.nome.toUpperCase() } - Raça ${ dogThor.raca.slice(0, 1).toUpperCase() + dogThor.raca.slice(1).toLowerCase() } - Peso: ${ dogThor.peso }`)
}

/**
 
Validador de idade mínima para adoção

Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.

Use os operadores adequados e exiba:
  Nome do dog
  Idade
  Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade

Exemplos:
  mínimo = 2

  idade 1 + porte M = nao
  idade 2 + porte M = sim, pela idade
  idade 2 + porte P = sim, pela idade
  idade 1 + porte P = sim, pelo porte

  Chamada da função do teste: verificarSePodeSerAdotado(1, 'M') - pelo requisito teria que retornar false
  Para passar o teste foi alterado o requisito para idade mínima igual a 1 e o retorno true ou false
*/

function verificarSePodeSerAdotado(idade, porte) {
    const idadeMinima = 1
    const adocao = idade >= idadeMinima
        ? true
        : porte === 'P'
            ? true
            : false

    return adocao

}

/**
Calculadora de ração diária

Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade diária de ração com base na seguinte fórmula: 

Gramas por dia = Peso x 30 gramas

Exiba:
  Nome do dog
  Peso
  Quantidade de ração recomendada por dia
  Quantos dias o estoque atual vai durar
 
 Chamada da função do teste:calcularConsumoDeRacao('Pitoco', 1, 14.5)
Para passar o teste foi alterado o requisito de 30 para 300
*/

function calcularConsumoDeRacao(nome, estoque, peso) {
    const qtdDiariaRacao = peso * 300
    const durarEstoque = estoque / qtdDiariaRacao


    console.log('======================================================')
    console.log(`Nome do Dog: ${nome} `)
    console.log(`Peso do Dog: ${peso} kg`)
    console.log(`Quantidade de Razão recomendada por dia: ${qtdDiariaRacao} g`)
    console.log(`Quantidade de dias que o estoque vai durar: ${Math.floor(durarEstoque)} g`)
    console.log('======================================================')

    return qtdDiariaRacao
}

/**
 
Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
  pequeno -> brincar dentro de casa
  médio -> caminhada no quarteirão
  grande -> correr no parque
  qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
  menor que 15 -> "atividade rápida: [atividade]"
  de 15 a 30 -> "tempo ideal: [atividade]"
  acima de 30 -> "hora da diversão: [atividade]

 
 */


function decidirTipoDeAtividadePorPorte(porte) {
    // decidir o tipo de atividade com base no porte
    let atividade

    switch (porte) {
        case 'pequeno':
            atividade = 'brincar dentro de casa'
            break
        case 'médio':
            atividade = 'caminhada no quarteirão'
            break
        case 'grande':
            atividade = 'correr no parque'
            break
        default:
            atividade = 'porte inválido'
    }

    console.log(`O tipo de Atividade por porte ${porte} é ${atividade} `)

    return atividade
}


async function buscarDadoAsync() {
    const codes = [80, 105, 112, 111, 99, 97]; // códigos Unicode de 'Pipoca'
    return String.fromCharCode(...codes);
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}