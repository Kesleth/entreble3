import React from 'react'

const Location = ({location}) => {

    //console.log(location)
  return (
    <section className=''>
<h2 className='  flex  justify-center text-center text-2xl text-[#8EFF8B] sm:text-center'>{location?.name}</h2> 
<ul className= "flex justify-between px-3 sm:flex sm:justify-between  " >
    <li>type:{location?.type}</li>
    <li>Dimension:{location?.dimension}</li>
    <li>population:{location?.residents.length}</li>
</ul>
    </section>
  )
}

export default Location