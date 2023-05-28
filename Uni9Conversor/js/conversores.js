const binIn = document.querySelector("#bin_in");
const binOut = document.querySelector("#bin_out");
const decIn = document.querySelector("#dec_in");
const decOut = document.querySelector("#dec_out");
const octIn = document.querySelector("#oct_in");
const octOut = document.querySelector("#oct_out");
const hexIn = document.querySelector("#hex_in");
const hexOut = document.querySelector("#hex_out");
const inputUsuario = document.querySelector("#inputs");
const outputRes = document.querySelector(".resultado")
const convert = document.querySelector(".shadow__btn")

let arrBin = [];
let posicoesIniciais = {
    '0': ['0', '0', '0', '0'],
    '1': ['0', '0', '0', '1'], 
    '2': ['0', '0', '1', '0'], 
    '3': ['0', '0', '1', '1']
}

convert.addEventListener("click", mostraResult)

function mostraResult(resultado) {
    event.preventDefault();
    if((decIn.checked && binOut.checked) || (decIn.checked && octOut.checked)) {
        outputRes.value = converteDecimalBinOct(resultado);
    } else if ((decIn.checked && hexOut.checked) || (hexIn.checked && decOut.checked)) {
        outputRes.value = converteDecimalHex(resultado);
    } else if ((binIn.checked && hexOut.checked) || (hexIn.checked && binOut.checked)){
        outputRes.value = convertBinHexa(resultado);
    } else if (octIn.checked && binOut.checked) {
        outputRes.value = octalBin(resultado);
    } else if (octIn.checked && decOut.checked) {
        outputRes.value = octalDecimal(resultado);
    } else if (binIn.checked && decOut.checked) {
        outputRes.value = binToDec(resultado)
    }
    return outputRes;
}

function converteDecimalBinOct(event, decimal, conversor) {
    let res = '';
    let quo = '';
    if(decIn.checked && binOut.checked) {
        conversor = 2;
        decimal = inputUsuario.value;
    } else if (decIn.checked && octOut.checked) {
        conversor = 8;
        decimal = inputUsuario.value;
    }
    //loop para retornar o valor em binario ou octal ... retornará o valor ao contrário.
    while((~~decimal/conversor) !== 0) {
        console.log(`decimal = ${decimal}`);
        quo = ~~(decimal/conversor); //guarda o valor do quociente dentro da variavel quo, iniciada na linha 74
        console.log(`quociente = ${quo}`);
        res += (decimal % conversor); //
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

function converteDecimalHex(event) {
    if(decIn.checked && hexOut.checked){
        return converteNumHex(inputUsuario);
    } else if (hexIn.checked && decOut.checked) {
        return converteLetraHex(inputUsuario);
    }
}

function converteNumHex(inputUsuario) {
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


function convertBinHexa() {
    if(binIn.checked && hexOut.checked){
        arrBin = [];
        return calculaBinHexa(arrBin, inputUsuario.value);
    } else if (hexIn.checked && binOut.checked) {
        return calculaHexaBin(inputUsuario.value);
    }
}
    
//Converte Input recebido no formato String para Number
function converteStringNum(input, array) {
    input = inputUsuario.value.split("").reverse();
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
                // mensagem.innerHTML = "Insira um valor Binário Válido!";
                // setTimeout(() => {
                //     limpaForms(inputUsuario, inputHexaBin, inputRes, mensagem)
                // }, 5000);
                outputRes.value = "";
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
    //    limpaForms(inputBinHex, inputHexaBin, inputRes, mensagem);
       return erro;
    } 
    return num.toString();
}

function calculaHexaBin(input) {
    input = inputUsuario.value.split("");
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

//HENRIQUE ------------------------------------------------------------------------------
function octalBin(numoct)
{
    numoct = inputUsuario.value;
    let i = 0;
   
    let binario = "";
      
    while (i<numoct.length) {
          
        let c=numoct[i];
        switch (c) {
        case '0':
            binario += "000";
            break;
        case '1':
            binario += "001";
            break;
        case '2':
            binario += "010";
            break;
        case '3':
            binario += "011";
            break;
        case '4':
            binario += "100";
            break;
        case '5':
            binario += "101";
            break;
        case '6':
            binario += "110";
            break;
        case '7':
            binario += "111";
            break;
        default:
            document.write( "<br>Número Octal Inválido "+ numoct[i]);
            break;
        }
        i++;
    } 
   
    return binario;
}

function octalDecimal(numoct)
{
    event.preventDefault();
    numoct = inputUsuario.value;
    let num = numoct;
    let dec_valor = 0;
 
 
    let base = 1;
 
    let conta = num;
    while (conta) {
 
      
        let ultimo_digito = conta % 10;
        conta = Math.floor(conta / 10);
 
       
        dec_valor += ultimo_digito * base;
 
        base = base * 8;
    }
 
    return dec_valor;
}

//========================================================
//Lucas
//========================================================
function binToDec() {
    let bins = inputUsuario.value.split("").map(b => parseInt(b)).reverse();
    let convers  = 0;
    for (let i = 0; i < bins.length; i++) {
        convers  += bins[i] << i;
    }
    
    return convers;
}
