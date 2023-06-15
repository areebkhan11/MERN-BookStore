import React, {useState} from 'react'
import { useBookContext } from '../hooks/useBookContext'
import { useAuthContext } from '../hooks/useAuthContext'

export default function BooksForm() {
    const [form, setForm] = useState({title:'', author:'', description:'', publisher:''})
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)
    const {user} = useAuthContext()
    const {dispatch} = useBookContext() 

    const handleChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!user){
            setError("You must be logged in")
            return
        }


        const book = {
            title : form.title,
            author : form.author,
            description : form.description,
            publisher : form.publisher,
        }
        const response = await fetch('api/books',{
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Berer ${user.token}`
                
              }

        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            dispatch({type: "CREATE_BOOKS", payload: json})
            setForm({title:'', author:'', description:'', publisher:''})

        }
    }


  return (
    <form className='create' onSubmit={handleSubmit}>
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
        <button>Add a new book</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}
