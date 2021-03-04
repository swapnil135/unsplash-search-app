import logo from './logo.svg';
import './App.css';
import { useState, useRef, useCallback } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [result, setResult] = useState([])
  const [photo, setPhoto] = useState("");
  const [clientId, setClientID] = useState("0gr3AUFfZEC2eEHRFkB2G7Tvrcjndst7RMThnLUhq0U")


  function handleChange(event) {
    setPhoto(event.target.value)

  }

  function handleSubmit(event) {
    console.log(photo)
    const url = 'https://api.unsplash.com/search/photos?page=1&query=' + photo + '&client_id=' + clientId;
    axios.get(url)
      .then((response) => {
        setResult(response.data.results)
        console.log(result)
      })
  }

  return (
    <div className="App">



      <div className='parent'>

        <h1>Unsplash Photo Search</h1>
        <input onChange={handleChange} type='text' name='photo' placeholder='Search for Photos..' className='form-control-md'></input>
        <Button onClick={handleSubmit} variant='dark' type='submit'>Search</Button>

        <div className='image-div'>

          {result.map(photo =>
            (<img className='image' src={photo.urls.small} />)
          )}</div>
      </div>


    </div>
  );
}

export default App;
