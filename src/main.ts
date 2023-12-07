import { readFile, writeFile } from 'fs/promises';

async function lerEGravarArquivo() {

    try {

        const conteudo = await readFile('arquivo.txt', 'utf-8');

        console.log('Conteúdo lido:', conteudo);

        await writeFile('novo-arquivo.txt', 'Novo conteúdo');

        console.log('Arquivo gravado com sucesso.');

    } catch (erro) {

        console.error('Erro ao ler/gravar arquivo:', erro);

    }

}