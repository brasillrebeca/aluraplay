// unir função que se conecta com a API, possibilitando a inserção de novos dados com a função que capta os dados inseridos pelo usuário
import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");
// variáveis que recebem elementos, de acordo com os data-atributes definidos no HTML
async function criarVideo(evento) {
    // previnir que a ação padrão do enviar evento aconteça (pois não é uma função async)
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value; // o value captura as informações que serão digitadas no campo
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); // não inserimos um contador para exibir o número de visualizações na tela, por isso esse número será definido a partir dessa variável

    // importar função conectaAPI
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    //redirecionar a página quando o envio foi feito com sucesso
    window.location.href = "../pages/envio-concluido.html";
}

// para captar os valores somente depois de tudo preenchido 
// o evento que captura: addEventListener / o que aciona o evento: submit / evento recebe o valor digitado
formulario.addEventListener("submit", evento => criarVideo(evento));