function calcularSaldo(vitorias, derrotas) {
    return  saldo = vitorias - derrotas;
}

function calcularNivel(){
    saldo = calcularSaldo(106,5)
    let nivel = "";
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo > 10 && saldo < 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo >= 101) {
        nivel = "Imortal";
    }
    return  "O saldo de vitórias do heroi é " + saldo + " seu nivel é " + nivel
}


console.log(calcularNivel())
