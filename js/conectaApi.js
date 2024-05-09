// inserir esse diretório no arquivo HTML - no final
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); //requisição GET - nenhum método especificado abaixo - não retorna nada, apenas chama os arquivos da URL
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

//criar conexão com a API
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        //chamando um método para a URL que envia dados para a API
        method: "POST",
        headers: {
            // content-type: especificar que tipo de arquivo está sendo enviado ou recebido
            "Content-type": "application/json"
        },
        // enviando um objeto de valores: transformar em strings(stringify)
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }
    //para retornar o valor para o usuário, criar outra const que receba o valor e depois o imprima na tela
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
