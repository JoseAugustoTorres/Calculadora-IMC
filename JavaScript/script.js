function pegarValoresEntrada() {
  let nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  verificaValores(nome, altura, peso);
}

function verificaValores(nome, altura, peso) {
  var letrasAlfabeto = /^[A-zÀ-ÿ]+$/;
  //Poderia ser escrito >> altura = Number(altura.replace(".",".")); <<
  //Mas para melhor visualização do que está sendo feito, escolhi separar em linhas.
  altura = altura.replace(",", ".");
  altura = Number(altura);
  peso = peso.replace(",", ".");
  peso = Number(peso);

  if (!nome.match(letrasAlfabeto)) {
    return alert("Nome não informado ou contém caracteres inválidos.");
  } else if (isNaN(altura) || altura <= 0) {
    return alert("Altura não informada ou contém valor inválido.");
  } else if (isNaN(peso) || peso <= 0) {
    return alert("Peso não informado ou contém valor inválido.");
  }

  calcularResultado(nome, altura, peso);
}

function calcularResultado(nome, altura, peso) {
  let calculo = peso / (altura * altura);
  calculo = calculo.toFixed(1);
  let resultado = "";

  switch (true) {
    case calculo < 18.5:
      resultado = "MAGREZA";
      break;
    case calculo >= 18.5 && calculo <= 24.9:
      resultado = "NORMAL";
      break;
    case calculo >= 25.0 && calculo <= 29.9:
      resultado = "SOBREPESO";
      break;
    case calculo >= 30.0 && calculo <= 39.9:
      resultado = "OBESIDADE";
      break;
    case calculo >= 40.0:
      resultado = "OBESIDADE GRAVE";
      break;
    default:
      alert("Erro interno");
      break;
  }

  mostrarValorTela(nome, resultado, calculo);
}

function mostrarValorTela(nome, resultado, calculo) {
  let mostrarValor = document.getElementById("resultado");
  mostrarValor.textContent = `Olá ${nome}, sua pontuação IMC foi de ${calculo} que corresponde à ${resultado}`;
}
