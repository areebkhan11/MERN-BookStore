import React, { useEffect, useState } from 'react'
import BookDetails from '../components/BookDetails'
import BooksForm from '../components/BooksForm'
export default function Home() {
    const [books, setBooks] = useState(null)
    useEffect(()=>{
        const fetchBooks = async () => {
            const response = await fetch('/api/books')
            const json = await response.json()
            if(response.ok){
              setBooks(json)
            }
        }
        fetchBooks()
    },[])
  return (
    <div className='home'>
      <div className='books'>
      {books && books.map((book)=>(   
        <BookDetails key={book._id} book={book}/>
      ))
      }
      </div>
      <BooksForm />
    </div>
  )
}
