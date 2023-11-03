import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <section className='container mx-auto px-4 lg:px-48 pb-8 flex flex-col lg:flex-row justify-between items-center'>
      <div className='max-w-lg'>
        <h2 className='section-title mb-12'>sobre nos</h2>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet
          quos rerum expedita? Accusantium, autem. Optio, rerum?
        </p>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus
          eum provident.1
        </p>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, sequi
          eaque.
        </p>
      </div>
      <div>
        <Image
          src={'/tatuando.jpg'}
          width={400}
          height={400}
          alt='osme text'
        />
      </div>
    </section>
  )
}
