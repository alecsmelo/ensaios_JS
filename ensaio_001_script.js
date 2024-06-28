let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

let saida_a = document.querySelector('#saida_01');
let saida_b = document.querySelector('#saida_02');
let saida_c = document.querySelector('#saida_03');

// Testa as Variárias numerUm (int) e stringUm (string), se retorno True, mensagem do console do no IF, se não Else
if (numeroUm == stringUm){
    console.log(`As Variáveis numeroUm = ${numeroUm} e stringUm = ${stringUm} tem o mesmo valor, mas tipos diferentes`);
    saida_a.innerHTML =`Sim, as variáveis numeroUm = ${numeroUm} e stringUm = ${stringUm} tem o mesmo valor, com tipos diferentes`;
}
else {
    console.log(`As Variáveis numeroUm = ${numeroUm} e stringUm = ${stringUm} não tem o mesmo valor`);
    saida_a.innerHTML =`Não, as variáveis numeroUm = ${numeroUm} e stringUm = ${stringUm} não tem o mesmo valor e são tipos diferentes`;
}

// Testa as Variárias numerTrinta (int) e stringTrinta (string), se retorno True, mensagem do console do no IF, se não Else
if (numeroTrinta == stringTrinta){
    console.log(`As Variáveis numeroTrinta = ${numeroTrinta} e stringTrinta = ${stringTrinta} tem o mesmo valor, mas tipos diferentes`);
    saida_b.innerHTML =`Sim, as variáveis numeroTrinta = ${numeroTrinta} e stringTrinta = ${stringTrinta} tem o mesmo valor, com tipos diferentes`;
}
else {      
    console.log(`As Variáveis numeroTrinta = ${numeroTrinta} e stringTrinta = ${stringTrinta}  não tem o mesmo valor`)
    saida_b.innerHTML =`Não, as variáveis numeroTrinta = ${numeroTrinta} e stringTrinta = ${stringTrinta}  não tem o mesmo valor e são tipos diferentes`;
}

// Testa as Variárias numerDez (int) e stringDez (string), se retorno True, mensagem do console do no IF, se não Else
if (numeroDez == stringDez){
    console.log(`As Variáveis numeroDez = ${numeroDez} e stringDez = ${stringDez} tem o mesmo valor, mas tipos diferentes`);
    saida_c.innerHTML =`Sim, as variáveis numeroDez = ${numeroDez} e stringDez = ${stringDez}tem o mesmo valor, com tipos diferentes`;
}
else {
    console.log(`As Variáveis numeroDez = ${numeroDez} e stringDez = ${stringDez} não tem o mesmo valor`);
    saida_c.innerHTML `Não, as variáveis numeroDez = ${numeroDez} e stringDez = ${stringDez} não tem o mesmo valor e são tipos diferentes`;
}
