import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
  }); // Instânciando um Client
  await client.connect(); // Aguardando estabelecer conexão com o Banco de Dados
  const result = await client.query(queryObject); // Armazenando o resultado da query (consulta) em uma variável
  client.end(); // Encerrar conexão com o Banco de Dados
  return result; // Retornando o resultad da query (Consulta).
}

export default {
  query: query,
};
