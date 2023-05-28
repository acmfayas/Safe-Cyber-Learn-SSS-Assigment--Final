import React, { useEffect, useState } from 'react'
import { Container, Row, Col,Form,Button,Alert } from 'react-bootstrap';
import "./admin.css"
import axios from 'axios';
import {  toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"

const Adminage = () => {
  const [url, seturl] = useState("");
  const [data, setdata] = useState([]);
  const navigate = useNavigate();



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
      console.log(response.data.data)
    } catch (error) {
      console.error(error); 
    }
  }

  const submit = async ()=>{
    if(url){
      const api= 'http://localhost:8080/video/add'; 
      const token = localStorage.getItem('token'); 

      try {
        const response = await axios.post(api, {
         url:url
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if(response){
          seturl("")
          loadData()
        }
    
      } catch (error) {
        console.error(error); 
      }
    }else{
      toast.error("enter the url")
    }
  }

  useEffect(()=>{
    if(localStorage.getItem("role") === "admin"){
      
    }else{
      logout();
    }
    loadData();
  },[])

  const logout = ()=>{
    localStorage.clear();
    navigate("/")
  }
  return (
    <Container style={{"marginTop":"200px"}}>
      <Row className="justify-content-center">
        <Col xs="6" md="4">
        <Form.Group className='d-flex flex-row gap-3'>
          <Form.Control placeholder="enter the url" value={url} onChange={(e)=>seturl(e.target.value)}/>
          <Button size="sm" className='text-center' onClick={submit}>Add</Button>
          <Button size="sm" className='text-center' onClick={logout}>logout</Button>
        </Form.Group>
        </Col>
      </Row>
      <Row className='pt-5'>
     
        {
          data && data.map((d)=>{
            return(
              <Alert variant="success">
                <Alert.Heading>{d.url}</Alert.Heading>
              </Alert>
            )
          })
        }
      
      </Row>
   </Container>
  )
}

export default Adminage