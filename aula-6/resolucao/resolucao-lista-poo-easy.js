// Exercício 1 - Sistema de Reservas de Hotel

class Hotel {
  constructor(nome) {
    this.nome = nome
    this.quartos = []
  }

  adicionarQuarto(quarto) {
    this.quartos.push(quarto)
  }

  exibirInformacoes() {
    console.log(`Hotel: ${this.nome}`)
    console.log("Quartos:")
    this.quartos.forEach((quarto) => {
      console.log(
        `Número: ${quarto.numero}, Tipo: ${quarto.tipo}, Disponível: ${quarto.disponivel}`
      )
    })
  }
}

class Quarto {
  constructor(numero, tipo) {
    this.numero = numero
    this.tipo = tipo
    this.disponivel = true
  }

  reservar() {
    if (this.disponivel) {
      this.disponivel = false
      console.log(`Quarto ${this.numero} reservado.`)
    } else {
      console.log(`Quarto ${this.numero} não está disponível.`)
    }
  }
}

class Hospede {
  constructor(nome, cpf) {
    this.nome = nome
    this.cpf = cpf
  }
}

class Reserva {
  constructor(hospede, quarto, dataInicio, dataFim) {
    this.hospede = hospede
    this.quarto = quarto
    this.dataInicio = dataInicio
    this.dataFim = dataFim
  }

  exibirDetalhes() {
    console.log(`Reserva para ${this.hospede.nome}`)
    console.log(`Quarto: ${this.quarto.numero}, Tipo: ${this.quarto.tipo}`)
    console.log(`Período: ${this.dataInicio} a ${this.dataFim}`)
  }
}

const meuHotel = new Hotel("Hotel Premier")

const quartoSimples = new Quarto(101, "Simples")
const quartoDuplo = new Quarto(201, "Duplo")
const quartoSuite = new Quarto(301, "Suíte")

meuHotel.adicionarQuarto(quartoSimples)
meuHotel.adicionarQuarto(quartoDuplo)
meuHotel.adicionarQuarto(quartoSuite)

meuHotel.exibirInformacoes()

const meuHospede = new Hospede("João", "123.456.789-00")

const reserva = new Reserva(
  meuHospede,
  quartoSimples,
  "2024-01-01",
  "2024-01-07"
)

reserva.exibirDetalhes()

quartoSimples.reservar()

meuHotel.exibirInformacoes()

// Exercício 2: Sistema de Gestão de Estoque

class Produto {
  constructor(nome, preco, quantidadeEmEstoque, estoqueMinimo) {
    this.nome = nome
    this.preco = preco
    this.quantidadeEmEstoque = quantidadeEmEstoque
    this.estoqueMinimo = estoqueMinimo
  }

  reporEstoque(quantidade) {
    this.quantidadeEmEstoque += Number(quantidade)
    console.log(
      `Estoque do produto ${this.nome} reposto. Novo estoque: ${this.quantidadeEmEstoque}`
    )
  }
}

class Fornecedor {
  constructor(nome, produto) {
    this.nome = nome
    this.produto = produto
  }

  processarPedido(produto, quantidade) {
    console.log(
      `Pedido processado para o produto ${produto.nome} do fornecedor ${this.nome}. Quantidade: ${quantidade}`
    )
    return quantidade
  }
}

class Pedido {
  constructor(produto, quantidade) {
    this.produto = produto
    this.quantidade = quantidade
  }

  processarPedido(fornecedor) {
    const quantidadeAtendida = fornecedor.processarPedido(
      this.produto,
      this.quantidade
    )
    return quantidadeAtendida
  }
}

class Estoque {
  constructor() {
    this.produtos = []
  }

  adicionarProduto(produto) {
    this.produtos.push(produto)
  }

  fazerPedidoReposicao() {
    console.log("Verificando produtos com estoque abaixo do mínimo...")
    this.produtos.forEach((produto) => {
      if (produto.quantidadeEmEstoque < produto.estoqueMinimo) {
        const fornecedor = new Fornecedor("Fornecedor XYZ")
        const pedido = new Pedido(
          produto,
          Number(produto.estoqueMinimo) - Number(produto.quantidadeEmEstoque)
        )
        const quantidadeAtendida = pedido.processarPedido(fornecedor)
        produto.reporEstoque(quantidadeAtendida)
      }
    })
  }

  exibirInformacoes() {
    console.log("Estoque:")
    this.produtos.forEach((produto) => {
      console.log(
        `Produto: ${produto.nome}, Quantidade em Estoque: ${produto.quantidadeEmEstoque}`
      )
    })
  }
}

const produtoA = new Produto("Produto A", 10, 5, 10)
const produtoB = new Produto("Produto B", 15, 8, 12)

const meuEstoque = new Estoque()

meuEstoque.adicionarProduto(produtoA)
meuEstoque.adicionarProduto(produtoB)

meuEstoque.exibirInformacoes()

meuEstoque.fazerPedidoReposicao()

meuEstoque.exibirInformacoes()
