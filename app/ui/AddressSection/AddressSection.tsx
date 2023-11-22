import React from 'react'
import { ImLocation2 } from 'react-icons/im'
import Reveal from '../animation/Reveal'
export default function AddressSection() {
  return (
    <Reveal>
      {/*  */}
      <section
        id='address'
        className='section lg:min-h-screen flex flex-col justify-between items-center bg-address bg-center bg-cover bg-fixed
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

          <a
            href='https://www.google.com/maps/dir//Kassy+Conj.+Maguari+Al.+Ns-15,+75+-+Coqueiro+Bel%C3%A9m+-+PA,+66823-099/@-1.3308499,-48.4418244,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x92a461ea655421d5:0x3a72dba6574831b2'
            target='_blank'
            rel='noopener noreferrer'
            className='text-yellow-400 flex items-center gap-4'
          >
            <span className='text-2xl'>
              <ImLocation2 />
            </span>
            <span className='text-yellow-400'>
              Conjunto Maguari - Al. Ns-15, 75 Belém - Pará, 66823-099
            </span>
          </a>
        </div>

        <div className='relative w-full lg:w-1/2'>
          <div className='-inset-0 absolute blur-md bg-gradient-to-t from-yellow-200 via-yellow-400 to-yellow-600'></div>
          <iframe
            className='w-full relative rounded-md'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.185516070035!2d-48.4424681304516!3d-1.3308485591726864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a461ea655421d5%3A0x3a72dba6574831b2!2sKassy!5e0!3m2!1spt-BR!2sbr!4v1700665710817!5m2!1spt-BR!2sbr'
            height='450'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
    </Reveal>
  )
}
