import React from 'react'

function HeroSection() {
  return (
    <>
    <section className='w-screen h-screen relative overflow-hidden'>
        <img src="https://picsum.photos/3000" alt="Hero" className='h-full w-full object-cover absolute'/>
      <div>
        <div className='absolute bg-transparent top-3/4 right-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h1 className='text-5xl font-bold mb-4'>Award-winning<br />private dental<br />clinic in Portland</h1>
          <p className='text-lg mb-8'>We are ready to make your smile sparkle!</p>
          <div className='flex space-x-4 justify-center'>
            <button className='border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-8 rounded'>
              ABOUT US
            </button>
            <button className='bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded'>
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSection