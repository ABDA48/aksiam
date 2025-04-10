import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Latestarticle from './Components/Latestarticle';
import Contact from './Components/Contact'; 

export default  function Home({articles,imagesSection}) {
 


 
    
  return (
    <>
        <div className=''>
           <Hero  images={imagesSection}  />
           <About images={imagesSection} />
           <Latestarticle articles={articles} />
           <Contact />
        </div>
    </>
  )
}