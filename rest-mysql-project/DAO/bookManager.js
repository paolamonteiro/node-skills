const { connection, getConnection, closeConnection } = require("../DAO/dbConnection")

const insert = (...book) => {
  return new Promise((resolve, reject) => {
    getConnection()
    connection.query("INSERT INTO books(title, author) VALUES ?", [book], (error, result) => {
      if (error) return reject(`Error inserting book: ${error}`)
      return resolve("Book added!")
    })
    closeConnection()
  })
}

const getAll = () => {
  return new Promise((resolve, reject) => {
    getConnection()
    connection.query("SELECT * FROM books", (error, result) => {
      if (error) return reject(`Error accessing books: ${error}`)
      return resolve(result)
    })
    closeConnection()
  })
}

const getBookById = id => {
  return new Promise((resolve, reject) => {
    getConnection()
    connection.query("SELECT * FROM books WHERE id = ?", [id], (error, result) => {
      if (error) return reject(`Error accessing book: ${error}`)
      return resolve(result)
    })
    closeConnection()
  })
}

const updateBook = (id, ...book) => {
  return new Promise((resolve, reject) => {
    getConnection()
    connection.query("UPDATE books SET ? WHERE id = ?", [...book, id], (error, result) => {
      if (error) return reject(`Error inserting book: ${error}`)
      return resolve("Book up-to-date!")
    })
    closeConnection()
  })
}

const deleteBook = id => {
  return new Promise((resolve, reject) => {
    getConnection()
    connection.query("DELETE FROM books WHERE id = ?", [id], (error, result) => {
      if (error) return reject(`Error deleting book: ${error}`)
      return resolve("Book deleted!")
    })
    closeConnection()
  })
}

exports.insert = insert
exports.getAll = getAll
exports.getBookById = getBookById
exports.updateBook = updateBook
exports.deleteBook = deleteBook