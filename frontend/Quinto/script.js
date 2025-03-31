// Função para alternar entre páginas
function navegarPara(pagina) {
    window.location.href = pagina;
}

// Função para capturar e exibir comentários
function enviarComentario(event) {
    event.preventDefault(); // Evita recarregar a página
    
    let nome = document.getElementById("nome").value;
    let comentario = document.getElementById("comentario").value;
    
    if (nome && comentario) {
        let secaoComentarios = document.getElementById("secao-comentarios");
        let novoComentario = document.createElement("div");
        novoComentario.classList.add("comentario");
        novoComentario.innerHTML = `<strong>${nome}:</strong> ${comentario}`;
        secaoComentarios.appendChild(novoComentario);
        document.getElementById("form-comentario").reset(); // Limpa o formulário
    }
}

// Função para controle de avaliações por estrelas
function avaliar(event) {
    let estrelas = event.target.parentNode.querySelectorAll("label");
    estrelas.forEach((estrela) => {
        estrela.style.color = "gray";
    });
    event.target.style.color = "gold";
    let previousSibling = event.target.previousElementSibling;
    while (previousSibling) {
        previousSibling.style.color = "gold";
        previousSibling = previousSibling.previousElementSibling;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Evento para capturar avaliação por estrelas
    document.querySelectorAll(".rating label").forEach((estrela) => {
        estrela.addEventListener("click", avaliar);
    });
    
    // Evento para captura de formulário de comentários
    let formComentario = document.getElementById("form-comentario");
    if (formComentario) {
        formComentario.addEventListener("submit", enviarComentario);
    }
    
    // Evento para navegação dos botões
    document.querySelectorAll(".btn-navegacao").forEach((botao) => {
        botao.addEventListener("click", function() {
            navegarPara(this.dataset.pagina);
        });
    });
});
