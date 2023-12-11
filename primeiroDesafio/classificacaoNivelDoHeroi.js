
let nomeHeroi = "Julio"
let saldoDeVitorias = 7000
let classificacao = "Ferro"

switch (true){
    case saldoDeVitorias <= 999:
        classificacao = "Ferro"
        break
    case saldoDeVitorias >= 1000 && saldoDeVitorias <= 2000:
    classificacao = "Bronze"
    break
    case saldoDeVitorias > 2000 && saldoDeVitorias <= 6000:
        classificacao = "Prata"
        break
    case saldoDeVitorias > 6000 && saldoDeVitorias <= 7000:
        classificacao = "Ouro"
        break
    case saldoDeVitorias > 7000 && saldoDeVitorias <= 8000:
        classificacao = "Platina"
        break
    case saldoDeVitorias > 8000 && saldoDeVitorias <= 9000:
        classificacao = "Ascendente"
        break
    case saldoDeVitorias > 9000 && saldoDeVitorias <= 10000:
        classificacao = "Imortal"
        break
    case saldoDeVitorias > 10000:
        classificacao = "Radiante"
    default:
        classificacao = "xp indefinido"
}

console.log("O heroi " + nomeHeroi, "está no nível de", classificacao)