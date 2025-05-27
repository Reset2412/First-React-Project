import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACTANOS'} text2={'AHORA'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Nuestra Tienda</p>
          <p className='text-gray-500'>55050 Izcalli Palomas <br />Suite 350, Washington, Usa</p>
          <p className='text-gray-500'>Telefono: (+52) 55 7762 4628</p>
          <p className='font-semibold text-xl'>Email: joshuapaz24@gmail.com</p>
          <p className='text-gray-500'>Aprende mas de nuestro equipo y Trabajos disponibles.</p>
          <button className='cursor-pointer border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explora acerca del Trabajo</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact