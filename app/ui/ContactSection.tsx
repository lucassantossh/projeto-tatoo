import React from 'react'

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='section'
    >
      <h2 className='section-title'>contact us</h2>
      <div className='flex flex-col justify-between lg:flex-row gap-8'>
        <div className='lg:w-1/2 lg:p-4 border'>
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
          <h3>ou descreva sua idéia</h3>
          <p>escreva sua idéia </p>
        </div>

        <form className='lg:p-4 flex flex-col lg:w-1/2'>
          <h2 className='mb-8'>Conte-nos sua idéia</h2>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='floating-name'
              id='floating-name'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating-name'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              seu nome
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='floating-email'
              id='floating-email'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating-email'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              seu email
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <textarea
              name='floating-idea'
              id='floating-idea'
              cols={30}
              rows={10}
              placeholder=' '
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            ></textarea>
            <label
              htmlFor='floating-idea'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Sua ideia
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}
