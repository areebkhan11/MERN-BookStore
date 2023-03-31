import React from 'react'

export default function BookDetails({book}) {
  return (
    <div className='book-details'>
      <h4>{book.title}</h4>
      <p><strong>author: {book.author}  </strong></p>
      <p>details: {book.description}</p>
      <p>publisher: {book.publisher}</p>
      <p>{book.createdAt}</p>
    </div>
  )
}
