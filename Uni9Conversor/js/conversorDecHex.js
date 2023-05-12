const botaoDecHexa = document.querySelector('.dec-hexa');
const botaoHexaDec = document.querySelector('.hexa-dec');
const form = document.querySelector('.form');
const formDecHexa = document.querySelector('.decHexaForm');
const formHexaDec = document.querySelector('.hexaDecForm');
const inputDecHex = document.querySelector('#dec-hexa');
const inputHexaDec = document.querySelector('#hexa-dec');
const inputRes = document.querySelector('#result');
const botaoConvert = document.querySelector('.converte');
let mensagem = document.querySelector('[data-mensagem]');

clickBotao(botaoDecHexa, formDecHexa, formHexaDec);

clickBotao(botaoHexaDec, formHexaDec, formDecHexa);

botaoConvert.addEventListener('click', mostraResult);



function clickBotao(botao, formOn, formOff) {
    botao.addEventListener('click', () => {
        return apresentaForm(formOn, formOff);
    })
}

//Apresenta o formulário de acordo com o botão selecionado (binario ou octal)
function apresentaForm(add, rem) {
    limpaForms(inputDecHex, inputHexaDec, inputRes, mensagem);
    add.classList.add('active')
    rem.classList.remove('active')
}

function mostraResult(resultado) {
    if(formDecHexa.classList.contains('active')){
        inputRes.value = converteDecimal(resultado);
    } else if (formHexaDec.classList.contains('active')) {
        inputRes.value = converteDecimal(resultado);
    }
    return inputRes.toString();
}

function converteDecimal(event, decimal, conversor) {
    event.preventDefault();//Previne as funções padrões do botão.... Atualizar a página
    if(formDecHexa.classList.contains('active')){
        return converteNumHex(inputDecHex, decimal, conversor);
    } else if (formHexaDec.classList.contains('active')) {
        return converteLetraHex(inputHexaDec);
    }
}

function converteNumHex(inputUsuario, decimal, conversor) {
    let res = '';
    let quo = '';
    conversor = 16;
    decimal = inputUsuario.value;
    while((~~decimal/conversor) !== 0) {
        console.log(`decimal = ${decimal}`);
        quo = ~~(decimal/conversor); //guarda o valor do quociente dentro da variavel quo, iniciada na linha 74
        console.log(`quociente = ${quo}`);
        switch(decimal % conversor) {
            case 10:
                res += 'A';
                break;
            case 11:
                res += 'B';
                break;
            case 12:
                res += 'C';
                break;
            case 13:
                res += 'D';
                break;
            case 14:
                res += 'E';
                break;
            case 15:
                res += 'F';
                break;
            default:
                res += (decimal % conversor);
        }   
        console.log(`resultado = ${res}`);
        decimal = ~~(decimal/conversor); //decimal a ser divido pelo conversor no proximo loop do while... Obs.: sem essa linha o codigo se torna infinito!!
        console.log(`decimal = ${decimal} - Finalizado nessa linha`);
    } 
    // ajustando o valor (invertendo a direção)
    res = res.split(""); //espalha o resultado
    console.log(res);
    res.reverse();//inverte a ordem do array;
    return res.toString().replace(/,/g, ''); //retorna o resultado transformando em string e retira as virgulas
}


function converteLetraHex(inputUsuario) {
    let iterador = [];
    let res = 0;
    let resArray = inputUsuario.value.split("");
    console.log(resArray);
    resArray.forEach((char) => {
        switch(char) {
            case 'A':
                iterador.push(10);
                break;
            case 'B':
                iterador.push(11);
                break;
            case 'C':
                iterador.push(12);
                break;
            case 'D':
                iterador.push(13);
                break;
            case 'E':
                iterador.push(14);
                break;
            case 'F':
                iterador.push(15);
                break;
            case 'a':
                iterador.push(10);
                break;
            case 'b':
                iterador.push(11);
                break;
            case 'c':
                iterador.push(12);
                break;
            case 'd':
                iterador.push(13);
                break;
            case 'e':
                iterador.push(14);
                break;
            case 'f':
                iterador.push(15);
                break;
            default:
                if(parseInt(char) || char == '0'){
                    iterador.push(parseInt(char));
                } else {
                    mensagem.innerHTML = "Erro, digite um valor válido!";
                    setTimeout(() => {
                        limpaForms(inputDecHex, inputHexaDec, inputRes, mensagem)
                    }, 5000);
                    throw Error = new Error("Erro, Input deve ser um número hexadecimal válido, 0 -> F");
                }
                break;
            }
        }
    );
    iterador.reverse();
    for(let i = 0; i < iterador.length; i++) {
        iterador[i] = iterador[i] * (16 ** i);
        console.log(iterador);
        res += iterador[i];
        console.log(res);
    }
    return res;
}

   
function limpaForms(dec, hex, res, msg) {
    if(formDecHexa.classList.contains('active') || formHexaDec.classList.contains('active')) {
        dec.value = '';
        hex.value = '';
        res.value = '';
        msg.innerHTML = '';
    }
}


