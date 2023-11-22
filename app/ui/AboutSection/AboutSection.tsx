import Image from 'next/image'
import React from 'react'
import Reveal from '../animation/Reveal'

export default function AboutSection() {
  return (
    <Reveal>
      <section
        id='about'
        className='section flex pb-24 flex-col lg:flex-row justify-between items-center'
      >
        <div className='relative mb-8 sm:mb-0'>
          <div className='w-full absolute -inset-0 blur-md bg-gradient-to-t from-yellow-200 via-yellow-400 to-yellow-600'></div>
          <div className='relative pr-4 bg-zinc-900 rounded-md'>
            <Image
              src={'/images-outils/lucas-santos-perfil.png'}
              height={481}
              width={320}
              alt='bruxo'
            />
          </div>
        </div>

        <div className='max-w-2xl'>
          <h2 className='section-title mb-12'>sobre nós</h2>
          <p className='paragraph text-[#ffffff]'>
            Nós somos movidos pela arte, gostamos do que é bonito e acreditamos
            que, é o nosso próprio corpo, a obra de arte mais bonita que existe.
          </p>
          <p className='paragraph'>
            Nossa missão é prover um serviço de tatuagem e piering corporal de
            qualidade, levando em consideração as melhores técnicas utilizadas
            no mercado para este tipo de prestação de serviço.
          </p>
          <p className='paragraph mb-0'>
            Conte conosco para tornar realidade o seu projeto de eternizar algo
            em seu corpo.
          </p>
        </div>
      </section>
    </Reveal>
  )
}
