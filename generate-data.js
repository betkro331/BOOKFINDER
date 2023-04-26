// Import fakers
import { faker } from '@faker-js/faker';

// Mongoose DB connector & ODM for MongoDB
import mongoose from 'mongoose'
const connection = "mongodb+srv://bettinakronbk:uuTQkIjIhqHBF3Ms@bookfinder.dxfmw9w.mongodb.net/test"


async function run() {
  // connect to db
  mongoose.connect(connection, {dbName: 'bookfinder'})

  // run generator function
  await generateBooks()

  // shut down
  process.exit()
}
run()

// Import model from other file
import { bookModel } from './routes/books.js'
// Create empty array
let books = []

//
async function generateBooks(True) {
  // If not True return book model...
  if(!True){
    return books = await bookModel.find()
  }
  // ...and delete it/them
  await bookModel.deleteMany()

  // Generate new books by looping
  for(let i=0; i<20;i++){
    const book = new bookModel()
    book.title = faker.lorem.sentence(),
    book.author = faker.name.fullName(),
    book.pages = faker.datatype.number({ min: 50, max: 1000 }),
    book.genre = faker.helpers.arrayElement(['Fantasy', 'Thriller','Adventure', 'Drama']),
    book.publishedDate = faker.date.past()
    book.summary = faker.lorem.paragraphs(),
    book.rating = faker.datatype.number({ min: 1, max: 5 })
    console.log(book.title)

    try{
      const result = await book.save()
      books.push(result)
    }catch(err){
      console.error(err)
    }
  }
}

