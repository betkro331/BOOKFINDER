// Create a subrouter for titles
import Router from "express"
const booksRouter = Router()

// Import Mongoose to create schema and ask questions to collection
import mongoose, { Schema } from "mongoose"

// Create SCHEMA
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: Number,
  genre: String,
  publishedDate: {type: Date, required: true},
  summary: String,
  rating: {type: Number, min: 0, max: 5, default: 0}
})

// Create collection MODEL
// mongoose.model('books', bookSchema)
export const bookModel = mongoose.model('books', bookSchema)


// --- ROUTES ---

// CREATE a new book
booksRouter.post('/', async (req, res) => {
  // const book = new bookModel(req.body);
  const book = new mongoose.models.books()
  book.title = req.body.title
  book.author = req.body.author
  book.pages = req.body.pages
  try {
    const newbook = await book.save()
    // Response code 201 indicates successful creation of a resource.
    res.status(201).json(newbook)
  } catch (err) {
    // Response code 400 indicates that the server was unable to process the request due to invalid information sent by the client.
    res.status(400).json({ message: err.message})
  }
})

// GET all books
booksRouter.get('/', async (req, res) => {
  try {
    const books = await mongoose.models.books.find()
    // const books = await bookModel.find()
    res.json(books)
  } catch (err) {
    // Response code 500 indicates 'server error'.
    res.status(500).json({ message: err.message })
  }
})

// GET one book by ID
booksRouter.get('/:id', async (req, res) => {
  try {
    const books = await mongoose.models.books.findById(request.params.id)
    // const books = await bookModel.findById(request.params.id)
    res.json(books)
  } catch (err) {
    // Response code 500 indicates server error, preventing it from fulfilling the request.
    res.status(500).json({ message: err.message })
  }
})

// UPDATE a book by ID
booksRouter.put('/:id', async (req, res) => {
  try {
    const updateBook = await mongoose.models.books.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updateBook) {
      // Response code 404 indicates 'Book not found'.
      res.status(404).json({ message: err.message })
    } else {
      res.status(200).json(updateBook)
    }
  } catch (err) {
    // Response code 500 indicates 'Server error'.
    res.status(500).json({ message: err.message })
  }
});

// DELETE a book by ID
booksRouter.delete('/:id', async (req, res) => {
  try {
    const deleteBook = await mongoose.models.books.findByIdAndDelete(req.params.id) 
    if (!deleteBook) {
      res.status(404).json({ message: "Error 404: Book not found." })
    } else {
      res.json(deleteBook)
    }
  } catch (err) {
    res.status(500).json[{ message: "Error 500: Server error"}]
  }
})


export default booksRouter