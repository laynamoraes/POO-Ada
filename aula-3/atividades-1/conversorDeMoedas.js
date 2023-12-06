// Crie um conversor de moeda simples em JavaScript utilizando POO. O conversor deve permitir a conversão de uma moeda para outra com base em uma taxa de câmbio.

// Classe: ConversorDeMoeda
// Atributos: taxaCambio.
// Método: converter(valor, moedaOrigem, moedaDestino), que converte o valor de uma moeda para outra.

class ConversorDeMoeda {
  constructor(taxaCambio) {
    this.taxaCambio = taxaCambio
  }

  converter(valor, moedaOrigem, moedaDestino) {
    const valorConvertido = (Number(valor) * this.taxaCambio)
    console.log(`Valor convertido: ${valorConvertido} ${moedaDestino} `)
  }
}

const conversorMoeda = new ConversorDeMoeda(5.0)

const valorConvertido = conversorMoeda.converter(100, "USD", "BRL")