'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

interface IGlobalContextProps {
  activeMobileMenu: boolean | null
  setActiveMobileMenu: Dispatch<SetStateAction<boolean>>
  scrolledHeader: boolean | null
  setScrolledHeader: Dispatch<SetStateAction<boolean>>
  colorHeader: boolean | null
  setColorHeader: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<IGlobalContextProps>({
  activeMobileMenu: false,
  setActiveMobileMenu: (): void => {},
  scrolledHeader: false,
  setScrolledHeader: (): void => {},
  colorHeader: false,
  setColorHeader: (): void => {},
})

export const GLOBALCONTEXTPROVIDER = ({
  children,
}: {
  children: ReactNode
}) => {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false)
  const [scrolledHeader, setScrolledHeader] = useState<boolean>(false)
  const [colorHeader, setColorHeader] = useState<boolean>(false)
  return (
    <GlobalContext.Provider
      value={{
        activeMobileMenu,
        setActiveMobileMenu,
        scrolledHeader,
        setScrolledHeader,
        colorHeader,
        setColorHeader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
