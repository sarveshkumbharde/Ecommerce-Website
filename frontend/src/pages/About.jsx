import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, itaque. Optio cumque in sed cupiditate totam ratione expedita unde assumenda nihil? Deleniti, accusamus. Impedit nostrum dolores sed maxime ducimus perspiciatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium iure accusantium iusto qui? Esse odio cum velit enim soluta atque, placeat ratione ipsa amet corporis? Expedita ipsam impedit voluptatem.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus! Corrupti temporibus in dolore tempora nobis quis doloremque, consequatur tenetur molestiae quam nesciunt nemo ratione odit exercitationem tempore doloribus accusantium.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iste perferendis ipsum hic natus dolores placeat culpa, ex veritatis itaque quis architecto nobis dolor voluptatibus, sapiente fuga! Velit, doloremque natus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iste perferendis ipsum hic natus dolores placeat culpa, ex veritatis itaque quis architecto nobis dolor voluptatibus, sapiente fuga! Velit, doloremque natus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iste perferendis ipsum hic natus dolores placeat culpa, ex veritatis itaque quis architecto nobis dolor voluptatibus, sapiente fuga! Velit, doloremque natus.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
