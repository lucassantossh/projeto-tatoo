import React from 'react'

import { IoLogoWhatsapp } from 'react-icons/io'
export default function HeroSection() {
  return (
    <section
      className='section bg-hero bg-cover bg-center min-h-screen flex justify-center items-center
    '
    >
      <div>
        <h1 className='text-[#1BC6B4] text-center capitalize font-grenze font-black text-6xl mb-4'>
          Tatuagens &#38; piercings
          <br /> feitos por artistas talentosos
        </h1>
        <h2 className='max-w-lg text-left text-xl mb-12 tracking-wider mx-auto'>
          Faça do seu corpo a obra de arte mais bonita
        </h2>
        <p className='max-w-lg text-left text-xs tracking-widest mx-auto'>
          Entre em contato conosco para fazer um orçamento para o seu projeto
        </p>
        <a
          href='https://wa.me/5591985839244'
          className='whatsapp-button mx-auto flex items-center gap-2 w-fit'
        >
          <span className='text-lg'>
            <IoLogoWhatsapp />
          </span>
          contato
        </a>
      </div>
    </section>
  )
}
