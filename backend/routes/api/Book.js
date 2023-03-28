// routes/api/books.js

const express = require('express');
const router = express.Router();
const {createNewBook, getAllBooks, getSingleBook, deleteSingleBook, updateSingleBook} = require('../../controllers/booksControllers')
//get all books
router.get('/', getAllBooks);

//get a single book
router.get('/:id', getSingleBook);

//create a new book 
router.post('/', createNewBook);

//delete a book
router.delete('/:id', deleteSingleBook);

//update a book
router.patch('/:id', updateSingleBook);


module.exports = router;