const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname, 'views');

app.use(express.static('public'))


app.get('/', (req,res) => res.sendFile(path.join(views, 'home.html')));
app.get('/badtz-maru', (req,res) => res.sendFile(path.join(views, 'badtz-maru.html')));
app.get('/chococat', (req,res) => res.sendFile(path.join(views, 'chococat.html')));
app.get('/keroppi', (req,res) => res.sendFile(path.join(views, 'keroppi.html')));
app.get('/my_melody', (req,res) => res.sendFile(path.join(views, 'my_melody.html')));
app.get('/kuromi', (req,res) => res.sendFile(path.join(views, 'kuromi.html')));



app.listen(port, () => { console.log('Servidor corriendo en el puerto ' + port); })