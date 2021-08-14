import { useState, useEffect } from 'react'
import { projectStore } from '../firebase/config'

const useDB = (collection) => {

    const [docs, setdocs] = useState([])
    useEffect(() => {
        const data = projectStore.collection(collection).orderBy('createdAt','desc').onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data() , id : doc.id})
            });
            setdocs(documents);
        })
        return () => data();
    }, [collection])
    return { docs };
}



export default useDB
