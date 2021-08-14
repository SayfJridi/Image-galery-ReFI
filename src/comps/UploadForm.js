import React,{useState} from 'react'
import PrgressBar from './PrgressBar';



const UploadForm = () => {
const [file, setfile] = useState(null)  ;
const [error, seterror] = useState(null) ; 

const changer = async (e) => {

    const selected = e.target.files[0]  ; 

    const type = ['image/jpg' , 'image/jpeg' , 'image/png']

    

    if (selected && type.includes(selected.type) ) {
        setfile(selected) ; 
        seterror(null) ; 
    }
    else {
        seterror('Please Choose A Valid Type')
        setfile(null) ; 
    }
    
   
 }
    



    return (
        <form>
          <input onChange={changer} type='file'/> 
          {file && <div>{file.name}</div>}
          {error && <div>{error}</div>}
          {file &&  <PrgressBar file={file} setfile={setfile}/>}
         
        </form>
    )
}
export default UploadForm