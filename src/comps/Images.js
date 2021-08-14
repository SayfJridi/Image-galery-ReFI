import React from 'react'
import useDB from '../hooks/useDB'
import 'bootstrap/dist/css/bootstrap.min.css'

const Images = () => {
    const {docs} = useDB('images') ; 
  
    return (
        <div className="">
            {docs && docs.map(doc => (
                <>
            <img
              src={doc.url} style={{paddingTop : '10px' , height: '190px'}}
              className="col-lg-4 col-md-12 mb-4 mb-lg-0"
              alt=""
            />
        
            
          </>))}
        </div>
    )
}

export default Images
