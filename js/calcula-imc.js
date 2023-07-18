const titulo = document.querySelector(".titulo");
titulo.textContent = "aparecida nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  const tdpeso = paciente.querySelector(".info-peso");
  const peso = parseFloat(tdpeso.textContent); // Corrigido para parseFloat para obter um valor numérico

  const tdAltura = paciente.querySelector(".info-altura");
  const altura = parseFloat(tdAltura.textContent); // Corrigido para parseFloat para obter um valor numérico

  const tdImc = paciente.querySelector(".info-imc");

  let alturaValida = validaAltura(altura);
  let pesoValido = validaPeso(peso);

  if (!pesoValido) {
    tdImc.textContent = "Peso inválido!!"; 
    pesoValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    tdImc.textContent = "Altura inválida!!"; 
    alturaValida = false;
    paciente.style.backgroundColor = "lightcoral";
  }

  if (pesoValido && alturaValida) {
    const imc = calculaImc(peso, altura); 
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2); // Alterado para toFixed(2) para obter o IMC com duas casas decimais
}
