const express = require('express');
const app = express()
const port = 3000

app.use(express.json());

app.use((req, res, next) => {
    //logs every request
    console.log(`${req.metthod} - ${new Date()}`);
    next(); //pass to next handler (required!)
});


app.get('/user', (req, res) => {
  res.send('jeremiahmercy!')
});


app.post('/echo', (req, res) => {
  console.log(req.body);
    res.json({ echoed: req.body });
});

app.get('/user/:id', (req, res) => {
  const id= req.params.id
  console.log(id);
  res.send(id);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})