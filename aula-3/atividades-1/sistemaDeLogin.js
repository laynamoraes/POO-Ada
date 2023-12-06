// Desenvolva um sistema de login simples em JavaScript utilizando POO. O sistema deve permitir que usuários se cadastrem, realizem login e exibam uma mensagem personalizada após o login.

// Classe: SistemaDeLogin
// Atributo: usuarios (array de objetos com informações de usuário).
// Métodos: cadastrarUsuario(nome, senha), realizarLogin(nome, senha), exibirMensagemPersonalizada(nome).

class SistemaDeLogin {
  constructor() {
    this.usuarios = []
  }

  cadastrarUsuario(nome, senha) {
    try {
      const usuarioJaCadastrado = this.usuarios.find(
        (usuario) => usuario.nome === nome
      )

      if (usuarioJaCadastrado) {
        throw new Error("Usuário já cadastrado!")
      } else {
        this.usuarios.push({ nome, senha })
        console.log("Cadastro realizado com sucesso!")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  realizarLogin(nome, senha) {
    try {
      const buscarUsuario = this.usuarios.find(
        (usuario) => usuario.nome === nome
      )

      if (buscarUsuario && buscarUsuario.senha === senha) {
        return this.exibirMensagemPersonalizada(buscarUsuario.nome)
      } else {
        throw new Error("Nome ou senha inválidos. Tente novamente!")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  exibirMensagemPersonalizada(nome) {
    console.log(`Bem-vindo(a), ${nome}`)
  }
}

const sistemaDeLogin = new SistemaDeLogin()

const novoUsuario = sistemaDeLogin.cadastrarUsuario("Layna", "123456")

const realizarLogin = sistemaDeLogin.realizarLogin("Layna", "123456")
