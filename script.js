let calculo = {
  digito_calc: [0],
  tipo_calc: ["primeira_posicao"],
};

let parenteses = {
    abrir: [],
    fechar: []
};

function clicar_digito_calc(event) {
  const digito = event.srcElement.dataset.valor;
  const tipo = event.srcElement.dataset.tipo;
  const tamanhoArray = calculo["digito_calc"].length;
  const ultimoItem = {
    digito_calc: calculo["digito_calc"][tamanhoArray - 1],
    tipo_calc: calculo["tipo_calc"][tamanhoArray - 1],
  };

  if(tipo == "numero" || digito == "raiz"){
    calculo["digito_calc"].push(digito)
    if (digito == "raiz"){
        parenteses++;
    }
  }

  switch (ultimoItem["tipo_calc"]) {
    case "primeira_posicao":
    case "operador_composto":
      switch (digito) {
        case "subtracao":
        case "raiz":
          break;
        default:
      }
      break;
    case "operador_simples":
      break;
    default:
  }

  document.getElementById("console").innerHTML = `
    <td colspan="5" style="max-width: 400px; text-align: end;">${calculo["digito_calc"]}</td>
  `;
}

document.addEventListener("click", clicar_digito_calc);
