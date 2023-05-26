function OctBin(numoct)
{
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
 

let numoct = prompt("digite um valor octal");
 

document.write( "Valor Binário Equivalente = "+ OctBin(numoct));
 
