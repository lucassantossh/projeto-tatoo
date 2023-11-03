import React from 'react'

export default function ContactSection() {
  return (
    <section className='container mx-auto mb-12 px-2 lg:px-48'>
      <h2 className='section-title'>contact us</h2>
      <div className='flex flex-col justify-between lg:flex-row gap-8'>
        <div className='lg:w-1/2 border'>
          <ul className='max-w-lg'>
            <li>
              <a href='tel:+'>telefone</a>
            </li>
            <li>
              <a
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
        <form className='lg:p-4 border flex flex-col gap-4 lg:w-1/2'>
          <input
            type='text'
            name=''
            id=''
            placeholder='name'
          />
          <input
            type='email'
            name=''
            id=''
            placeholder='email'
          />
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='sua ideia'
          ></textarea>
        </form>
      </div>
    </section>
  )
}
