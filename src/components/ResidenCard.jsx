import axios from 'axios'
import React, { useEffect, useState } from 'react'


const residentsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500"
}

const ResidenCard = ({resident}) => {

  const [resideninfo, setResideninfo] = useState()
 



  useEffect (() => {
    axios.get(resident)
    .then((res) => setResideninfo(res.data))
    .catch((err) => console.log(err))
    
  },[])

  return (
   <article>
    <div className='relative'>
      <img className='w-full ' src={resideninfo?.image} alt="" />
      <div className=" absolute bottom-4 left-1/2 -translate-x-1/4 bg-[#020A02]/80 text-white p-1 px-2 flex gap-2 items-center rounded-sm">
        <div className={`w-3 h-3 ${residentsStatus[resideninfo?.status]} rounded-full`}></div>
        <span>{resideninfo?.status}</span>
      </div>
    </div>
    <section>
     <h3>{resideninfo?.location.name}</h3>
      <ul>
        <li>
          <span>Species</span>
          <span>{resideninfo?.species}</span>
          </li>
          <li>
          <span>Origin</span>
          <span>{resideninfo?.origin.name}</span>
          </li>
          <li>
          <span>Episode</span>
          <span>{resideninfo?.episode.lengt}</span>
          </li>
      </ul>
    </section>
   </article>
  )
}

export default ResidenCard