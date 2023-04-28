import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext();


    const login = async (email, password) =>{
       
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${process.env.REACT_APP_API}/api/user/login`,{
            method:'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type:'LOGIN', payload: json})
            setIsLoading(false)
        }
    }
    return {login, error, isLoading}
}