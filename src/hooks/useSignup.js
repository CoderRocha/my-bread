import { useState } from "react"
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (displayName, email, password) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if (!res) {
                throw new Error('Could not signup correctly')
            }

            // add display name to the user in db
            await res.user.updateProfile({ displayName })

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            setIsPending(false)
            setError(null)
        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return { error, isPending, signup }
}