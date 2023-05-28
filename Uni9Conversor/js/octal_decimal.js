
 

function octalDecimal(numoct)
{
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
 

 
    let num = prompt("digite um valor octal");
 
    document.write("O valor em decimal é =" + octalDecimal(num) + "<br>");