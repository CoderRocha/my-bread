import { useEffect, useRef, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    // if 'ref' is not used, it will cause an infinite loop in 'useRef'
    // the '_query' is an array and its "different" on every function call
    const query = useRef(_query).current

    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        if (query) {
            ref = ref.where(...query)
        }

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })

            // update state
            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('Could not fetch the data')
        })

        // unsubscribe on unmount
        return () => unsubscribe()

    }, [collection, query])

    return { documents, error }
}