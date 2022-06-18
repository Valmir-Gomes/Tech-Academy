const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
}

document.addEventListener("keydown", jump);
document.addEventListener("clixk", jump);
document.addEventListener("touch", jump);

const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");
    if (pipePosition <= 120 && marioPosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "nome";
        mario.style.bottom = `${marioPosition}px`;

        mario.scr = "../img/mario-game-over.png"
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";

        clearInterval(loopGame)
    }
}, 10);

