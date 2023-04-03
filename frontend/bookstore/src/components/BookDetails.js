import React from 'react'
import { useBookContext } from '../hooks/useBookContext'


export default function BookDetails({book}) {
  const {dispatch} = useBookContext()
  const handleClick = async () =>{
      const response = await fetch('/api/books/' + book._id,{
        method: 'DELETE',
      })
      const json = await response.json()
      if(response.ok){
        dispatch({type: "DELETE_BOOK", payload:json})
      }
  }



  return (
    <div className='book-details'>
      <h4>{book.title}</h4>
      <p><strong>author: {book.author}  </strong></p>
      <p>details: {book.description}</p>
      <p>publisher: {book.publisher}</p>
      <p>{book.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}
