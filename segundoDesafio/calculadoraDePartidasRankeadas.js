function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivel(saldo) {
    saldo = calcularSaldo(10,5)
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
 return `O Herói tem um saldo de ${saldo} e está no nível de ${nivel}.`;
}


console.log(calcularNivel(10,5))
