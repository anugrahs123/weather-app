import logo from './logo.svg';

import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import img from '../src/QQ.jpg'
import {Nav , NavDropdown , Navbar , Container,Button, Form} from 'react-bootstrap'
function App() {
  const[data,setdata]=useState({})
  const[city,setcity]=useState('')
  const [show,setShow]=useState(false)

  const getData=async()=>{
   await axios.get(`http://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&appid=5a6a6ffc9545ecd677441929c3408bc3`).then((response)=>{
      console.log(response.data);
      setdata(response.data.main)
    })
    setShow(true)
  }
  // useEffect=()=>{
  //   getData()
  // }
  return (
    <div className='one'style={{backgroundImage:`url(${img})` ,height:750 ,width:1500 ,backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>


<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>



        <center>
      <div className='two'>
       <h1 style={{marginBottom:"50px"}}> Weather Broadcast</h1>
       <Form>
    
      <input type="text" placeholder='type the country name' onChange={(e)=>{
        setcity(e.target.value)
        setShow(false)
      }
      
      }/>
      <Button size='sm' variant='outline-success' style={{margin:"5px"}} onClick={getData}>SUBMIT</Button>
         
       </Form>
      <br />
      <br />
      {
        show?

     <h3 >The Current temperature of {city} is <span style={{color:"Highlight"}}> {data.temp}°C</span></h3>:
     <h4 style={{color:"red"}}>*Provide the city</h4>
      }
     {/* <h3>{data.weather[0].main}</h3> */}
       </div>
        </center>
       <div className='three'>

       {/* <img src={img} alt="" /> */}
     </div>
    </div>
  );
}

export default App;
