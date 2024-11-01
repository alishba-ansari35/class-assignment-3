import React from 'react'

const Contactpage = () => {
  return (
    <div className='p-5 text-center bg-stone-300'>
          <h2 className='text-5xl font-serif underline  decoration-black text-black p-10'>Contact Us</h2>

          <div className='flex justify-center flex-wrap gap-5 mt-1'> 
        <div className='border-2 border-black rounded-lg p-2 w-[450px] h-[450px] 
        text-center transition-transform duration-300 hover:scale-105'>

      <form action="">
        
        <label htmlFor="" className=' text-xl block mb-5 text-black font-serif'>First Name</label>
        <input className='w-[100%] p-3 mb-2 border-2 border-black rounded-xl text-center' type="text"  placeholder='Enter your first name'/>

        <label htmlFor="" className=' text-xl block mb-5 text-black font-serif'>Last Name</label>
        <input  className='w-[100%] p-3 mb-2 border-2 border-black rounded-xl text-center' type="text"  placeholder='Enter your last name'/>

        <label htmlFor="" className=' text-xl block mb-5 text-black font-serif'>Email Address</label>
        <input  className='w-[100%] p-3 mb-2 border-2 border-black rounded-xl text-center' type="text"  placeholder='Enter your email address'/>

        <button className='w-[100%] hover:bg-white hover:text-black bg-black text-white text-xl font-serif  p-3 mt-4 border-2 border-black rounded-xl text-center' type="submit">Send Message</button>

      </form>

            </div>
            </div>

        
          
      
      
    </div>
  )
}

export default Contactpage
