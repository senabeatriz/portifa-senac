// Obtem o botão
const botaoVoltarAoTopo = document.getElementById("voltarAoTopo");

// Mostrar o botão ao rolar a página
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botaoVoltarAoTopo.style.display = "block";
    } else {
        botaoVoltarAoTopo.style.display = "none";
    }
};

// Voltar ao topo ao clicar no botão
botaoVoltarAoTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
