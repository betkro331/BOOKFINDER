// Import fakers
import { faker } from '@faker-js/faker';

// Mongoose DB connector & ODM for MongoDB
import mongoose from 'mongoose'
const connection = "mongodb+srv://bettinakronbk:uuTQkIjIhqHBF3Ms@bookfinder.dxfmw9w.mongodb.net/test"


async function run(){
  // connect to db
  mongoose.connect(connection, {dbName: 'bookfinders'})

  // run generator function
  await generateBooks(false)

  // shut down
  process.exit()
}
run()

// BOOKS
import { bookModel } from './routes/books.js'
let books = []

async function generateBooks(clear = true){
  if(!clear){
    return books = await bookModel.find()
  }

  // delete all
  await bookModel.deleteMany()

  // generate books
  for(let i=0; i<20;i++){
    const book = new bookModel()
    book.title = faker.lorem.sentence(),
    book.author = faker.name.fullName(),
    book.pages = faker.datatype.number({ min: 50, max: 1000 }),
    book.genre = faker.helpers.arrayElement(['Fantasy', 'Thriller','Adventure', 'Drama']),
    book.publishedDate = faker.date.past()
    book.summary = faker.lorem.paragraphs(),
    book.rating = faker.datatype.number({ min: 1, max: 5 })
    
    try{
      const result = await book.save()
      books.push(result)
    }catch(err){
      console.error(err)
    }
  }
}

// BOOK STORES/RESELLERS
