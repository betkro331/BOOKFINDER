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
  book.author = req.body.author,
  book.pages = req.body.pages,
  book.publishedDate = req.body.publishedDate,
  book.summary = req.body.summary,
  book.rating = req.body.rating

  try {
    const newbook = await book.save()
    // Response code 201 indicates successful creation of a resource.
    res.status(201).json(newbook)
  } catch (err) {
    // Response code 400 indicates invalid information sent by the client.
    res.status(400).json({ message: err.message})
  }
})

// GET all books or by filter/search
booksRouter.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.title) {
      filter.title = req.query.title;
    }
    if (req.query.author) {
      filter.author = req.query.author;
    }
    if (req.query.genre) {
      filter.genre = req.query.genre;
    }
    // Add more if statements for other filters as needed
    
    const limit = parseInt(req.query.limit) || 0;
    const books = await mongoose.models.books.find(filter).limit(limit);
    res.json(books);

  } catch (err) {
    if (err.req !== req.query.title || req.query.author || req.query.genre) {
      // Response code 400 indicates a "Bad Request" error.
      res.status(400).json({ message: 'Invalid request' });
    } else {
      // Response code 500 indicates a server error.
      res.status(500).json({ message: err.message });
    }
  }
});


// GET one book by ID
booksRouter.get('/:id', async (req, res) => {
  try {
    const books = await mongoose.models.books.findById(req.params.id)
    // const books = await bookModel.findById(request.params.id)
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// UPDATE a book by ID
booksRouter.put('/:id', async (req, res) => {
  try {
    const updateBook = await mongoose.models.books.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updateBook) {
      res.status(404).json({ message: "Book not found" })
    } else {
      if (req.body.author != null) {
        updateBook.author = req.body.author;
      }
      if (req.body.genre != null) {
        updateBook.genre = req.body.genre;
      }
      await updateBook.save();
      res.status(200).json(updateBook);
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
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