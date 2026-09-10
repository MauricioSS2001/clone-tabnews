// Criando teste para verificar resposta da API.
// "GET para /api/v1/status deve retornar 200".
test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response.status); // Retorna undefined
  console.log(response); // Retorna Promise
  // Promise ---> Promessa de valor futuro

  expect(response.status).toBe(200);

  const responseBody = await response.json();
  //console.log(responseBody);
  //console.log(responseBody);
  //expect(responseBody.update_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdateAt);

  expect(responseBody.dependencies.database.version).toEqual("16.14");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

/*
test.only("Teste de SQL Injection", async () => {
  await fetch("http://localhost:3000/api/v1/status?databaseName=local_db");
  await fetch("http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --");
});
*/

