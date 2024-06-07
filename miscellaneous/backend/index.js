const express = require('express');
const app = express();
const port = 5000;

app.get('/register', (req, res) => {
    let {username, password} = req.query;
  res.send(`standad Get Response ${username}`)
  console.log(`password ${password}`)
})
app.post('/register', (req, res) => {
    res.send(`standad Post Response `)
  })

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})