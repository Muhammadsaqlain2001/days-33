const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
  let { username, password } = req.query;
  res.send(`standad Get Response ${username}`)

})
app.post('/register', (req, res) => {
  let { username, password } = req.body
  res.send(`standad Post Response ${username} `)
})

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})