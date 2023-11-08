import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalContext'

export default function HeaderHamburguerMobileButton() {
  const { activeMobileMenu, setActiveMobileMenu } = useContext(GlobalContext)
  return (
    <button
      className={`
      border-none flex flex-col gap-2 relative z-10
      lg:hidden
      `}
      onClick={() => {
        setActiveMobileMenu(!activeMobileMenu)
      }}
    >
      <span
        className={`block relative bg-[#1BC6B4] w-8 h-1 transition-all delay-150
      ${activeMobileMenu ? 'rotate-45 top-[10px]' : null}`}
      ></span>
      <span
        className={`
      block relative bg-[#1BC6B4] w-8 h-1 transition-all delay-150
    ${activeMobileMenu ? 'opacity-0' : null}
    `}
      ></span>
      <span
        className={`block relative bg-[#1BC6B4] w-8 h-1 transition-all delay-150
      ${activeMobileMenu ? '-rotate-45 top-[-13.3px]' : null}`}
      ></span>
    </button>
  )
}
