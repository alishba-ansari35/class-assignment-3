import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <section className='p-5 text-center bg-stone-300 border-2 border-black'>
        <h2 className='text-5xl font-serif underline  decoration-black text-black'>Our Shops</h2>
        <div className='flex justify-center flex-wrap gap-5 mt-4'> 
        <div className='border-2 border-black rounded-lg p-2 w-[350px] h-[350px] 
        text-center transition-transform duration-300 hover:scale-105'>
     <Image
       src="/images/images.png"
       alt="shop"
       className='rounde'
       width={350}
       height={350}
     />
     <p className='mt-2 text-black text-2xl font-serif underline decoration-black'> A morning cup of coffee is a sip of serenity before the day begins ☕️.</p>
     </div>

     <div className='border-2 border-black rounded-lg p-2 w-[350px] h-[350px] 
        text-center transition-transform duration-300 hover:scale-105'>
     <Image
       src="/images/images2.png"
       alt="shop"
       className='rounde'
       width={350}
       height={350}
     />
     <p className='mt-2 text-black text-2xl font-serif underline decoration-black'> Coffee isn’t just a drink; it’s liquid ambition in a coffee cup ☕️..</p>
     </div>

     <div className='border-2 border-black rounded-lg p-2 w-[350px] h-[350px] 
        text-center transition-transform duration-300 hover:scale-105'>
     <Image
       src="/images/images3.png"
       alt="shop"
       className='rounde'
       width={350}
       height={350}
     />
     <p className='mt-2 text-black text-2xl font-serif underline decoration-black'> Sometimes all you need is a strong coffee and a moment of silence ☕️.</p>
     </div>
        </div>
    </section>
  )
}

export default Products
