// --------------------------------------------------------------------------------------------
/*
 1 passo: Criar um array com as palavras;
 2 passo: Contar as ocorrências;
 3 passo: Montar um objeto com o resultado.
*/
// --------------------------------------------------------------------------------------------

// A função quebraEmParagrafos é projetada para receber um texto, dividir esse texto em parágrafos com base em quebras de linha, filtrar parágrafos vazios e contar as palavras em cada parágrafo usando a função verificaPalavrasDuplicadas. Ela usa métodos como toLowerCase() para garantir consistência nas palavras, split('\n') para dividir o texto em parágrafos e .filter() para remover parágrafos vazios antes de contar as palavras.
export function contaPalavras(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo);
    })
    return contagem
// Uso de flatMap: flatMap é escolhido para lidar com parágrafos e seus resultados de contagem de palavras de forma achatada, simplificando o processamento e evitando arrays aninhados. É uma forma melhor e performatica de executar oque o método .filter e .map estavam fazendo. Veja logo abaixo:

    // .filter((paragrafo) => paragrafo)
    // .map((paragrafo) => {
    //     return verificaPalavrasDuplicadas(paragrafo);
    // })
}

//===============================================================================================

// Esta função tira todos os caracteres especiais do texto através do método .replace
function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');/*.replace(regex, ''): O método replace em strings substitui parte de uma string por outra string, ou neste caso, por uma string vazia ''.

    regex: Aqui, [.,\/#!$%\^&\*;:{}=\-_~()]é uma expressão regular (regex) que define um conjunto de caracteres especiais que serão removidos dapalavra`.

    /g: O modificador g significa "global", o que indica que a substituição deve ser aplicada a todas as correspondências encontradas na string, não apenas na primeira. */
}

//===============================================================================================

// A função verificaPalavrasDuplicadas conta quantas vezes cada palavra aparece em um texto e imprime essas contagens no console. Ela divide o texto em palavras, usa um objeto para rastrear a contagem de cada palavra, e itera sobre cada palavra para atualizar essas contagens.
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado
}
//===============================================================================================
