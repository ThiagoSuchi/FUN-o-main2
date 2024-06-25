const fs = require('fs'); // require(): É uma função usada para importar módulos em Node.js. Quando você chama require('fs'), está solicitando o carregamento do módulo chamado fs.

const caminhoArquivo = process.argv;//process.argv é uma maneira de acessar os argumentos da linha de comando em um script Node.js. Isso permite que você passe dados para o seu script quando ele é executado, tornando possível escrever scripts mais flexíveis e dinâmicos.

const link = caminhoArquivo[2];

//O módulo fs em Node.js é uma ferramenta poderosa para trabalhar com o sistema de arquivos, permitindo ler, escrever, atualizar e excluir arquivos e diretórios de forma síncrona e assíncrona.
fs.readFile(link, 'utf-8', (erro, texto) => {// UTF-8 é uma sigla para "Unicode Transformation Format - 8 bits". É um padrão de codificação de caracteres que permite representar praticamente todos os caracteres usados em escrita, símbolos e emojis de todas as línguas do mundo em uma forma compacta e eficiente.
    console.log(texto);
})
/*
fs.readFile:

Este é um método da biblioteca fs (file system) do Node.js que é usado para ler o conteúdo de um arquivo.
O método readFile precisa de três argumentos: o caminho do arquivo (neste caso, link), o formato de codificação (neste caso, 'utf-8'), e uma função de callback que será executada após a tentativa de ler o arquivo.

link: É o caminho do arquivo que você quer ler. Pode ser uma string contendo o caminho para o arquivo.

'utf-8': Este é o formato de codificação usado ao ler o arquivo. 'utf-8' significa que o conteúdo do arquivo será lido como texto.

(erro, texto) => { ... }: Esta é uma função de callback que será executada depois que o arquivo for lido. Ela tem dois parâmetros:

erro: Se ocorrer um erro durante a leitura do arquivo, esse parâmetro conterá informações sobre o erro.

texto: Se a leitura do arquivo for bem-sucedida, esse parâmetro conterá o conteúdo do arquivo.

*/