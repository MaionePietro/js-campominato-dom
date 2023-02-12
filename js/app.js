let latoGriglia = 10
let numeroCelle = latoGriglia * latoGriglia

const preGame = document.querySelector('section');
const inGame = document.querySelector('section:last-child')
const grigliaElement = document.querySelector('.griglia')
const btnElement = document.querySelector('.btn');


btnElement.addEventListener('click', function () {
    preGame.classList.remove('active');
    inGame.classList.add('active');
    newGame();
    bombe();
})





function newGame() {
    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1;
        let divString = `<div class="cella" style="width: calc(100% / ${latoGriglia});">${num}</div>`;
        grigliaElement.innerHTML += divString;
    }

    const clickElement = document.querySelectorAll('.cella');

    for (let i = 0; i < clickElement.length; i++) {
        const cella = clickElement[i]
        clickElement[i].addEventListener('click', function () {
            clickElement[i].classList.add('trasparenza');
        })
        cella.addEventListener('click', onClick)
    }

}

function onClick(event) {
    console.log(event)
    console.log(event.target)
    console.log(this)
    console.log(event.target === this)
    // const cella = event.target
    const cella = this
    console.log(cella.innerHTML)

    const quadrato = parseInt(cella.innerHTML) ** 2
    console.log(quadrato)

    cella.classList.add('bg-green')
    cella.removeEventListener('click', onClick)
    // console.log(i + 1)
}

function bombe() {
    let arrayBombe = [];
    while (arrayBombe.length < 16) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (arrayBombe.indexOf(randomNumber) === -1) {
            arrayBombe.push(randomNumber);
        }
    }
    console.log(arrayBombe);
}