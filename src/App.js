
import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './components/Gallery';
import ButtonsBar from './components/ButtonBar';


function App(){
{/* State variables here... */}
let [artId, setArtId] = useState(12720)
let [data, setData] = useState({})


useEffect(() => {
    document.title='YAYAY! Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
}, [artId])

{
  

// in App.js
// send this function down to <ButtonBar />
    const handleIterate = (e) => {
        setArtId(artId + Number(e.target.value))
    }
<Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />

  
  /* Return JSX down here... */}
}

export default App;
