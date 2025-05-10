
function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    const idadeMinima = 0
    const adocao = idade >= idadeMinima
        ? true
        : porte === 'P'
            ? true
            : false

    return adocao
  
}



function calcularConsumoDeRacao(nome, estoque, peso){
    const qtdDiariaRacao = peso * 300
    const durarEstoque = estoque/qtdDiariaRacao
   

   // console.log('======================================================')
  //  console.log(`Nome do Dog: ${nome} `)
  //  console.log(`Peso do Dog: ${peso} kg`)
  //  console.log(`Quantidade de Razão recomendada por dia: ${qtdDiariaRacao} g`)
  //  console.log(`Quantidade de dias que o estoque vai durar: ${Math.floor(durarEstoque)} g`)
  //  console.log('======================================================')

  return qtdDiariaRacao
}



function decidirTipoDeAtividadePorPorte(porte) {

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