import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'

const SecurityAwarenessGuide = () => {
  const [data, setdata] = useState([])

  const loadData =async ()=>{
    const api= 'http://localhost:8080/video/find'; 
    const token = localStorage.getItem('token'); 

    try {
      const response = await axios.get(api, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

       setdata(response.data.data); 
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(()=>{
  loadData();
  },[])
  return (
    <div className='SecurityAwareness-g gap-3'>
        {
           data &&data.map((d,i)=>{
                return(
                  <div key={i}>
                    <ReactPlayer url={d.url} />
                  </div>
                )
            })
        }
      
    </div>
  )
}

export default SecurityAwarenessGuide