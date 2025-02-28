const form = document.getElementById("form");
const imgAprovado = '<img src="./imgs/aprovado.png" alt="Emoji Festejando">';
const imgReprovado = '<img src="./imgs/reprovado.png" alt="Emoji Triste">';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const atividade = [];
const notas = [];

let linhas = '';

form.addEventListener("submit", (event) => {
    event.preventDefault();

    addLinhas();
    atualizarTabela();
    mediaFinal();

});

const addLinhas = () => {
    const inputNomeAtividade = document.getElementById("nome_atividade");
    const inputNotaAtividade = document.getElementById("nota_atividade");
    let nomeAtividade = inputNomeAtividade.value;
    let notaAtividade = inputNotaAtividade.value;

    if (atividade.includes(nomeAtividade)) {
        alert("Atividade já cadastrada");
    } else {
        atividade.push(nomeAtividade);
        notas.push(parseFloat(notaAtividade));

        let linha = '<tr>';
        linha += `<td>${nomeAtividade}</td>`
        linha += `<td>${notaAtividade}</td>`
        linha += `<td>${notaAtividade >= 7 ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
};

const mediaFinal = () => {
    const resultado = document.getElementById("media_final");
    const resultadoFinal = document.getElementById("resultado_final");
    const mediaFinal = calcularMedia();

    resultado.innerHTML = mediaFinal;
    resultadoFinal.innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
};

const atualizarTabela = () => {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
};

const calcularMedia = () => {
    const media = notas.reduce((acc, notas) => acc + notas, 0) / notas.length;
    return media.toFixed(2);
};