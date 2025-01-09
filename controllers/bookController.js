const books = [
  { id: 1, title: "Node js Guide", author: "John Doe" },
  { id: 2, title: "React js Guide", author: "Jane Doe" },
  { id: 3, title: "Angular js Guide", author: "John Doe" },
];

const getAllBooks = (req, res) => res.json(books);
const getBookById = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book)
    return res.status(404).send("Book not found with id: " + req.params.id);
  res.json(book);
};

const createBook = (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  books.push(newBook);
  res.json(newBook);
};

const updateBook = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book)
    return res.status(404).send("Book not found with id: " + req.params.id);
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
};

//

const deleteBook = (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).send("Books not found with id: " + req.params.id);
  const deletedBook = books.splice(index, 1);
  res.json(deletedBook);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
