const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const multer = require("multer"); // v1.0.5
const upload = multer(); // for parsing multipart/form-data

//Routes

const usersRoutes= require("./Routes/usersRoutes");
const companiesRoutes=require("./Routes/companiesRoutes")


//users
app.use(bodyParser.json());
app.use("/users" , usersRoutes);
app.use("/companies",companiesRoutes);


//test
app.get("/", (req, res) => {
  res.send(`Welcome to CRM api!`);
});

app.listen(port, () => {
  console.log(`Example app listining on port ${port}`);
});














/* 
app.get("/users", (req, res) => {
  res.send(`All users`);
}); 
app.get("/users/:id", (req, res) => {
  const { id: userId } = req.params;
  res.send(`Hello user #${userId}`);
});
*/
/*  // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post("/", (req, res) => {
  const { id, name, age } = req.body;
  res.send(`Hello, ${name}!`);
});
/* app.post('/', (req, res) => {
    const{str}=req.query;
    res.send(`Hello, ${str}!`);
  })
 */
/* 
  */