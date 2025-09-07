 // FUNDO
document.addEventListener("DOMContentLoaded", function() {
  VANTA.WAVES({
    el: "#background",     // div onde o fundo vai aparecer
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2F4F4F,       // cor em hexadecimal numérico
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

    if (calcular < 18.5) {
        numero.style.color = "orange";
        classificacao.textContent = "Abaixo do peso";
    } else if (calcular >= 18.5 && calcular <= 24.9) {
        numero.style.color = "orange";
        classificacao.textContent = "Peso normal";
    } else if (calcular >= 25.0 && calcular <= 29.9) {
        numero.style.color = "orange";
        classificacao.textContent = "Excesso de peso";
    } else if (calcular >= 30.0 && calcular <= 34.9) {
        numero.style.color = "orange";
        classificacao.textContent = "Obesidade grau 1";
    } else if (calcular >= 35.0 && calcular <= 39.9) {
        numero.style.color = "orange";
        classificacao.textContent = "Obesidade grau 2";
    } else {
        numero.style.color = "orange";
        classificacao.textContent = "Obesidade grau 3";
    }
    
});

/* ESTUDO - IGNORAR 

VARIÁVEIS
- const => É usado para declarar variáveis que não podem ser reatribuídas, ou seja, n pode trocar o valor dela depois de criada.
- let   => pode mudar a variável

SELEÇAÕ DE ELEMENTOS: 
document.querySelector('nome da classe') => Selecionar o elemento. O querySelector é para classes.
document.getElementById('nome do id')    => Selecionar o elemento. O getElentById é para id

COMO USAR?
const input1 = document.querySelector('.num1'); => Aqui está atribuindo o elemento com a classe ".num" para input1.

EVENTOS E FORMULÁRIO: addEventListerner é um método (função) pra "ouvir" eventos em um elemento HTML
button.addEventListerner('click', (e) => {  => Esse código serve quando esta usando a tag <form> no html. Ele previne para envio do form.
    e.preventDefault();                     => O código está falando: quando acontecer tal coisa nesse elemento, execute essa função
})                                             (no caso quando apertar o botão)
                                               O que é cada coisa: button  - O elemento HTML que vai "escutar" (botão)
                                                                   'click' - O tipo de evento ('click', 'mouseover', 'keydown'...)
                                                                    (e)    - E o oarâmetro que representa o evento PODE SER QUALQUER NOME 
                                                                             (mas pode podrão chamam de 'e' ou 'event')
                                                          preventDefault() -  Significa "Não faça o comportamento padrão"
                                                                              como o botão está dentro de um form o padrão e enviar e a página ser recarregar
                                            => Traduzindo tudo: "quando clicar no botão, execute a função, mas não recarregue a página"
                                            => Ordem -> elemento.addEventListener("evento", função)   .                                 

CAPTURA E CONVERSÃO DE VALORES:
const n1 = Number(input1.value.replace(',', '.')); => Esse código serve para quando digitar os números aceitar tbm a ',' e não só o '.'.

OPERAÇÕES MATEMÁTICAS: 
const calcular = n1 / (n2 * n2);

IMPRIMIR E LIMITAR CASAS DECIMAIS: 
resultado.textContent = "Seu IMC é: " + calcular.toFixed(2); => resultado é o id do elemento <p> | .textContent - Só texto | 
para imprimir e parecido com o java, usando concatenação | calcular.toFixed(2) - calcular (nome da variável para o calcular o imc) | .toFixed(2) - Limita 2 casas decimais dps da vírgula.

DESTACAR APENAS PARTE DO TEXTO
resultado.innerHTML = `Seu IMC é: <span id="numero">${calcular.toFixed(2)}</span>`; => Usado para mudar só uma parte do texto (utilizando span).
'.innerHTML' - aceita HTML

ATENÇÃO
Sempre usar 'const' por padrão.
Se precisar mudar o valor depois, usar o 'let'
Quase nunca usar o 'var'

usar ' ' ou "" ou ` ` => Se for texto simples, usa ' ' ou " " - Tanto faz
                      => Se for misturar variável, usa ` ` (template string)

const input1 = document.querySelector('.num1');                                     => Aqui tanto faz usar ' ' ou " ".
elemento.addEventListener("evento", função)                                         => Aqui tbm tanto faz usar ' ' ou " ".
resultado.innerHTML = `Seu IMC é: <span id="numero">${calcular.toFixed(2)}</span>`; => Como está usando uma variável usar ` `.

Ter atenção nas ordens de cada linha, se não pode não funcionar algumas coisas pq está iniciando primeiro
*/