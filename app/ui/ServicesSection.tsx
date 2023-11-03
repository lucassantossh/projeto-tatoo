import Image from 'next/image'
import React from 'react'

export default function ServicesSection() {
  return (
    <section
      className='container py-8 px-8 flex flex-col
    lg:px-48'
    >
      <h2 className='section-title text-center mb-12'>nossos serviços</h2>

      <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className=' self-center border-l pl-2'>
          <h3 className='title-base'>tatuagem</h3>
          <p className='paragraph text-left'>
            &perp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dolorum nihil neque.&perp;
          </p>
        </div>

        <Image
          src={'/tatuando.jpg'}
          height={628}
          width={500}
          alt='image'
        />

        <div className='self-center border-r pr-2'>
          <h3 className='title-base text-right'>piercing</h3>
          <p className='paragraph text-right'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            veniam.
          </p>
        </div>
      </div>
    </section>
  )
}
