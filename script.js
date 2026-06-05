const dataInicio = new Date("2024-06-08T23:15:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60))
        / 1000
    );

    document.getElementById("contadorTempo").innerHTML =
        `
        <strong>${dias}</strong> dias<br>
        <strong>${horas}</strong> horas<br>
        <strong>${minutos}</strong> minutos<br>
        <strong>${segundos}</strong> segundos
        `;
}

atualizarContador();

setInterval(atualizarContador, 1000);
/* ========================= */
/* ANIMAÇÃO DA CARTA */
/* ========================= */

const elementosFade =
document.querySelectorAll('.fade');

function revelarElementos(){

    elementosFade.forEach(elemento => {

        const topo =
        elemento.getBoundingClientRect().top;

        const alturaTela =
        window.innerHeight;

        if(topo < alturaTela - 80){

            elemento.classList.add('show');

        }

    });

}

window.addEventListener(
    'scroll',
    revelarElementos
);

revelarElementos();
/* ========================= */
/* FOTOS SURGINDO */
/* ========================= */

const fotos =
document.querySelectorAll('.foto');

function revelarFotos(){

    fotos.forEach(foto => {

        const topo =
        foto.getBoundingClientRect().top;

        const alturaTela =
        window.innerHeight;

        if(topo < alturaTela - 80){

            foto.classList.add('show');

        }

    });

}

window.addEventListener(
    'scroll',
    revelarFotos
);

revelarFotos();
/* ========================= */
/* SONHOS */
/* ========================= */

const sonhos =
document.querySelectorAll('.sonho-card');

function revelarSonhos(){

    sonhos.forEach(sonho => {

        const topo =
        sonho.getBoundingClientRect().top;

        const alturaTela =
        window.innerHeight;

        if(topo < alturaTela - 80){

            sonho.classList.add('show');

        }

    });

}

window.addEventListener(
    'scroll',
    revelarSonhos
);

revelarSonhos();
/* ========================= */
/* FINAL */
/* ========================= */

const finais =
document.querySelectorAll(
'.revelar-final'
);

function revelarFinal(){

    finais.forEach(item => {

        const topo =
        item.getBoundingClientRect().top;

        const alturaTela =
        window.innerHeight;

        if(topo < alturaTela - 100){

            item.classList.add('show');

        }

    });

}

window.addEventListener(
    'scroll',
    revelarFinal
);

revelarFinal();
const btnMusica =
document.getElementById('btnMusica');

const musica =
document.getElementById('musica');

let tocando = false;

btnMusica.addEventListener('click', () => {

    if(!tocando){

        musica.play();

        btnMusica.innerHTML =
        '⏸️ Pausar Música';

        tocando = true;

    } else {

        musica.pause();

        btnMusica.innerHTML =
        '🎵 Toque aqui para ouvir a trilha da nossa história';

        tocando = false;

    }

});
const apelidos = [

"🤍 Minha Bicudinha",
"🤍 Minha Oncinha",
"🤍 Minha Princesinha Mandona",
"🤍 Minha Pretinha",
"🤍 Minha Coisinha Fofa",
"🤍 Meu Nenenzinhuuu Linduuuu",
"🤍 Mailov",
"🤍 Giulinha Bueno"

];

const apelidoElemento =
document.getElementById("apelidoAleatorio");

function trocarApelido(){

    const sorteado =
    apelidos[
        Math.floor(
            Math.random() *
            apelidos.length
        )
    ];

    apelidoElemento.textContent =
    sorteado;

}

trocarApelido();

setInterval(
    trocarApelido,
    4000
);