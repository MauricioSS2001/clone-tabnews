function somar(numero1, numero2) {
  // Solução de exemplo para testes
  //if (typeof numero1 !== "number") return "erro";
  return numero1 + numero2;
}

// A exportação permite que outros módulos do sistema utilizem esta função.
// Nome da Eportação = Função a ser exportada

exports.somar = somar;
