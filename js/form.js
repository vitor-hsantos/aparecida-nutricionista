const btnAdd = document.getElementById('adicionar-paciente');

btnAdd.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    const paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibirMensagensDeErro(erros);
        
        return;
    }

    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    const MensagensDeErro = document.querySelector("#mensagens-erro");
    MensagensDeErro.innerHTML = "";

    form.reset();

});


function obtemPacienteDoFormulario(form){
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value) 
    }

    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function exibirMensagensDeErro(erros){
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
      const li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
}

function validaPaciente(paciente){
    let erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    if(paciente.nome.length === 0){
        erros.push("Insira um nome");
    }

    if(paciente.peso.length === 0){
        erros.push("Insira o peso");
    }

    if(paciente.gordura.length === 0){
        erros.push("Insira o percentual de gordura");
    }

    if(paciente.altura.length === 0){
        erros.push("Insira a altura");
    }

    return erros;
}
