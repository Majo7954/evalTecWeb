const formulario = document.querySelector("#imc-form");
const peso = document.querySelector("#peso");
const estatura = document.querySelector("#estatura");
const imc = document.querySelector("#resultado-imc")

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let peso_ingresado = Number.parseFloat(peso.value);
    let estatura_ingresada = Number.parseFloat(estatura.value);
    let imc_calculado = peso_ingresado / (estatura_ingresada * estatura_ingresada);
    console.log(imc_calculado);
    imc.innerHTML = imc_calculado;
});
