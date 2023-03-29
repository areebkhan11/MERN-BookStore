import React, {useState} from 'react'

export default function BooksForm() {
    const [form, setForm] = useState({title:'', author:'', description:'', publisher:''})
    const [load, setLoad] = useState('')

    const handleChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }
    console.log(form, "<----form")
  return (
    <form className='create'>
        <h3>Add a new book</h3>

        <label>Book Title: </label>
        <input 
            type="text" 
            onChange={handleChange}
            value={form.title}
            name="title"
        />
         <label>Author </label>
        <input 
            type="text" 
            onChange={handleChange}
            value={form.author}
            name="author"
        />
         <label>Description </label>
         <input 
            type="text" 
            onChange={handleChange}
            value={form.description}
            name="description"
        />
         <label>Publisher </label>

        <input 
            type="text" 
            onChange={handleChange}
            value={form.publisher}
            name="publisher"
        />
    </form>
  )
}
