import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='section flex pb-24 flex-col lg:flex-row justify-between items-center'
    >
      <div className='pr-4 shadow-md shadow-yellow-400/10 mb-8 sm:mb-0'>
        <Image
          src={'/bruxo.png'}
          height={320}
          width={320}
          alt='bruxo'
        />
      </div>

      <div className='max-w-2xl'>
        <h2 className='section-title mb-12'>sobre nós</h2>
        <p className='paragraph text-[#ffffff]'>
          Nós somos movidos pela arte, gostamos do que é bonito e acreditamos
          que, é o nosso próprio corpo, a obra de arte mais bonita que existe.
        </p>
        <p className='paragraph'>
          Nossa missão é prover um serviço de tatuagem e piering corporal de
          qualidade, levando em consideração as melhores técnicas utilizadas no
          mercado para este tipo de prestação de serviço.
        </p>
        <p className='paragraph mb-0'>
          Conte conosco para tornar realidade o seu projeto de eternizar algo em
          seu corpo.
        </p>
      </div>
    </section>
  )
}
