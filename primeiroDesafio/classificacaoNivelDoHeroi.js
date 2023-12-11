
let nomeHeroi = "Julio"
let expecienciaDoHeroi = 7000
let classificacao = "Ferro"

switch (true){
    case expecienciaDoHeroi <= 999:
        classificacao = "Ferro"
        break
    case expecienciaDoHeroi >= 1000 && expecienciaDoHeroi <= 2000:
    classificacao = "Bronze"
    break
    case expecienciaDoHeroi > 2000 && expecienciaDoHeroi <= 6000:
        classificacao = "Prata"
        break
    case expecienciaDoHeroi > 6000 && expecienciaDoHeroi <= 7000:
        classificacao = "Ouro"
        break
    case expecienciaDoHeroi > 7000 && expecienciaDoHeroi <= 8000:
        classificacao = "Platina"
        break
    case expecienciaDoHeroi > 8000 && expecienciaDoHeroi <= 9000:
        classificacao = "Ascendente"
        break
    case expecienciaDoHeroi > 9000 && expecienciaDoHeroi <= 10000:
        classificacao = "Imortal"
        break
    case expecienciaDoHeroi > 10000:
        classificacao = "Radiante"
    default:
        classificacao = "xp indefinido"
}

console.log("O heroi " + nomeHeroi, "está no nível de", classificacao)