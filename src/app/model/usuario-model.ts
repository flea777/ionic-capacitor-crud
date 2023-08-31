export class Usuario {
  nome: string;
  cpf: string;
  dataNascimento: string;
  bairro: string;

  constructor(
    nome: string,
    cpf: string,
    dataNascimento: string,
    bairro: string
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.bairro = bairro;
  }
}
