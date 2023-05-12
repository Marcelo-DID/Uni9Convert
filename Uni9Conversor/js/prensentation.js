

/* 
**Creating an algorithm to define which text will be displayed according to "Radio" selector buttons*

 Program: presentation.js
  Gabriel Paixão R. Silva
 date: 01/05/2023
 version: 1.0

*/

function display() {

     /* -----------------------------------Binario----------------------------------------*/

    if (document.getElementById('bin_in').checked && document.getElementById('dec_out').checked) {
        document.getElementById("disp").innerHTML = " Binario para Decimal: Cada posição tem um peso de uma potência de 2 (base do sistema binário). Sendo assim, para se converter um número de binário para decimal, deve-se multiplicar cada bit pela potência de sua posição e somar os resultados.";
    }
    else if (document.getElementById('bin_in').checked && document.getElementById('hex_out').checked) {
        document.getElementById("disp").innerHTML = " Binario para Hexadecimal:Para converter um número binário para hexadecimal, basta separar o número binário da direita para a esquerda em grupos de quatro bits em seguida, converter cada conjunto em um algarismo hexadecimal correspondente, se não for possivel formar um grupo de quatro bits, completa-se o grupo com zero na esquerda, ou seja, por exemplo o número 11010 ficará 00011010.";
    }
    else if (document.getElementById('bin_in').checked && document.getElementById('oct_out').checked) {
        document.getElementById("disp").innerHTML = " Binario para Octal: Para conversão de binário em octal, faz-se o processo inverso, ou seja, separa-se o número em grupo de 3 bits (a partir da direita) e converte cada grupo no octal correspondente. ";
    }

    /* -----------------------------------Decimal----------------------------------------*/

    else if (document.getElementById('dec_in').checked && document.getElementById('bin_out').checked) {
        document.getElementById("disp").innerHTML = " Decimal para Binario: Para realizar a conversão de decimal para binário, realiza-se a divisão sucessiva por 2 (base do sistema binário). O resultado da conversão será dado pelo último quociente (MSB) e o agrupamento dos restos de divisão será o número binário. A leitura do resultado é feita do último quociente para o primeiro resto.";
    }

    else if (document.getElementById('dec_in').checked && document.getElementById('hex_out').checked) {
        document.getElementById("disp").innerHTML = " Decimal para Hexadecimal: Para converter um número decimal em hexadecimal realiza-se a divisão sucessiva por 16 (base do sistema hexadecimal), semelhante à conversão de decimal para binário. O resultado é lido da direita para a esquerda a partir do último quociente. Assim. 438 é igual a 1B616.";
    }

    else if (document.getElementById('dec_in').checked && document.getElementById('oct_out').checked) {
        document.getElementById("disp").innerHTML = " Decimal para Octal: Para converter um número decimal em octal realiza-se a divisão sucessiva por 8 (base do sistema octal), semelhante às conversões apresentadas para os sistemas binário e hexadecimal. O resultado é lido da direita para a esquerda a partir do último quociente. Assim, 246 é igual a 3668. ";
    }

    /* -----------------------------------Hexadecimal-------------------------------------*/

    else if (document.getElementById('hex_in').checked && document.getElementById('bin_out').checked) {
        document.getElementById("disp").innerHTML = "Hexadecimal para Binario: É, de fato, simples: basta pegar um dígito e convertê-lo para os quatro dígitos binários equivalentes. Sublime o texto invisível à esquerda do sinal de igual para ver se está acertando: A23 = 1010 0010 0011. BEE = 1011 1110 1110.";
    }

    else if (document.getElementById('hex_in').checked && document.getElementById('dec_out').checked) {
        document.getElementById("disp").innerHTML = " Hexadecimal para Decimal: Para converter um número hexadecimal para decimal, basta multiplicar cada digito pelo seu valor de posição e somar os resultados.";
    }

    else if (document.getElementById('hex_in').checked && document.getElementById('oct_out').checked) {
        document.getElementById("disp").innerHTML = " Hexadecimal para Octal: Para isso, você deverá separar as três letras hexadecimais e convertê-las para os binários de cada uma. Depois disso, você junta o número inteiro em um binário e separa, desse binário gerado, grupos de 3 números.";
    }

    /* -----------------------------------Octal-----------------------------------------*/

    else if (document.getElementById('oct_in').checked && document.getElementById('bin_out').checked) {
        document.getElementById("disp").innerHTML = "Octal para Binario...";
    }

    else if (document.getElementById('oct_in').checked && document.getElementById('dec_out').checked) {
        document.getElementById("disp").innerHTML = " Octal para Decimal: Para converter um número octal para decimal, basta multiplicar cada digito pelo seu valor de posição e somar os resultados.";
    }

    else if (document.getElementById('oct_in').checked && document.getElementById('hex_out').checked) {
        document.getElementById("disp").innerHTML = " Octal para Hexadecimal: Quando um número tiver a notação 57358, por exemplo, você verá que ele terá a notação de base 8, representando a base octal. Para essa conversão, será necessário você dividir o número octal de acordo com a tabela da base octal e juntar o resultado em um binário único.";
    }

    else {
        document.getElementById("disp").innerHTML = " ";
    }
}