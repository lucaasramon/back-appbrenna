const express = require("express");
const routes = require("./routes");
// cors é a integração do back com o front.
const cors = require("cors");

const app = express();
require("./config/dbConfig");

app.use(cors());
app.use(express.json());
app.use(routes);

// Para executar o servidor precisa do comando "npm run dev".
app.listen(8080);
