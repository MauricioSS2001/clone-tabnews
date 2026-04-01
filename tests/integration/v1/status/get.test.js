// Criando teste para verificar resposta da API.
// "GET para /api/v1/status deve retornar 200".
test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response.status); // Retorna undefined
  console.log(response); // Retorna Promise
  // Promise ---> Promessa de valor futuro

  expect(response.status).toBe(200);
});
