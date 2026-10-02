/* ========================================
   ELEMENTOS
======================================== */

const btnAbrir =
    document.getElementById("btnAbrir");

const abertura =
    document.getElementById("abertura");

const convite =
    document.getElementById("convite");

const musica =
    document.getElementById("musica");

const btnMusica =
    document.getElementById("btnMusica");


let tocando = false;


/* ========================================
   ABRIR CONVITE + COMEÇAR MÚSICA
======================================== */

btnAbrir.addEventListener(
    "click",
    function () {


        /*
         * O clique do usuário permite
         * que o navegador reproduza
         * a música.
         */

        musica.play()
            .then(function () {

                tocando = true;

                btnMusica.textContent =
                    "❚❚";

            })
            .catch(function (erro) {

                console.log(
                    "Não foi possível iniciar a música:",
                    erro
                );

            });


        /*
         * Fecha a abertura
         */

        abertura.classList.add(
            "fechar"
        );


        /*
         * Mostra o convite
         */

        convite.classList.add(
            "ativo"
        );


        /*
         * Volta para o topo
         */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ========================================
   CONTAGEM REGRESSIVA
======================================== */


/*
 * DATA DA FORMATURA
 *
 * 15/12/2026
 * 19:00
 */

const dataFormatura =
    new Date(
        2026,
        11,
        15,
        19,
        0,
        0
    ).getTime();


function atualizarContador() {

    const agora =
        new Date().getTime();


    const distancia =
        dataFormatura - agora;


    if (distancia <= 0) {

        document.getElementById(
            "dias"
        ).textContent = "00";

        document.getElementById(
            "horas"
        ).textContent = "00";

        document.getElementById(
            "minutos"
        ).textContent = "00";

        document.getElementById(
            "segundos"
        ).textContent = "00";

        return;

    }


    const dias =
        Math.floor(
            distancia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                distancia %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (
                distancia %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (
                distancia %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById(
        "dias"
    ).textContent =
        String(dias)
            .padStart(2, "0");


    document.getElementById(
        "horas"
    ).textContent =
        String(horas)
            .padStart(2, "0");


    document.getElementById(
        "minutos"
    ).textContent =
        String(minutos)
            .padStart(2, "0");


    document.getElementById(
        "segundos"
    ).textContent =
        String(segundos)
            .padStart(2, "0");

}


setInterval(
    atualizarContador,
    1000
);


atualizarContador();


/* ========================================
   GOOGLE MAPS
======================================== */

const btnMapa =
    document.getElementById(
        "btnMapa"
    );


btnMapa.addEventListener(
    "click",
    function () {

        const endereco =
            "Espaço de Eventos, Várzea da Palma, MG";


        const url =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(
                endereco
            );


        window.open(
            url,
            "_blank"
        );

    }
);


/* ========================================
   CONFIRMAR PRESENÇA
======================================== */

const btnConfirmar =
    document.getElementById(
        "btnConfirmar"
    );


btnConfirmar.addEventListener(
    "click",
    function () {


        /*
         * COLOQUE O WHATSAPP REAL AQUI
         *
         * Exemplo:
         * 5538999999999
         */

        const telefone =
            "5538999999999";


        const mensagem =
            "Olá! Gostaria de confirmar minha presença na formatura.";


        const url =
            "https://wa.me/" +
            telefone +
            "?text=" +
            encodeURIComponent(
                mensagem
            );


        window.open(
            url,
            "_blank"
        );

    }
);


/* ========================================
   CONTROLE DA MÚSICA
======================================== */

btnMusica.addEventListener(
    "click",
    function () {


        if (tocando) {

            musica.pause();

            btnMusica.textContent =
                "♪";

            tocando = false;

        }

        else {

            musica.play()
                .then(function () {

                    tocando = true;

                    btnMusica.textContent =
                        "❚❚";

                })
                .catch(function (erro) {

                    console.log(
                        "Erro ao reproduzir:",
                        erro
                    );

                });

        }

    }
);


/* ========================================
   QUANDO A MÚSICA TERMINAR
======================================== */

musica.addEventListener(
    "ended",
    function () {

        tocando = false;

        btnMusica.textContent =
            "♪";

    }
);