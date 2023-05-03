
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
    <main className='w-100% '>
      <section className='w-100% '>
    <div className="App max-h-min bg-[url('/bg.png')] bg-cover"  >
        <div className='w-full bg-cover'>
       <form className=' form ' onSubmit={handleSubmit}>
         <div className='text-center border-solid border-3 border-[#8EFF8B] '>
          <div className='flex min-h-0 justify-center  '>
            <img className='h-1/5 bg-cover opacyty-25  ' src="/Ellipse.png" alt="" />
            <div className=' container absolute justify-center top-0 left-1/2 transform -translate-x-1/2'>
              <img className=" img2 max-w-5xl sm:max-w-8xl mx-auto " src="/img4.png" alt="" />
               <div className='flex justify-center -wed-inspector-hide-shortkut'>
                 <img className='' src="/nombre 1.png" alt="" />
              </div>
            </div>
          </div>
          <input   id='locationId' placeholder='type a location id... ' className='mt-5 border-2 border-solid border-[#8EFF8B] rounded-md bg-gray-500 opacity-40 shadow-lg shadow-[#8EFF8B]/70 text-white' type="text" />
          <button className=" search  mt-5 px-4 bg-[#23b81ecc] text-white shadow-lg shadow-[#8EFF8B]/70 rounded-[5px] ">search <i class='bx bx-search'></i></button>
         </div>
         <h2 className=' elh2  flex  justify-center text-center text-3xl p-10 text-[#8EFF8B] sm:text-4xl'> ¡TE AMO SORGIA! </h2>
       </form>
       </div>

      <section className=' section  p-2 mb-8 grid gap-2 auto-rows-auto  max-w-[1000px] mx-auto border-solid border-2 border-[#8EFF8B] rounded-md bg-gray-1000 shadow-lg shadow-[#8EFF8B]/70 
    hover:bg-gray-800'>

         <Location  location={location}  />

      </section>

      <section className=''>

       <ResidentList location={location}/>
      </section>

     
      </div>  
    
   </section>
    </main>
   
    
  ) 
}

export default App


