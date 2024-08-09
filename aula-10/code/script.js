// Função para mostrar o resultado na página
function mostrarResultado(resultado) {
  document.getElementById('resultado').innerHTML = resultado;
}




// Contador de 1 a 10 usando while
function contador1a10() {

  let resultado = ""

  for (let contar = 1; contar <= 10; contar++) {
    resultado += ` ${contar}<br/> `
  }
  mostrarResultado(resultado)
}

// Contador de 10 a 0 usando while
function contador10a0() {
  let resultado = ""
  for (let contar = 10; contar >= 0; contar--) {
    resultado += ` ${contar}<br/> `
  }
  mostrarResultado(resultado)
}


// Contagem regressiva com número fornecido pelo usuário
function contagemRegressiva() {
  let resultado = ""
  let input = document.getElementById("inp").value;
  for (let n = input; n >= 0; n--) {
    resultado += ` ${n}<br/> `
  }mostrarResultado(resultado)
}
// Contagem progressiva com número fornecido pelo usuário
function contagemProgressiva() {
  let resultado = ""
  let input = document.getElementById("inp").value;
  for (let n = input; n <= 10; n++) {
    resultado += ` ${n}<br/> `
  }mostrarResultado(resultado)
}