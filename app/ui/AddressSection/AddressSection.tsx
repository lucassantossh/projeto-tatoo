import React from 'react'
import { ImLocation2 } from 'react-icons/im'
import Reveal from '../animation/Reveal'
export default function AddressSection() {
  return (
    <Reveal>
      <section
        id='address'
        className='section lg:min-h-screen flex flex-col justify-between items-center bg-contact bg-center bg-cover bg-fixed
    lg:flex-row'
      >
        <div className='max-w-sm lg:max-w-lg mb-8 p-8'>
          <h2 className='section-title text-center'>
            Faça uma visita ao nosso estúdio
          </h2>
          <p className='paragraph'>
            Estamos localizados em um local acessível e confortável com um
            ambiente amigável, propicio para você passar um bom momento enquanto
            faz sua tatuagem ou aplica o seu piercing.
          </p>
          <p className='text-yellow-400 flex items-center gap-4'>
            <span className='text-2xl'>
              <ImLocation2 />
            </span>
            <span className='text-yellow-400'>
              Conjunto Maguari - Al. Ns-15, 75 Belém - Pará, 66823-099
            </span>
          </p>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.185516070035!2d-48.4424681304516!3d-1.3308485591726864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a461ea655421d5%3A0x3a72dba6574831b2!2sKassy!5e0!3m2!1spt-BR!2sbr!4v1700665710817!5m2!1spt-BR!2sbr'
          height='450'
          className='w-full lg:w-1/2'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </Reveal>
  )
}
