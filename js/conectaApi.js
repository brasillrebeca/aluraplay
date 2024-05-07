// inserir esse diretório no arquivo HTML - no final
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); //requisição GET - não retorna nada, apenas chama os arquivos da URL
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}
