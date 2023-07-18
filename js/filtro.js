const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", () => {
  console.log(campoFiltro.value);
  const pacientes = document.querySelectorAll(".paciente");

  if(campoFiltro.value.length > 0){
    for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    const tdNome = paciente.querySelector(".info-nome");
    const nome = tdNome.textContent;
    const expressao = new RegExp(campoFiltro.value, "i")
    
    if(!expressao.test(nome)){
        paciente.classList.add("invisivel");
    }else{
        paciente.classList.remove("invisivel");
    }
  }
  }else{
    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];
        paciente.classList.remove("invisivel");
        
    }
  }

  
});
