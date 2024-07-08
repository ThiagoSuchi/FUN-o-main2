import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if(!texto || !destino) {
            console.error(chalk.red('erro: Favor inserir caminho de origem e destino'));
            program.help();
            return
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino)

        try{
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Texto processado com sucesso!'));
        } catch(erro) {
            console.log(chalk.red('Ocorreu um erro no processamento', erro));
        }
    })

program.parse();

function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        // Tentar (try) abrir e ler o arquivo. Se der certo: Continua normalmente.
        try {
            if (erro) throw erro
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino)
        } catch (erro) {  // Se der errado: Vai para o catch e imprime uma mensagem de erro. */
            trataErros(erro);
        }
    })
}


//Esta sintaxe(async - await) torna o código assíncrono mais fácil de ler e escrever, semelhante ao código síncrono tradicional. Elas permitem escrever código assíncrono que se parece com código síncrono, tornando-o mais fácil de ler e entender.
async function criaESalvaArquivo(listaPalavras, endereco) {
// A palavra-chave async é usada para declarar uma função assíncrona. 
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
//A palavra-chave await é usada dentro de uma função assíncrona para pausar a execução da função até que a promessa seja resolvida.
        console.log(chalk.yellow('arquivo criado'));
    } catch (erro) {
        throw erro;
    }
}


// function criaESalvaArquivo(listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//     .then(() => {
//         console.log('arquivo criado!');
//     })
//     .catch((erro) => {
//         throw erro
//     })
//     .finally(() => console.log('operação finalizada'))
// }