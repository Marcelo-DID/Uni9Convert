const botaoBinHexa = document.querySelector('.bin-hexa');
const botaoHexaBin = document.querySelector('.hexa-bin');
const form = document.querySelector('.form');
const formBinHexa = document.querySelector('.binHexaForm');
const formHexaBin = document.querySelector('.hexaBinForm');
const inputBinHex = document.querySelector('#bin-hexa');
const inputHexaBin = document.querySelector('#hexa-bin');
const inputRes = document.querySelector('#result');
const botaoConvert = document.querySelector('.converte');
let mensagem = document.querySelector('[data-mensagem]');

inputBinHex.type = "text"
console.log(inputBinHex);
//inputBinHex.attributes.item()

//Inicia o Array que irá compor os arrays
let arrBin = [];
let posicoesIniciais = {
    '0': ['0', '0', '0', '0'],
    '1': ['0', '0', '0', '1'], 
    '2': ['0', '0', '1', '0'], 
    '3': ['0', '0', '1', '1']
}

//função padrão de interação com botão
function clickBotao(botao, formOn, formOff) {
    botao.addEventListener('click', () => {
        return apresentaForm(formOn, formOff);
    })
}

//Interage com botão de escolha
const clickBotaoBinHexa = clickBotao(botaoBinHexa, formBinHexa, formHexaBin);

const clickBotaoHexaBin = clickBotao(botaoHexaBin, formHexaBin, formBinHexa);

const clickResult = botaoConvert.addEventListener('click', mostraResult);

//Apresente os formulários
function apresentaForm(add, rem) {
    limpaForms(inputBinHex, inputHexaBin, inputRes, mensagem);
    add.classList.add('active')
    rem.classList.remove('active')
}

//Limpa os formulários
function limpaForms(bin, hex, res, msg) {
    if(formBinHexa.classList.contains('active') || formHexaBin.classList.contains('active')) {
        bin.value = '';
        hex.value = '';
        res.value = '';
        msg.innerHTML = '';
    }
}

function mostraResult(resultado) {
    inputRes.value = conversor(resultado);
    return inputRes;
}

function conversor(event) {
    event.preventDefault();//Previne as funções padrões do botão.... Atualizar a página
    if(formBinHexa.classList.contains('active')){
        arrBin = [];
        return calculaBinHexa(arrBin, inputBinHex.value);
    } else if (formHexaBin.classList.contains('active')) {
        return calculaHexaBin(inputHexaBin);
    }
}
    
//Converte Input recebido no formato String para Number
function converteStringNum(input, array) {
    input = inputBinHex.value.split("").reverse();
    let contador = 0;
    while(input.length != 0) {
        array.push(input.splice(0, 4));
        for(let i = 0; i < array[contador].length; i++){
            array[contador][i] = parseInt(array[contador][i]);
        }
        contador++;
    }
    console.table(array)
    return array;
}

//Converte numero 10 - 15 para A - F
function converteNumLetra(num) {
    switch(num) {
        case 10:
            return num = 'A';
        case 11:
            return num = 'B';
        case 12:
            return num = 'C';
        case 13:
            return num = 'D';
        case 14:
            return num = 'E';
        case 15:
            return num = 'F';
        default:
            return num;
    }
}
//Conversão de letras do hexa --> numeros.
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


//Converte Binário para Hexa
function calculaBinHexa(array, input) {
    converteStringNum(input, array);
    let contador = 0;
    let multiplier = 1;
    let res = "";
    let acumulador = "";
    while(contador < array.length) {
        //console.log(contador);
        for(let i = 0; i < array[contador].length; i++) {
            if(array[contador][i] == 1 || array[contador][i] == 0){
                array[contador][i] = array[contador][i] * multiplier;
                multiplier = multiplier * 2;
            } else {
                mensagem.innerHTML = "Insira um valor Binário Válido!";
                setTimeout(() => {
                    limpaForms(inputBinHex, inputHexaBin, inputRes, mensagem)
                }, 5000);
                inputRes.value = "";
                throw Error = new Error("Erro, Input deve ser um número Binário válido, 0 ou 1");
            }
            
        }
        
        acumulador = array[contador].reduce((acc, curr) => acc + curr);
        //console.log(acumulador);
        res += converteNumLetra(acumulador);
        multiplier = 1;
        contador++; 
    }
    console.log(res);
    console.log(array);
    res = res.split("");
    res.reverse();
    console.log(res);
    return res.toString().replace(/,/g, '');
}

function validaNumero(num) {
    num = parseInt(num);
    if(!num && num != 0) {
       let erro = new Error("O caractere digitado não é um valor hexadecimal válido!");
       limpaForms(inputBinHex, inputHexaBin, inputRes, mensagem);
       return erro;
    } 
    return num.toString();
}

function calculaHexaBin(input) {
    input = inputHexaBin.value.split("");
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



// function converteHexaBin(input) {
//     console.log('entrou 1');
//     let i;
//     let res = "";
//     let resFinal = [];
   
//     for(i = 0; i < input.length; i++) {
//         input = converteLetraNum(input[i]);
//         console.log(input);
//         while((~~input / conversorBin) != 0) {
//             res += (input % conversorBin);
//             console.log((input % conversorBin));
//             input = ~~(input/conversorBin);
//         }
//         if(res.length < 4 && res.length != 0) {
//             res += '0';
//         }    
//     }
//     res = res.split("").reverse();
//     while(res != 0) {
//         console.log(res);
//         resFinal.unshift(res.splice(0, 4));
//     }  
   
//     console.log(resFinal);
//     return resFinal.reverse();
// }

//Chamada da função!!
//console.log(calculaBinHexa(arrBin, binarios));



