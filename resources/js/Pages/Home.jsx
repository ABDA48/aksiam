import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Latestarticle from './Components/Latestarticle';
import Contact from './Components/Contact'; 

export default  function Home({articles,imagesSection,cles}) {
 


 
    
  return (
    <>
        <div className=''>
           <Hero  images={imagesSection}  />
           <About  cles={cles}/>
           <Latestarticle articles={articles} />
           <Contact />
        </div>
    </>
  )
}