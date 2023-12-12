// Tema do Exercício: Sistema de Entrega (Delivery) usando Programação Orientada a Objetos em JavaScript

class Cliente {
  constructor(nome, endereco) {
    this.nome = nome
    this.endereco = endereco
    this.pedidos = []
  }

  fazerPedido(restaurante, itens) {
    this.pedidos.push({ restaurante, itens })
    console.log(
      `Olá ${this.nome}, seu pedido foi realizado com sucesso ✅ \nEstamos aguardando a confirmação do restaurante para prosseguir com seu pedido! \n`
    )
  }

  consultarPedidos() {
    return this.pedidos
  }
}

class Restaurante {
  constructor(nome, menu) {
    this.nome = nome
    this.menu = menu
    this.pedidos = []
  }

  exibirMenu() {
    console.log(`Este é o menu do restaurante ${this.nome}:`)
    console.log(this.menu)
  }

  receberPedido(cliente, itens) {
    this.pedidos.push({ cliente, itens })
    console.log(
      `Olá ${cliente.nome}, o pedido feito no restaurante ${this.nome} foi recebido ✅ \n`
    )
  }
}

class Pedido {
  constructor(cliente, restaurante, itens, status, total) {
    this.cliente = cliente
    this.restaurante = restaurante
    this.itens = itens
    this.status = status
    this.total = total
  }

  calcularTotal() {
    
  }

  atualizarStatus(status) {
    return this.status = status
  }
}

const cliente1 = new Cliente("Matheus", "Rua dos Imperadores 30")

const restaurante1 = new Restaurante("Fogo e Brasa", {
  Pizza: 15,
  Hamburguer: 10,
  Salada: 8,
})

cliente1.fazerPedido(restaurante1, { Pizza: 2, Hamburguer: 1 })

restaurante1.receberPedido(cliente1, { Pizza: 2, Hamburguer: 1 })

const pedidoCliente1 = cliente1.consultarPedidos()[0].itens

console.log(pedidoCliente1)

// restaurante1.exibirMenu()

// cliente1.consultarPedidos()
