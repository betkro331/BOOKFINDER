// faker random data api
import { faker } from '@faker-js/faker';
import fs from 'fs'

const books = []

async function run(){
    await generateBooks()
    process.exit()
}
run()

// Function to generate new books 
async function generateBooks(clear = true) {
  if(!clear){
    books = JSON.parse(fs.readFileSync('./json/books.json'))
  }
  for (let i = 0; i < 10; i++) {
    const book = {}
    book.title = faker.lorem.words();
    book.author = faker.name.fullName(),
    book.pages = faker.datatype.number({ min: 50, max: 1000 }),
    book.genre = faker.helpers.arrayElement(['Fantasy', 'Thriller','Adventure', 'Drama']),
    book.publishedDate = faker.date.past()
    book.summary = faker.lorem.paragraph(),
    book.rating = faker.datatype.number({ min: 1, max: 5 })
    
    books.push(book);
    }
    console.log(books);
    fs.writeFileSync('./json/books.json', JSON.stringify(books))
}
