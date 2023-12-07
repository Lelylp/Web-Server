async function obterDadosDeMultiplosEndpoints() {
    try {
        const [dados1, dados2, dados3] = await Promise.all([
            await fetch('https://jsonplaceholder.typicode.com/posts/1'),
            await fetch('https://jsonplaceholder.typicode.com/posts/2'),
            await fetch('https://jsonplaceholder.typicode.com/posts/3')
        ].map(resposta => resposta.json()));
        console.log('Dados do Endpoint 1:', dados1);
        console.log('Dados do Endpoint 2:', dados2);
        console.log('Dados do Endpoint 3:', dados3);
    } catch (erro) {
        console.error('Erro ao obter dados de múltiplos endpoints:', erro);
    }
}

obterDadosDeMultiplosEndpoints();