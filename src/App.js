import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardRepo from './component/CardRepo';
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux'
import { getAllRepos } from './store/actions/repoAction'

function App() {
  const [profiles, setProfiles] = useState({
    avatar : "",
    name : "",
  })
  const [bool, setBool] = useState(true)
  
  const { repos, loading } = useSelector( state => state.repoReducer )

  // console.log('ini state dari redux', loading);
  const dispatch = useDispatch()

  const reFetch = () => {
    dispatch(getAllRepos())
  }

  useEffect (() => {
    axios.get('https://api.github.com/users/RizkiDeniPratama')
    .then(res => {
      setProfiles({avatar: res.data.avatar_url, name: res.data.name})
    })
    .catch(err => console.log(err))
  },[])

  useEffect(() => {
    reFetch()
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
    {!bool && <> <Row  xs={1} md={3} className="g-3"> {repos.map((el, i) => (<CardRepo repo={el} key={i}/>))} </Row></> }
    </div>
  );
}

export default App;
