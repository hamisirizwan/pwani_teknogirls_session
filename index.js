const axios = require("axios");
// URL || ENDPOINT
const url = "https://jsonplaceholder.typicode.com/todos/1";
const express = require("express");
const app = express();
const port = 1234;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", async (req, res) => {
  const response = await axios.get(url);
  // console.log()
  res.send(`<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <h1>${response.data.title}</h1>
   </body>
   </html>`);
});

// const joke = "hahahaha";
app.get("/joke", (req, res) => {
  res.send(joke);
});

const database = ["hahaqhha"];

app.post("/joke", (req, res) => {
  // joke
  console.log(database)
  const joke = req.body.joke
  if (!joke) {
    return res.status(400).json({
      message: "Provide a joke",
    });
  }
  database.push(joke)

  console.log(database)

  res.status(200).json({
    message: "all is fine",
    data:database
  });
});

app.listen(port, () => {
  console.log("all is well");
});
