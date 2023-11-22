'use client'
import React from 'react'

import { IoLogoWhatsapp } from 'react-icons/io'
import Reveal from '../animation/Reveal'
export default function HeroSection() {
  return (
    <section
      className='section bg-hero bg-cover bg-center min-h-screen flex justify-center items-center
    '
    >
      <Reveal>
        <h1
          className='text-5xl text-yellow-500
          md:text-center capitalize font-grenze font-black md:text-6xl mb-4'
        >
          A sua personalidade <br />
          eternizada em seu corpo
        </h1>
        <h2 className='max-w-lg text-left lg:text-center text-xl mb-12 tracking-wider mx-auto'>
          Localizado em belém do Pará, o estúdio killer tattoo oferece os
          serviços de tatuagem e body piercing feitos por profissionais
          experientes e talentosos.
        </h2>
        <p className='max-w-lg text-center text-xs tracking-widest mx-auto'>
          Entre em contato conosco para fazer um orçamento para o seu projeto
        </p>
        <a
          href='https://wa.me/5591998165368'
          className='whatsapp-button font-semibold mx-auto flex items-center gap-2 w-fit'
        >
          <span className='text-2xl font-base text-green-600'>
            <IoLogoWhatsapp />
          </span>
          contato
        </a>
      </Reveal>
    </section>
  )
}
