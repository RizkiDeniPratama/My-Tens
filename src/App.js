import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [profile, setProfile] = useState([])
  useEffect (() => {
    axios.get('https://api.github.com/users/RizkiDeniPratama')
    .then(res => {
      console.log('ini respone => ', res.data);
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
