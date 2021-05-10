const express = require('express')
const app = express()
const port = 3000

app.get('/jokes', function (req, res) {
  res.sendFile('jokes.html', { root: '.' })
});

app.get('/pokemons', function (req, res) {
  res.sendFile('pokemon.html', { root: '.' })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})