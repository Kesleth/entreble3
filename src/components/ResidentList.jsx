import React, { useEffect, useState } from 'react'
import ResidenCard from './ResidenCard'

const ResidentList = ({location}) => {

  const [currenPage, setCurrenPage] = useState(1)
   
  const arrayPages = []
  const RESIDENTS_PER_PAGE = 20
  const quantityPages = Math.ceil(location?.residents?.length / RESIDENTS_PER_PAGE)
    for(let i= 1 ; i <= quantityPages; i++ ){
      arrayPages.push(i )
    }

    const startCut =  currenPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE 
    const endCut = currenPage * RESIDENTS_PER_PAGE   

    const residents = location?.residents;

   useEffect(() => {
    setCurrenPage(1)
   },[location])

  return (
    <>
    <section className=' sectionresidenlist p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto'>
      {
         residents?.slice(startCut, endCut).map((resident) => (
         <ResidenCard key={resident} resident={resident} />
         )) }
    </section> 
    <ul className='flex gap-4 justify-center py-4'>
       {
        arrayPages.map(page => <li onClick={() => setCurrenPage (page)} className={`p-3 rounded-md cursor-pointer ${page === currenPage && "bg-green-800 text-white font-bold"}`} key={page}>{page}</li>)
       }
    </ul>
    </>
  )
}

export default ResidentList