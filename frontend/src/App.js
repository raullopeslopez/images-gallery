import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/Search';

const UNPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word)
    fetch(`https://api.unsplash.com/photos/random?query=${word}&client_id=${UNPLASH_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  console.log(process.env);
  
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word ={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
