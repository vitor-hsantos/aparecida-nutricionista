const table = document.querySelector('#tabela-pacientes');

table.addEventListener('dblclick', function(event) {
  // Verifica se o elemento clicado é uma célula <td>
  if (event.target.tagName === 'TD') {
    event.target.parentNode.remove();
  }
});

const linhas = document.querySelectorAll("#tabela-pacientes");

linhas.forEach(function(linha) {
  linha.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
      event.target.parentNode.remove();  
    }, 500); 
  });
});






