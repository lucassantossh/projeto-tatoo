import Reveal from '../animation/Reveal'
import TattooCard from './TattooCard'
import { FaInstagram } from 'react-icons/fa'

export default function PortfolioSection() {
  return (
    <section
      className='section'
      id='portfolio'
    >
      <Reveal>
        <h2 className='section-title'>nossos trabalhos</h2>
        <TattooCard />
        <div className='mt-12'>
          <a
            href='https://www.instagram.com/_killertattoo/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-2 items-center w-fit mx-auto py-4 px-8 bg-yellow-500 rounded-md md:text-2xl text-red-500'
          >
            <FaInstagram />
            <span className='font-bold text-black'>Siga-nos no instagram</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
