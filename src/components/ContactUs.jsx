import React from 'react'
import '../styles/ContactForm.css'

function ContactUs() {
    return (
        <div className="w-full h-[90vh] py-[6vh] md:py-[10vh] bg-transparent flex flex-col md:flex-row items-center justify-center relative">
            <div className='w-full h-full md:w-1/2 relative mb-8 md:mb-0'>
                <img src="https://picsum.photos/id/249/3000" alt="" className='h-[56vh] w-full rounded-r-full justify-self-start' />
                <img src="https://picsum.photos/id/522/3000" alt="" className='h-[16vh] w-[16vw] absolute top-0 right-0 z-10' />
            </div>
            <div className='w-full md:w-1/2 px-4 md:px-8 h-full'>
                <div className="contact-form-container max-w-lg mx-auto">
                    <div className="flex justify-center mb-4">
                        <img src="/calendar-icon.svg" alt="Calendar" className="w-12 h-12" />
                    </div>
                    <h2 className="contact-form-title text-3xl md:text-4xl font-bold mb-10 text-center">Get in touch to book your appointment</h2>

                    <form className="contact-form space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label>TREATMENT</label>
                                <div className="select-wrapper">
                                    <select
                                        className="w-full py-3 px-4 border border-gray-200 rounded appearance-none focus:outline-none bg-white"
                                        defaultValue="">
                                        <option value="" disabled>Select Treatment</option>
                                        <option value="cleaning">Teeth Cleaning</option>
                                        <option value="whitening">Teeth Whitening</option>
                                        <option value="filling">Dental Filling</option>
                                        <option value="extraction">Tooth Extraction</option>
                                    </select>
                                    <div className="select-arrow">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label>DOCTOR</label>
                                <div className="select-wrapper">
                                    <select
                                        className="w-full py-3 px-4 border border-gray-200 rounded appearance-none focus:outline-none bg-white"
                                        defaultValue="">
                                        <option value="" disabled>Select Doctor</option>
                                        <option value="dr-smith">Dr. Smith</option>
                                        <option value="dr-johnson">Dr. Johnson</option>
                                        <option value="dr-williams">Dr. Williams</option>
                                    </select>
                                    <div className="select-arrow">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label>YOUR NAME <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label>YOUR PHONE</label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label>DATE</label>
                                <div className="date-input-container">
                                    <div className="calendar-icon">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Select Date"
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => {
                                            if (!e.target.value) e.target.type = 'text'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label>TIME</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="select-wrapper">
                                        <select
                                            className="w-full py-3 px-4 border border-gray-200 rounded appearance-none focus:outline-none bg-white"
                                            defaultValue="">
                                            <option value="" disabled>Select</option>
                                            <option value="morning">Morning</option>
                                            <option value="afternoon">Afternoon</option>
                                            <option value="evening">Evening</option>
                                        </select>
                                        <div className="select-arrow">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="select-wrapper">
                                        <select
                                            className="w-full py-3 px-4 border border-gray-200 rounded appearance-none focus:outline-none bg-white"
                                            defaultValue="">
                                            <option value="" disabled>Select</option>
                                            <option value="9:00">9:00</option>
                                            <option value="10:00">10:00</option>
                                            <option value="11:00">11:00</option>
                                            <option value="12:00">12:00</option>
                                            <option value="13:00">13:00</option>
                                            <option value="14:00">14:00</option>
                                            <option value="15:00">15:00</option>
                                            <option value="16:00">16:00</option>
                                            <option value="17:00">17:00</option>
                                        </select>
                                        <div className="select-arrow">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-xs text-gray-500 mt-1">Select Time</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <button type="submit" className="contact-form-button">
                                MAKE AN APPOINTMENT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs