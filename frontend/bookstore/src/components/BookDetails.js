import React from 'react'
import { useBookContext } from '../hooks/useBookContext'
import { useAuthContext } from '../hooks/useAuthContext'


export default function BookDetails({book}) {
  const {dispatch} = useBookContext()
  const {user} = useAuthContext();

  const handleClick = async () =>{
      if(!user){
        return
      }
      const response = await fetch('/api/books/' + book._id,{
        method: 'DELETE',
        headers:{
          'Authorization':`Berer ${user.token}`
        }
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
