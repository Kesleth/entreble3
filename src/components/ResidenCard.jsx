import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Styles for the status of the resident
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
  }, [])

  return (
    // Article container with styles
    <article className="grid gap-2 border-[#8EFF8B] border-2 shadow-lg shadow-[#8EFF8B]/70 hover:bg-[#8fff8b8a] rounded-md overflow-hidden ">
      <div className="relative">
        {/* Resident image with styles */}
        <img className="w-full border-[#8EFF8B] border-2" src={resideninfo?.image} alt="" />
        {/* Status label with styles */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center rounded-[9px] border-[#8EFF8B] border-2 shadow-lg shadow-[#8EFF8B]/70 hover:bg-[#8fff8b8a] ">
          <div className={`w-3 h-3 ${residentsStatus[resideninfo?.status]} bg-red-500 rounded-full`}></div>
          <span>{resideninfo?.status}</span>
        </div>
      </div>
      <section className="">
        {/* Resident location with styles */}
        <h3 className=' text-xl text-[#8EFF8B] py-3 text-center'>{resideninfo?.location.name}</h3>
        <ul className='m-5 '>
          {/* Resident species with styles */}
          <li>
            <span className="  m-2  text-[#8EFF8B] font-bold mr-1">Species:</span>
            <span>{resideninfo?.species}</span>
          </li>
          {/* Resident origin with styles */}
          <li>
            <span className="  m-2  text-[#8EFF8B] font-bold mr-1">Origin:</span>
            <span>{resideninfo?.origin.name}</span>
          </li>
          {/* Resident episode count with styles */}
          <li>
            <span className=" m-2  text-[#8EFF8B] font-bold mr-1">Episode:</span>
            <span>{resideninfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidenCard
