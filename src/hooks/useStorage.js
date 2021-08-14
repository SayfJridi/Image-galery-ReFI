import {useState , useEffect} from 'react' ; 
import { projectStorage , projectStore , timestamp} from '../firebase/config';

const useStorage = (file) => {
const [url, seturl] = useState(null)
const [progress, setprogress] = useState(0)
const [error, seterror] = useState(null)

useEffect(() => {
    const storageRef = projectStorage.ref(file.name) ; 

    const images  = projectStore.collection('images')
  

    storageRef.put(file).on('state_changed', (snap) => {
        let percentage = ((snap.bytesTransferred / snap.totalBytes) * 100 )  ; 
        setprogress(percentage) ; 
    } , (err) => {
        seterror(err) ; 
    } , async() => {
        const link = await storageRef.getDownloadURL()  ; 
        seturl(link)
        images.add({url : link , name : file.name  , createdAt : timestamp() }) ; 
    })
    
  
}, [file])
return { url  , progress , error}   ; 
}

export default useStorage
