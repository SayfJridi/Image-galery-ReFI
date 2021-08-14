
import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import useStorage from '../hooks/useStorage'

const PrgressBar = ({file , setfile}) => {
    const {url , progress  , error } = useStorage(file)

   useEffect(() => {
       
       if (url) {
           setfile(null)
       }
   }, [url , setfile])
       
    return (
        <>
        <ProgressBar animated now={progress} />
        {error && <p style={{color : 'red'}}>Error Has Occured</p>}
        </>
    )
}

export default PrgressBar ; 
