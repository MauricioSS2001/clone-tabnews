/*  Testes Automatizados 
  Para criar um teste, é necssário utilizar a função test(). Também é necessário 
a utilização de dois parâmetros, onde o primeiro é uma string que definirá o nome do teste
e o segundo que será uma função Callback, Anônima ou Arrow.
*/

/* ====================================================== Exemplos Testes Automatizados

// Aplicando em um função normal (com Callback)
test("Nome Do Teste", funcaoCallback);

function funcaoCallback() {
  console.log("Esta função está sendo chamada?");
}

// Aplicando teste em uma função anônima
test("Testando Funcao Anonima", function () {
  console.log("A função anônima está funcionando?");
});

// Aplicando teste em uma Arrow Function
test("Testando Arrow Function", () => {
  console.log("A Arrow Function está funcionando?");
});

// Aplicando teste com expectativa de receber um resultado
test("Espero que 1 seja 1", () => {
  expect(1).toBe(1); // Expect (Expectativa) --- toBe ("seja")
});

// Teste que produz falha --- NOTA: Este Teste ficará desabilitado para não ficar acusando erro
/*
test("Espero que 2 seja 1", () => {
  expect(2).toBe(1); // 2 veio do sistema, mas espero que seja 1 ----> Resultado: Falha no teste.
});

*/

const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  //console.log("Valor de Resultado", resultado); ==> Linha apenas para exemplo.
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

/*
// Teste abaixo força erro

test("somar 'banana' + 100 deveria retornar 'erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("erro");
});
*/
