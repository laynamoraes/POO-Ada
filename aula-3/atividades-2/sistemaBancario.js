// Desenvolva um sistema bancário simples que contenha as classes Conta e Cliente. A classe Conta deve ter métodos para depósito, saque e consulta de saldo. A classe Cliente deve ter atributos como nome, idade, e um array de contas.

// Requisitos:

// - Utilize encapsulamento para proteger o saldo da conta.
// - Implemente herança para criar diferentes tipos de contas, como ContaCorrente e ContaPoupanca.
// - Garanta que o saque não seja permitido caso ultrapasse o limite da conta corrente.

class Conta {
  #saldo

  constructor(cliente) {
    this.cliente = cliente
    this.#saldo = 0
  }

  deposito(valor) {
    try {
      if (valor <= 0 || !Number(valor)) {
        throw new Error("O valor depositado precisa ser maior que 0.")
      } else {
        this.#saldo += Number(valor)
        return `O valor de R$ ${valor} foi depositado em sua conta.`
      }
    } catch (error) {
      return error.message
    }
  }

  saque(valor) {
    try {
      if (valor > this.#saldo) {
        throw new Error("Saldo insuficiente para realizar o saque.")
      } else {
        this.#saldo -= Number(valor)
        return `O valor de R$ ${valor} foi retirado de sua conta.`
      }
    } catch (error) {
      return error.message
    }
  }

  consultaDeSaldo() {
    return `Seu saldo é R$ ${this.#saldo}`
  }
}

class ContaPoupanca extends Conta {
}

class ContaCorrente extends Conta {}

class Cliente {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.contas = []
  }

  adicionarConta(conta) {
    this.contas.push(conta)
  }
}

const novaCliente = new Cliente("Layna", 26)
const contaPoupancaNova = new ContaPoupanca(novaCliente)
const contaCorrenteNova = new ContaCorrente(novaCliente)
const adicionarConta1 = novaCliente.adicionarConta(contaPoupancaNova)
const adicionarConta2 = novaCliente.adicionarConta(contaCorrenteNova)

// valores da Conta Poupança
console.log(contaPoupancaNova.deposito(50))
console.log(contaPoupancaNova.saque(20))
console.log(`${contaPoupancaNova.consultaDeSaldo()} \n`)

// valores da Conta Corrente
console.log(contaCorrenteNova.deposito(1000))
console.log(contaCorrenteNova.saque(100))
console.log(contaCorrenteNova.consultaDeSaldo())
