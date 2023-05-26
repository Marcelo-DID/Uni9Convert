let bin = document.querySelector('#input_bin')
let out = document.querySelector('#output_bin')
let Bt = document.querySelector('.shadow_btn')

function binToDec() {
    let bins = bin.value.split("").map(b => parseInt(b)).reverse();
    let convers  = 0;
    for (let i = 0; i < bins.length; i++) {
        convers  += bins[i] << i;
    }
    
    return convers;
}

