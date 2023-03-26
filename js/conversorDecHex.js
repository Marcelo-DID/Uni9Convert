//const botaoBin = document.querySelector('.bin');
//const botaoOct = document.querySelector('.octal');
//const form = document.querySelector('.form');
//const formBin = document.querySelector('.binForm');
//const formOct = document.querySelector('.octalForm');
//const inputBin = document.querySelector('#binary');
//const inputOct = document.querySelector('#oct');
//const inputRes = document.querySelector('#result');
//const botaoConvert = document.querySelector('.converte');

// const clickBotaoBin = botaoBin.addEventListener('click', () => {
//     return apresentaForm(formBin, formOct);
// });

// const clickBotaoOct = botaoOct.addEventListener('click', () => {
//     return apresentaForm(formOct, formBin);
// });

// const clickResult = botaoConvert.addEventListener('click', mostraResult);

// //Apresenta o formulário de acordo com o botão selecionado (binario ou octal)
// function apresentaForm(add, rem) {
//     limpaForms(inputBin, inputOct, inputRes);
//     add.classList.add('active')
//     rem.classList.remove('active')
// }

// function mostraResult(resultado) {
//     inputRes.value = converteDecimal(resultado);
//     return inputRes;
// }

let formBin = true;
let formOct = false;
let inputDec = 2222;
let inputOct = 2422;

function converteDecimal(event, decimal) {
    //event.preventDefault();//Previne as funções padrões do botão.... Atualizar a página
    let res = '';
    let quo = '';
    let conversor = '';
    //if(formBin.classList.contains('active')) {
    if(formBin) {
        conversor = 16;
        decimal = inputDec;
    //} else if (formOct.classList.contains('active')) {
    } else if (formOct) {
        conversor = 8;
        decimal = inputOct;
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

console.log(converteDecimal());



// function limpaForms(bin, oct, res) {
//     if(formBin.classList.contains('active') || formOct.classList.contains('active')) {
//         bin.value = '';
//         oct.value = '';
//         res.value = '';
//     }
// }


