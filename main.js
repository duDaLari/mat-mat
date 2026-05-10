const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const agora = new Date();

const tempoObjetivo1 = new Date(agora.getTime() + 80 * 24 * 60 * 60 * 1000);

const tempoObjetivo2 = new Date(agora.getTime() + 40 * 60 * 60 * 1000);

const tempoObjetivo3 = new Date(agora.getTime() + 7 * 24 * 60 * 60 * 1000);

const tempoObjetivo4 = new Date(agora.getTime() + 365 * 24 * 60 * 60 * 1000);

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

for (let i = 0; i < botoes.length; i++) {

    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }

}

function calculaTempo(tempoObjetivo) {

    let tempoAtual = new Date();

    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000);

    let minutos = Math.floor(segundos / 60);

    let horas = Math.floor(minutos / 60);

    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return (
        dias +
        " dias " +
        horas +
        " horas " +
        minutos +
        " minutos " +
        segundos +
        " segundos"
    );

}

function atualizaCronometro() {

    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }

}

atualizaCronometro();

setInterval(atualizaCronometro, 1000);