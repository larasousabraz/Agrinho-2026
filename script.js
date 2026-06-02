// Seleção dos elementos do DOM usando seletores específicos
const txtProducao = document.getElementById('txt-producao');
const txtImpacto = document.getElementById('txt-impacto');
const txtPontuacao = document.getElementById('txt-pontuacao');

const btnReflorestar = document.getElementById('btn-reflorestar');
const btnGotejamento = document.getElementById('btn-gotejamento');
const btnSolar = document.getElementById('btn-solar');

// Variáveis de controle de estado do aplicativo (Exigência da rubrica)
let toneladasProducao = 10;
let nivelSustentabilidade = 0;

// Função interna para atualizar a interface visual do site
function atualizarPainel() {
    txtProducao.innerText = `${toneladasProducao} toneladas`;
    txtPontuacao.innerText = `${nivelSustentabilidade}%`;

    // Lógica dinâmica para alterar o texto e a cor do Impacto Ambiental
    if (nivelSustentabilidade >= 100) {
        txtImpacto.innerText = "Equilibrado / Sustentável";
        txtImpacto.className = "sucesso";
    } else if (nivelSustentabilidade >= 60) {
        txtImpacto.innerText = "Médio";
        txtImpacto.className = "";
    } else {
        txtImpacto.innerText = "Alto";
        txtImpacto.className = "alerta";
    }
}

// Evento 1: Ação de Reflorestamento
btnReflorestar.addEventListener('click', function() {
    nivelSustentabilidade += 40;
    btnReflorestar.disabled = true; // Evita cliques repetidos após adotar a prática
    btnReflorestar.innerText = "Árvores Plantadas ✓";
    atualizarPainel();
});

// Evento 2: Instalação de Gotejamento
btnGotejamento.addEventListener('click', function() {
    nivelSustentabilidade += 30;
    toneladasProducao += 2; // Economia de água melhora o rendimento da produção
    btnGotejamento.disabled = true;
    btnGotejamento.innerText = "Irrigação Instalada ✓";
    atualizarPainel();
});

// Evento 3: Adoção de Energia Solar
btnSolar.addEventListener('click', function() {
    nivelSustentabilidade += 30;
    btnSolar.disabled = true;
    btnSolar.innerText = "Energia Solar Ativa ✓";
    atualizarPainel();
});
