import React from 'react'

import { ReactComponent as Paper } from '../icons/Paper.svg'

const ContactForm = () => {

  return (
    <div className='flex flex-col text-center h-full '>
        <h1 className='text-3xl sm:text-4xl text-blue font-bold pb-4'>Send me a Message</h1>
        <form 
            name="contact1" 
            method="POST" 
            data-netlify="true" 
            data-netlify-recaptcha="true"   
        >
        <input type="hidden" name="form-name" value="contact1"/>
            <div >
                <label htmlFor='name'>
                    <input
                    className='w-full sm:w-[80%] text-xl outline-none mt-4 placeholder-black p-4 bg-[#D7E2EF]'
                    placeholder='Full name*'
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    />
                </label>
            </div>
            <div >
                <label htmlFor='email'>
                    <input
                    className='w-full sm:w-[80%] text-xl outline-none mt-4 placeholder-black p-4 bg-[#D7E2EF]'
                    placeholder='Email*'
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    />
                </label>
            </div>
            <div >
                <select 
                    name="role[]" 
                    className='w-full sm:w-[80%] text-xl outline-none mt-4 placeholder-black p-4 bg-[#D7E2EF]'
                >
                    <option value="" disabled selected>Subject*</option>
                    <option value="Thumbnail">Thumbnail</option>
                    <option value="Header">Header</option>
                    <option value="Website">Website</option>
                    <option value="Stream Overlays">Stream Overlays</option>
                    <option value="Advertisment">Advertisment</option>
                </select>
            </div>
            <div>
                <label htmlFor='message'>
                    <textarea
                    className='w-full sm:w-[80%] text-xl outline-none mt-4 placeholder-black p-4 bg-[#D7E2EF]'
                    placeholder='Message*'
                    type="text" 
                    id="message" 
                    name="message"
                    />
                </label>
            </div>
            <div className='w-full mt-3 sm:ml-[10%] flex justify-start '>
                <button 
                type="submit"
                className='flex py-3 px-5 bg-blue hover:bg-[#295183] text-white text-xl text'>
                    Send
                    <Paper className='w-6 ml-3 '/>
                </button>
                <div data-netlify-recaptcha="true"></div>
            </div>
        </form>
    </div>
  )
}

export default ContactForm