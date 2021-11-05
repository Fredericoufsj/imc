const calcule = document.getElementById('calcule')
const resetar = document.getElementById('reset')

function imprimir() {
    let resultado = document.getElementById('resultado')
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value


    let imc = (peso / (altura * altura))
    resultado.textContent = "O seu IMC é de " + imc.toFixed(2)

    // Muda a cor do fundo:
    let tr1 = document.getElementById('tr1')
    let tr2 = document.getElementById('tr2')
    let tr3 = document.getElementById('tr3')
    let tr4 = document.getElementById('tr4')
    let tr5 = document.getElementById('tr5')
    let tr6 = document.getElementById('tr6')

    if (imc < 18.5) {
        tr1.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (imc >= 18.5 && imc < 25) {
        tr2.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (imc >= 25 && imc < 30) {
        tr3.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (imc >= 30 && imc < 35) {
        tr4.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (imc >= 35 && imc < 40) {
        tr5.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (imc >= 40) {
        tr6.style.backgroundColor = "rgb(255, 255, 0)";
    }

}

function reset() {
    let tr1 = document.getElementById('tr1')
    let tr2 = document.getElementById('tr2')
    let tr3 = document.getElementById('tr3')
    let tr4 = document.getElementById('tr4')
    let tr5 = document.getElementById('tr5')
    let tr6 = document.getElementById('tr6')

    tr1.style.backgroundColor = "white";
    tr2.style.backgroundColor = "white";
    tr3.style.backgroundColor = "white";
    tr4.style.backgroundColor = "white";
    tr5.style.backgroundColor = "white";
    tr6.style.backgroundColor = "white";
}

//Pega o click do mouse e aciona a função imprimir
calcule.addEventListener('click', imprimir)
resetar.addEventListener('click', reset)