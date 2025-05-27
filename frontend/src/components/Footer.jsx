import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia similique, fuga repellat maiores porro nihil modi sequi necessitatibus inventore minima harum consequuntur odio dolor. Eum incidunt nobis itaque odit.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Envios</li>
                <li>Politica de Privacidad</li>
            </ul>
        </div>
        <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+52 55 7762 4628</li>
                <li>joshuapaz@gmail.com</li>
            </ul>
        </div>

        </div>
        <div>
            <hr className="w-full border border-black" />
            <p className="py-5 text-sm text-center">
                Copyright 2025© forever.com – All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer
