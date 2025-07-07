import React from 'react'

function ConfidenceSection() {
  return (
    <div className="container mx-auto max-w-6xl flex flex-col items-center justify-center py-16 gap-24">

      {/* Icon and Title */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="mb-4">
          <img src="/images/icons/tooth-icon.svg" alt="Tooth Icon" className="w-16 h-16" />
        </div>
        <h2 className="text-6xl font-extralight mb-2">Confidence, care and <br /> commitment</h2>
      </div>
      <div className='w-full items-center justify-center flex flex-col gap-12 md:gap-24 px-4 md:px-8 justify-center'>
        <img src="https://picsum.photos/2000" alt="" className='h-[50vh] w-[60vw] rounded-bl-[200px] rounded-tr-[200px]' />
        <p className='w-5/6'>We understand just how closely connected oral health is to your overall health, confidence, and appearance, and we pride ourselves on cultivating a friendly, upbeat dental environment where you can always feel comfortable in our care.</p>
      </div>

    </div>
  )
}

export default ConfidenceSection
