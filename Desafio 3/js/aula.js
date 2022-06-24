const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const moeda = document.querySelector(".moeda-game");
const divContainer = document.querySelector(".inicio");
const divResultado = document.querySelector(".resultado");

let score = 0;
let ativo = 1;


function clickbotao() {
    nomeJogador = document.querySelector("#nomeJogador").value;
    document.querySelector(`.nomejogador`).textContent = `Jogador : ${nomeJogador}`;

    divContainer.style.visibility = "hidden";
    divResultado.style.visibility = "hidden";
    score = 0;
    document.querySelector(`.score`).textContent = `Pontos : ${score}`;
    document.addEventListener("keydown", jump);
}


function clickbotaoR() {
    location.reload();
}


const jump = () => {
    mario.classList.add("jump-mario");

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

    if (divContainer.style.visibility == "hidden") {
        if (pipePosition >= 0 && pipePosition <= 450 && ativo == 1) {
            score++;
            document.querySelector(`.score`).textContent = `Pontos : ${score}`;
            /*   moeda.style.animation = "none";*/
        }

    };


    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");

        /*        moeda.style.animation = "moeda-animation 1.5s infinite linear";
                moeda.style.left =`${pipePosition}px`;*/

        if (divContainer.style.visibility == "hidden") {
            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                pipe.style.animation = "none";
                pipe.style.left = `${pipePosition}px`;
                /*   document.querySelector(`#score`).textContent = `SCORE : ${pipePosition}`;*/

                moeda.style.animation = "none";
                moeda.style.left = `${pipePosition}px`;

                mario.style.animation = "none";
                mario.style.bottom = `${marioPosition}px`;

                mario.src = "img/Mario perdeu.png";
                mario.style.width = "75px";
                mario.style.marginLeft = "45px";

                ativo = 0;

                /*    divResultado.style.display = "block";*/

                divResultado.style.visibility = "visible";
                if (score > 50) {
                    document.querySelector(`#coluna11`).textContent = nomeJogador;
                    document.querySelector(`#coluna12`).textContent = score;
                } else {
                    document.querySelector(`#coluna11`).textContent = `Valmir`;
                    document.querySelector(`#coluna12`).textContent = `50`;
                }
                if (score > 45) {
                    document.querySelector(`#coluna21`).textContent = nomeJogador;
                    document.querySelector(`#coluna22`).textContent = score;
                } else {
                    document.querySelector(`#coluna21`).textContent = `Manuel`;
                    document.querySelector(`#coluna22`).textContent = `45`;
                }
                if (score >= 40) {
                    document.querySelector(`#coluna31`).textContent = nomeJogador;
                    document.querySelector(`#coluna32`).textContent = score;
                } else {
                    document.querySelector(`#coluna31`).textContent = `Raquel`;
                    document.querySelector(`#coluna32`).textContent = `40`;
                }
                if (score >= 35 && score < 40) {
                    document.querySelector(`#coluna41`).textContent = nomeJogador;
                    document.querySelector(`#coluna42`).textContent = score;
                } else {
                    document.querySelector(`#coluna41`).textContent = `Nicole`;
                    document.querySelector(`#coluna42`).textContent = `35`;
                }
                if (score >= 30 && score < 45) {
                    document.querySelector(`#coluna51`).textContent = nomeJogador;
                    document.querySelector(`#coluna52`).textContent = score;
                } else {
                    document.querySelector(`#coluna51`).textContent = `Pedro`;
                    document.querySelector(`#coluna52`).textContent = `30`;
                }
                if (score >= 25 && score < 30) {
                    document.querySelector(`#coluna61`).textContent = nomeJogador;
                    document.querySelector(`#coluna62`).textContent = score;
                } else {
                    document.querySelector(`#coluna61`).textContent = `David`;
                    document.querySelector(`#coluna62`).textContent = `25`;
                }
                if (score >= 20 && score < 25) {
                    document.querySelector(`#coluna71`).textContent = nomeJogador;
                    document.querySelector(`#coluna72`).textContent = score;
                } else {
                    document.querySelector(`#coluna71`).textContent = `Gustavo`;
                    document.querySelector(`#coluna72`).textContent = `20`;
                }
                if (score < 20) {
                    document.querySelector(`#coluna81`).textContent = nomeJogador;
                    document.querySelector(`#coluna82`).textContent = score;
                } else {
                    document.querySelector(`#totalPontos7`).textContent = `Karen`;
                    document.querySelector(`#totalPontos7`).textContent = ` 5 `;
                }

                clearInterval(loopGame);
            };

        } else {
            jump;
        }

    },
    10);




