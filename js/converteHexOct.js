const botaoOctHexa = document.querySelector('.oct-hexa');
const botaoHexaOct = document.querySelector('.hexa-oct');
const form = document.querySelector('.form');
const formHexaOct = document.querySelector('.hexaOctForm');
const inputHexaOct = document.querySelector('#hexa-oct');
const inputRes = document.querySelector('#result');
const botaoConvert = document.querySelector('.converte');
const botaoLimpar = document.querySelector('.limpar');
let mensagem = document.querySelector('[data-mensagem]');

botaoConvert.addEventListener('click', mostraResult);

botaoLimpar.addEventListener('click', limpaForms(inputHexaOct, inputRes, mensagem));

let arrBin = [];
let posicoesIniciais = {
    '0': ['0', '0', '0', '0'],
    '1': ['0', '0', '0', '1'], 
    '2': ['0', '0', '1', '0'], 
    '3': ['0', '0', '1', '1']
}

function mostraResult(resultado) {
    converteBinOct(estruturaBinOct(inputHexaOct, arrBin));
    inputRes.value = conversor(resultado);
    return inputRes;
}

function conversor(event) {
    event.preventDefault();//Previne as funções padrões do botão.... Atualizar a página
    return calculaHexaBin(arrBin, inputHexaOct.value);
}

function limpaForms(hex, res, msg) {
    hex.value = '';
    res.value = '';
    msg.innerHTML = '';
}

function converteLetraNum(num) {
    switch(num) {
        case 'A':
            return num = 10
        case 'B':
            return num = 11
        case 'C':
            return num = 12
        case 'D':
            return num = 13
        case 'E':
            return num = 14
        case 'F':
            return num = 15
        case 'a':
            return num = 10
        case 'b':
            return num = 11
        case 'c':
            return num = 12
        case 'd':
            return num = 13
        case 'e':
            return num = 14
        case 'f':
            return num = 15
        default:
            return validaNumero(num);
    }
}

function validaNumero(num) {
    num = parseInt(num);
    if(!num && num != 0) {
       let erro = new Error("O caractere digitado não é um valor hexadecimal válido!");
       limpaForms(inputHexaOct, inputRes, mensagem);
       return erro;
    } 
    return num.toString();
}

function calculaHexaBin(input) {
    input = inputHexaOct.value.split("");
    console.log(input);
    let res = '';
    let resFinal = [];
    let conversorBin = 2;
    input.forEach((valor) => {
        switch(valor) {
            case '0':
                console.log('entrou 2');
                resFinal.push(posicoesIniciais[0]);
                break;
            case '1':
                console.log('entrou 2');
                resFinal.push(posicoesIniciais[1]);
                break;
            case '2':
                console.log('entrou 2');
                resFinal.push(posicoesIniciais[2]);
                break;
            case '3':
                console.log('entrou 2');
                resFinal.push(posicoesIniciais[3]);
                break;
            default:
                valor = converteLetraNum(valor);
                while((~~valor / conversorBin) != 0) {
                    res += (valor % conversorBin);
                    console.log((valor % conversorBin));
                    valor = ~~(valor/conversorBin);
                }
                if(res.length < 4 && res.length != 0) {
                    res += '0';
                }
                res = res.split("").reverse();
                while(res != 0) {
                    console.log(res);
                    resFinal.push(res.splice(0, 4));
                }  
                break;
        }
    })
    console.log(resFinal[0][0]);
   
    // while(resFinal[0][0] == '0'){
    //     if(resFinal[0][0] == '0') {
    //         resFinal[0].shift();
    //         console.log(resFinal);
    //     }
    // }
    return resFinal.toString().replace(/,/g, '');
}

function estruturaBinOct(input, array) {
    //event.preventDefault();
    input = inputHexaOct.value.split('').reverse();
    let contador = 0;
    while(input.length != 0) {
        array.push(input.splice(0,3));
        for(let i = 0; i < array[contador].length; i++){
            array[contador][i] = parseInt(array[contador][i]);
        }
        contador++;
    }
    console.table(array)
    return array;
}

function converteBinOct(array) {
    for(let i = 0; i < array.length; i++) {
        let multiplier = 1;
        for(let contador = 0; contador < array[i].length; contador++) {
            if(array[contador][i] == 1 || array[contador][i] == 0){
                array[contador][i] = array[contador][i] * multiplier;
                multiplier = multiplier * 2;
            }
        }
        multiplier = 1;
    }
    console.log(array);
}





