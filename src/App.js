import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardRepo from './component/CardRepo';

function App() {
  const [profiles, setProfiles] = useState({
    avatar : "",
    name : "",
  })
  const [bool, setBool] = useState(true)
  
  useEffect (() => {
    axios.get('https://api.github.com/users/RizkiDeniPratama')
    .then(res => {
      setProfiles({avatar: res.data.avatar_url, name: res.data.name})
    })
    .catch(err => console.log(err))
  },[])
  
  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex">
      {bool && 
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={profiles.avatar} />
       <Card.Body>
         <Card.Title>{profiles.name}</Card.Title>
         
         <Button variant="primary" onClick={(() => setBool(false))}>My Repositories</Button>
       </Card.Body>
     </Card>
      }
    {!bool && <> <CardRepo/> <CardRepo/> <CardRepo/> <CardRepo/> <CardRepo/> <CardRepo/> <CardRepo/> <CardRepo/> <CardRepo/></> }
    </div>
  );
}

export default App;
