const express = require("express");
const app = express();

app.use(express.json());
const PORT = 8080;

const books = [
  { id: 1, title: "Node.js Guide", author: "John Doe" },
  { id: 2, title: "React.js Guide", author: "Jane Doe" },
  { id: 3, title: "Angular.js Guide", author: "Bob Smith" },
];

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

// lists all books

app.get("/books", (req, res) => {
  res.json(books);
});

// list find by id

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book)
    return res.status(404).send("Book not fond with id: " + req.params.id);
  res.json(book);
});

// Creating new book

app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// Updating existing book

app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book)
    return res.status(404).send("Books not found with id: " + req.params.id);
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
});

// Deleting book by id

app.delete("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));

  if (index === -1)
    return res.status(404).send("Book not found with id: " + req.params.id);
  const deletedBook = books.splice(index, 1);
  res.json(deletedBook);
});

app.listen(PORT, () => {
  console.log("Server is running in PORT: ", PORT);
});
