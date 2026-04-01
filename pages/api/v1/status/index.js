/*
function status(request, response) {
  response.status(200).send("Sucesso na requisição");
}
*/

function status(request, response) {
  response.status(200).json({ chave: "Testando Acentuação" });
}

export default status;
