import React, { useEffect } from 'react'
import BookDetails from '../components/BookDetails'
import BooksForm from '../components/BooksForm'
import { useBookContext } from '../hooks/useBookContext'
import { useAuthContext } from '../hooks/useAuthContext'



export default function Home() {
    const {books, dispatch} = useBookContext();
    const {user} = useAuthContext();
 

    useEffect(()=>{

        const fetchBooks = async () => {
            const response = await fetch('api/books',{
              headers:{
                'Authorization':`Berer ${user.token}`
              }
            })
            const json = await response.json()
            if(response.ok){
              dispatch({type: "SET_BOOKS", payload: json})
            }
        }
        if(user){

          fetchBooks()
        }
    },[dispatch, user])
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
