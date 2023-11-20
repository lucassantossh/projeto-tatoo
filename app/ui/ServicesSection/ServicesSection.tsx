import Image from 'next/image'
import React from 'react'

export default function ServicesSection() {
  return (
    <section
      id='services'
      className='section flex flex-col bg-services bg-center bg-cover bg-fixed'
    >
      <h2 className='section-title mb-12 lg:mb-24 text-center'>
        nossos principais serviços
      </h2>

      <div className='flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24'>
        <div className='shadow-sm shadow-zinc-800 p-8 w-fit rounded-md max-w-xs max-h-80 bg-zinc-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20'>
          <Image
            src={'/icons/tattoo-machine-icon.png'}
            height={60}
            width={60}
            alt='icon'
            className='mb-2'
          />
          <h3 className='mb-4 capitalize font-bold tracking-wide text-lg'>
            tatuagens
          </h3>
          <p className='tracking-wider'>
            Com todo o cuidado que sua pele merece, fazemos diferentes estilos
            de arte de maneira a marcar sua personalidade em seu corpo.
          </p>
        </div>
        <div className='shadow-sm shadow-zinc-800 p-8 w-fit rounded-md max-w-xs max-h-80 bg-zinc-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20'>
          <Image
            src={'/icons/eye-piercing-icon.png'}
            height={60}
            width={60}
            alt='icon'
            className='mb-2'
          />
          <h3 className='mb-4 capitalize font-bold tracking-wide text-lg'>
            body piercing
          </h3>
          <p className='tracking-wider'>
            Realizamos a aplicação de body piercing através de um serviço feito
            por um profissional experiente e qualificado.
          </p>
        </div>
      </div>
    </section>
  )
}
