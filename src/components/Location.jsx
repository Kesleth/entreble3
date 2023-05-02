import React from 'react'

const Location = ({location}) => {

    //console.log(location)
  return (
    <section className='parte2'>
<h2>{location?.name}</h2> 
<ul >
    <li>type:{location?.type}</li>
    <li>Dimension:{location?.dimension}</li>
    <li>population:{location?.residents.length}</li>
</ul>
    </section>
  )
}

export default Location