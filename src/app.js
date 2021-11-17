const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const organizadoresRoute = require('./routes/organizadores.routes');
const ligaRoute = require('./routes/liga.routes');
const organizamRoute = require('./routes/organizam.routes');
const timesRoute = require('./routes/times.routes');
const funcionariosRoute = require('./routes/funcionarios.routes');
const comissaoTecnicaRoute = require('./routes/comissaoTecnica.routes');
const jogadoresRoute = require('./routes/jogadores.routes');
const goleirosRoute = require('./routes/goleiros.routes');
const jogadoresLinhaRoute = require('./routes/jogadoresLinha.routes');
const partidasRoute = require('./routes/partidas.routes');
const arbitroRoute = require('./routes/arbitro.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', organizadoresRoute);
app.use('/api/', ligaRoute);
app.use('/api/', organizamRoute);
app.use('/api/', timesRoute);
app.use('/api/', funcionariosRoute);
app.use('/api/', comissaoTecnicaRoute);
app.use('/api/', jogadoresRoute);
app.use('/api/', goleirosRoute);
app.use('/api/', jogadoresLinhaRoute);
app.use('/api/', partidasRoute);
app.use('/api/', arbitroRoute);

module.exports = app;

