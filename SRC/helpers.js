function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)//O método filter é útil para obter uma versão filtrada de um array com base em uma condição específica.
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        if(duplicadas) {
        textoFinal += `Há palavras duplicadas, parágrafo ${indice + 1}: ${duplicadas} \n`                 
        }else{
            textoFinal += `Não há palavras duplicadas, parágrafo ${indice + 1}: ----- \n`
        }    
    });
    return textoFinal;
}

export { montaSaidaArquivo }