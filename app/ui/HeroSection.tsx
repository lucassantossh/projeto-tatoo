import React from 'react'

import {} from 'react-icons'

export default function HeroSection() {
  return (
    <section
      className='container mx-auto px-4 bg-slate-900 min-h-screen flex justify-center items-center
    lg:px-44
    '
    >
      <div>
        <h1 className='text-red-600 uppercase font-black text-center text-6xl mb-8'>
          tatuagens & <br />
          piercing
        </h1>
        <h2 className='max-w-lg text-center text-2xl mb-4 tracking-wider mx-auto'>
          &perp;Frase cativante que fale um pouco da idéia do negócio&perp;
        </h2>
        <p className='max-w-lg text-center tracking-widest mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat
          provident fugit odio, eveniet corrupti.
        </p>
        <a
          href='https://wa.me/5591985839244'
          className='whatsapp-button mx-auto block w-fit'
        >
          contate-nos
        </a>
      </div>
    </section>
  )
}
