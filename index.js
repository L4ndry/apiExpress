const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    const {num1,num2}=req.query;
    res.send(`La somma = ${Number(num1)+Number(num2)}`)
});

app.post('/', (req, res) => {
  })

app.listen(port,()=>{
    console.log(`Example app listining on port ${port}`);
});

