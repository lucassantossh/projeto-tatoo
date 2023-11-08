import Image from 'next/image'
import React from 'react'

export default function ServicesSection() {
  return (
    <section
      id='services'
      className='section flex flex-col bg-services bg-fixed bg-center bg-cover'
    >
      <h2 className='section-title text-center mb-12'>Nossos serviços</h2>

      <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className=' self-center border-l pl-2 min-h-[150px]'>
          <h3 className='title-base mb-4'>Tatuagem</h3>
          <p className='paragraph text-left'>
            Com todo o cuidado que sua pele merece, fazemos diferentes estilos
            de arte de maneira a marcar sua personalidade em seu corpo
          </p>
        </div>

        <Image
          src={'/tatuando.jpg'}
          height={628}
          width={500}
          alt='image'
        />

        <div className='self-center border-r pr-2 min-h-[150px]'>
          <h3 className='title-base text-right mb-4'>Body piercing</h3>
          <p className='paragraph text-right'>
            Realizamos a aplicação de body piercing através de um serviço feito
            por um profissional experiente e qualificado
          </p>
        </div>
      </div>
    </section>
  )
}
