import React, { useEffect } from 'react'
import BookDetails from '../components/BookDetails'
import BooksForm from '../components/BooksForm'
import { useBookContext } from '../hooks/useBookContext'
export default function Home() {
    const {books, dispatch} = useBookContext();
    useEffect(()=>{
        const fetchBooks = async () => {
            const response = await fetch('api/books')
            const json = await response.json()
            if(response.ok){
              dispatch({type: "SET_BOOKS", payload: json})
            }
        }
        fetchBooks()
    },[])
    console.log(books, "<----books")
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
