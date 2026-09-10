/*
function status(request, response) {
  response.status(200).send("Sucesso na requisição");
}
*/
import database from "infra/database.js";
import { version } from "react-dom";

async function status(request, response) {
  //console.log(database);
  //const result = await database.query("SELECT 1+1 as sum;");
  //console.log(result.rows);
  //response.status(200).json({ chave: "Testando Acentuação" });
  const updateAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue =  databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query("SHOW max_connections;");
  const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  //console.log(`Banco de dados selecionado: ${databaseName}`)
  //const databaseOpenedConnectionsResult = await database.query("SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname= '" + databaseName + "';");
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname= $1;",
    values: [databaseName]
  });
  //console.log(databaseOpenedConnectionsResult.rows.length);
  const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;

  //console.log(databaseOpenedConnectionsValue);

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    }
  });

}

export default status;
