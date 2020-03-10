const express = require("express")
const app = express()
const { insert, getAll, getBookById, updateBook, deleteBook } = require("../DAO/bookManager")
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("API OK")
})

app.post("/books", (req, res) => {
  const { title, author } = req.body
  insert([title, author])
    .then(result => res.status(201).json(result))
    .catch(error => res.status(400).json(error))
})

app.get("/books", (req, res) => {
  getAll()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(204).json(error))
})

app.get("/books/:id", (req, res) => {
  const { id } = req.params
  getBookById(id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(204).json(error))
})

app.put("/books/:id", (req, res) => {
  const { id } = req.params
  updateBook(id, req.body)
    .then(data => res.status(202).json(data))
    .catch(error => res.status(400).json(error))
})

app.delete("/books/:id", (req, res) => {
  const { id } = req.params
  deleteBook(id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error))
})

app.listen(3000, () => console.log("running..."))