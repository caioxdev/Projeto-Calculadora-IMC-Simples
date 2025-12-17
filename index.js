// FUNDO
document.addEventListener("DOMContentLoaded", function () {
    VANTA.WAVES({
        el: "#background",     // div onde o fundo vai aparecer
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1C1F26,       // cor em hexadecimal numérico
        shininess: 50.00,
        waveHeight: 20.00,
        waveSpeed: 1.00,
        zoom: 1.00
    });
});


//CALULAR O IMC
const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');
const button = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');
const classificacao = document.getElementById('classificacao');


button.addEventListener('click', (e) => {
    e.preventDefault();

    const n1 = Number(input1.value.replace(',', '.'));
    const n2 = Number(input2.value.replace(',', '.'));

    const calcular = n1 / (n2 * n2);

    resultado.textContent = "Seu IMC é: " + calcular.toFixed(2);
    resultado.innerHTML = `Seu IMC é: <span id="numero">${calcular.toFixed(2)}</span>`;

    const numero = document.getElementById('numero');
    numero.style.color = "orange";

    switch (true) {
        case calcular < 18.5:
            classificacao.textContent = "Abaixo do peso";
            break;
        case calcular <= 24.9:
            classificacao.textContent = "Peso normal";
            break;
        case calcular <= 29.9:
            classificacao.textContent = "Excesso de peso";
            break;
        case calcular <= 34.9:
            classificacao.textContent = "Obesidade grau 1";
            break;
        case calcular <= 39.9:
            classificacao.textContent = "Obesidade grau 2";
            break;
        default:
            classificacao.textContent = "Obesidade grau 3";
    }
});