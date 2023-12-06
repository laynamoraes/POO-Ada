// Implemente um contador de palavras em JavaScript utilizando POO. O contador deve receber uma string como entrada e fornecer a contagem de palavras.

// Classe: ContadorDePalavras
// Atributo: `texto` (string de entrada).
// Método: `contarPalavras()`, que retorna o número de palavras no texto.

class ContadorDePalavras {
  constructor(texto) {
    this.texto = texto
  }

  contarPalavras() {
    const quantidadeDePalavras = this.texto.split(" ")
    return quantidadeDePalavras.length
  }
}

const contadorPalavras = new ContadorDePalavras(
  "JavaScript é uma linguagem poderosa."
)

const contagem = contadorPalavras.contarPalavras()
console.log(`Número de palavras: ${contagem}`)
