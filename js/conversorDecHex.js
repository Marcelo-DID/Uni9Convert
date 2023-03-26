const botaoDecHexa = document.querySelector('.dec-hexa');
const botaoHexaDec = document.querySelector('.hexa-dec');
const form = document.querySelector('.form');
const formDecHexa = document.querySelector('.decHexaForm');
const formHexaDec = document.querySelector('.hexaDecForm');
const inputDecHex = document.querySelector('#dec-hexa');
const inputHexaDec = document.querySelector('#hexa-dec');
const inputRes = document.querySelector('#result');
const botaoConvert = document.querySelector('.converte');

const clickBotaoHexa = botaoDecHexa.addEventListener('click', () => {
     return apresentaForm(formDecHexa, formHexaDec);
});

const clickBotaoDec = botaoHexaDec.addEventListener('click', () => {
     return apresentaForm(formHexaDec, formDecHexa);
});

const clickResult = botaoConvert.addEventListener('click', mostraResult);

//Apresenta o formulário de acordo com o botão selecionado (binario ou octal)
function apresentaForm(add, rem) {
    limpaForms(inputDecHex, inputHexaDec, inputRes);
    add.classList.add('active')
    rem.classList.remove('active')
}

function mostraResult(resultado) {
    inputRes.value = converteDecimal(resultado);
    return inputRes.toString();
}

function converteDecimal(event, decimal, conversor) {
    event.preventDefault();//Previne as funções padrões do botão.... Atualizar a página
    let res = '';
    let quo = '';
    if(formDecHexa.classList.contains('active')){
        conversor = 16;
        decimal = inputDecHex.value;
    } else if (formHexaDec.classList.contains('active')) {
        return;
    }
    //loop para retornar o valor em binario ou octal ... retornará o valor ao contrário.
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


function limpaForms(dec, hex, res) {
    if(formDecHexa.classList.contains('active') || formHexaDec.classList.contains('active')) {
        dec.value = '';
        hex.value = '';
        res.value = '';
    }
}


