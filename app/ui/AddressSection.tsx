import React from 'react'
import { ImLocation2 } from 'react-icons/im'
export default function AddressSection() {
  return (
    <section
      className='container px-4 mx-auto mb-12 lg:min-h-screen flex flex-col justify-between items-center
    lg:flex-row  lg:px-48'
    >
      <div className='max-w-sm lg:max-w-lg mb-8'>
        <h2 className='section-title text-center'>
          Faça uma visita ao nosso estúdio
        </h2>
        <p className='paragraph text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          facere obcaecati soluta, reprehenderit temporibus adipisci?
        </p>
        <p className='text-red-600 flex items-center gap-4'>
          <span className='text-2xl'>
            <ImLocation2 />
          </span>
          <span>endereço do estabelecimento</span>
        </p>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.29712026189375!2d-48.44549031710966!3d-1.3234952096629633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46114f52f9f89%3A0x7074a6c8c02dc0b0!2sEly%20Flores%20-%20Floricultura!5e0!3m2!1spt-BR!2sbr!4v1699039161987!5m2!1spt-BR!2sbr'
        height='450'
        className='w-full lg:w-1/2'
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  )
}
