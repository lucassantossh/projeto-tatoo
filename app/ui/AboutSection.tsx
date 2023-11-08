import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='section flex flex-col lg:flex-row justify-between items-center'
    >
      <div className='max-w-lg'>
        <h2 className='section-title mb-12'>sobre nós</h2>
        <p className='paragraph'>
          Nós somos movidos pela arte, gostamos do que é bonito e acreditamos
          que, é o nosso próprio corpo, a obra de arte mais bonita que existe.
        </p>
        <p className='paragraph'>
          Nossa missão é prover um serviço de tatuagem e piering corporal de
          qualidade, levando em consideração as melhores técnicas utilizadas no
          mercado para este tipo de prestação de serviço.
        </p>
        <p className='paragraph'>
          Conte conosco para tornar realidade o seu projeto de eternizar algo em
          seu corpo.
        </p>
      </div>
      <div>
        <Image
          src={'/img-section.jpg'}
          width={400}
          height={400}
          alt='osme text'
        />
      </div>
    </section>
  )
}
