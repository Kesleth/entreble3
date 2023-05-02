
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {


  const [location, setLocation] = useState()

  const handleSubmit = (e)=> {
    e.preventDefault()
    const newLocation = (e.target.locationId.value)
 
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
 
    axios.get(URL) 
    .then((res) => setLocation(res.data))
    .catch((err) =>   console.log(err))
  }

   useEffect(() =>{
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
 
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  },[])

  return (
   
      <div className='App '  >
        <div>
         
        </div>
       <form className=' form ' onSubmit={handleSubmit}>
         <div className=' '>
          <input   id='locationId' placeholder='type a location id... ' className='border-2 border-black' type="text" />
          <button className='button'>search <i class='bx bx-search'></i></button>
         </div>
         <h2>Welcome to the crazy iniverse! </h2>
       </form>
       <Location location={location}/>
       <ResidentList location={location}/>
      </div>  
    
  ) 
}

export default App


