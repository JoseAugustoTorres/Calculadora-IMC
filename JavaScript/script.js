function pegarValoresEntrada() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    verificaValores(nome, altura, peso);
}

function verificaValores(nome, altura, peso) {
    altura = altura.replace(",",".");
    altura = parseFloat(altura);
    peso = peso.replace(",",".");
    peso = parseFloat(peso);

    var verifica = 
    typeof(nome) == typeof("")
    && !(isNaN(altura)) 
    && !(isNaN(peso))
    && altura != 0
    && peso != 0;

    return verifica ? calcularResultado(nome, altura, peso) : alert("Informações erradas.");
}

function calcularResultado(nome, altura, peso) {
    let calculo = peso / (altura * altura);
    calculo = calculo.toFixed(1);
    let resultado = "";

    switch (true){
        case (calculo < 18.5):
            resultado = "MAGREZA";
            break;
        case (calculo >= 18.5 && calculo <= 24.9):
            resultado = "NORMAL";
            break;
        case (calculo >= 25.0 && calculo <= 29.9):
            resultado = "SOBREPESO";
            break;
        case (calculo >= 30.0 && calculo <= 39.9):
            resultado = "OBESIDADE";
            break;
        case (calculo >= 40.0):
            resultado = "OBESIDADE GRAVE";
            break;
        default:
            alert("Erro interno");
            break;
    }

    mostrarValorTela(nome, resultado, calculo);
}

function mostrarValorTela(nome, resultado, calculo){
    let mostrarValor = document.getElementById('resultado');
    mostrarValor.textContent = `Olá ${nome}, seu resultado foi ${calculo} que corresponde à ${resultado}`;
}