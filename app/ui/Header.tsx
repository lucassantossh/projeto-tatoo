'use client'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '@/app/providers/GlobalContext'
import HeaderNavList from './HeaderNavList'
import HeaderHamburguerMobileButton from './HeaderHamburguerMobileButton'
// import ThemeSwitcher from './ThemeSwitcher'
export default function Header() {
  const { activeMobileMenu, colorHeader, setColorHeader } =
    useContext(GlobalContext)

  const ChangeBackground = () => {
    if (window.scrollY > 0) {
      setColorHeader(true)
    } else {
      setColorHeader(false)
    }
  }

  useEffect(() => {
    fixedScroll()
  }, [activeMobileMenu])

  const fixedScroll = () => {
    const body = document.querySelector('body')
    if (activeMobileMenu === true) {
      body?.classList.add('fixed-scroll')
    } else {
      body?.classList.remove('fixed-scroll')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', ChangeBackground)
  }, [colorHeader, setColorHeader])

  return (
    <header
      className={`
      flex justify-between items-center fixed top-0 left-0 w-full p-4
      sm:px-8
      lg:px-32
      xl:px-48
      ${colorHeader ? 'bg-slate-950' : 'bg-transparent'}
    `}
    >
      <h2
        className={`
        font-gruppo z-10 uppercase
      ${colorHeader ? 'text-white' : 'text-red-600'}

      `}
      >
        tatoo
      </h2>
      <HeaderNavList />
      <HeaderHamburguerMobileButton />
    </header>
  )
}
