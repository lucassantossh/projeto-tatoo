import { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '../../providers/GlobalContext'

interface INavProps {
  id: number
  path: string
  label: string
}
export default function HeaderNavList() {
  const { activeMobileMenu, setActiveMobileMenu, colorHeader } =
    useContext(GlobalContext)
  const navProps: Array<INavProps> = [
    { id: 1, path: '/', label: 'início' },
    { id: 2, path: '#about', label: 'sobre' },
    { id: 3, path: '#services', label: 'serviços' },
    { id: 4, path: '#contact', label: 'contato' },
  ]
  return (
    <nav
      className={`
    h-screen w-full fixed top-0 bg-[#202529] flex flex-col items-center pt-36 text-center
    ${activeMobileMenu ? 'opacity-100 right-0' : 'opacity-0 right-full'}
    lg:h-fit lg:w-fit lg:flex lg:static lg:pt-0 lg:opacity-100 lg:bg-transparent lg:backdrop-blur-none`}
    >
      <ul className='lg:flex lg:gap-4'>
        {navProps.map((link) => (
          <li
            key={link.id}
            className={`pb-8 lg:pb-0
            ${colorHeader ? 'text-white' : 'bg-transparent'}`}
          >
            <Link
              className='capitalize font-bold text-4xl text-[#A1B4C4]
              lg:font-normal lg:text-base
            '
              onClick={() => setActiveMobileMenu(false)}
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
