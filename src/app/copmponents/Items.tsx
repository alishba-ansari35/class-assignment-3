import Image from 'next/image'
import React from 'react'

const Items = () => {
  return (
    <section className='p-5 text-center bg-stone-300 border-2 border-black'>
        <h2 className='text-5xl font-serif underline  decoration-black text-black'>Our Items</h2>
        <div className='flex justify-center flex-wrap gap-5 mt-4'> 
        <div className='border-2 border-black rounded-lg p-2 w-[209px] h-[210px] 
        text-center transition-transform duration-300 hover:scale-105'>
     <Image
       src="/images/download.png"
       alt="shop"
       className='rounde ' 
       width={209}
       height={210}
     />
     <p className='mt-2 text-black text-2xl font-serif underline decoration-black p-3'>Cold Brew ☕️.</p>
     </div>

     <div className='border-2 border-black rounded-lg p-2 w-[209px] h-[210px] 
        text-center transition-transform duration-300 hover:scale-105'>
     <Image
       src="/images/download1.png"
       alt="shop"
       className='rounde'
       width={209}
       height={210}
     />
     <p className='mt-2 text-black text-2xl font-serif underline decoration-black'>Cappuccino ☕️..</p>
     </div>

     <div className='border-2 border-black rounded-lg p-2 w-[200px] h-[210px] 
        text-center transition-transform duration-300 hover:scale-105'>
     <Image
       src="/images/download2.png"
       alt="shop"
       className='rounde'
       width={200}
       height={210}
     />
     <p className=' text-black text-2xl font-serif underline decoration-black'> Caffe mocha ☕️.</p>
     </div>
        </div>
    </section>
  )
}

export default Items
