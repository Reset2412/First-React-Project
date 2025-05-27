import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ACERCA'} text2={'DE NOSOTROS'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi adipisci accusantium eum a labore qui beatae dolorem minus? Repellendus totam consectetur dolorem incidunt dolor. Atque nostrum in rerum amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet similique dolorum ipsa voluptates sint corrupti accusamus suscipit, expedita et, magnam dolores fugit quaerat omnis tempore. Accusamus neque autem repellat.</p>
            <b className='text-gray-800'>Our Mision</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptas suscipit cumque ex necessitatibus facere fugiat dolore est, voluptatibus id vero dolorum. Provident hic corporis in, vero fuga eius architecto?</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
          <Title text1={'PORQUE'} text2={'ESCOJERNOS'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quisquam ipsum nostrum harum aperiam, in corporis nihil officiis quia quaerat. Iusto illum laborum eum quisquam facere ea, id accusamus?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quisquam ipsum nostrum harum aperiam, in corporis nihil officiis quia quaerat. Iusto illum laborum eum quisquam facere ea, id accusamus?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quisquam ipsum nostrum harum aperiam, in corporis nihil officiis quia quaerat. Iusto illum laborum eum quisquam facere ea, id accusamus?</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About