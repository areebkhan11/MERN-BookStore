import { useAuthContext } from "./useAuthContext"
import {useBookContext} from './useBookContext'

export const useLogout = () =>{
    const {dispatch} = useAuthContext();
    const {dispatch: bookDispatch} = useBookContext()

    const logout = () =>{
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT' })
        bookDispatch({type:'SET_BOOKS', payload:null})
        
    }
    return {logout}
}