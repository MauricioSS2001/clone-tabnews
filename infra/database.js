import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === 'development' ? false : true,
  }); // Instânciando um Client
  
console.log("Credenciais do Postgres:",{
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  })

  try{
    await client.connect(); // Aguardando estabelecer conexão com o Banco de Dados
    const result = await client.query(queryObject); // Armazenando o resultado da query (consulta) em uma variável
    return result; // Retornando o resultad da query (Consulta).
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
      client.end(); // Encerrar conexão com o Banco de Dados
  }
  
}

export default {
  query: query,
};
