import type { Metadata } from 'next'
import { Inter, Grenze_Gotisch } from 'next/font/google'
import './ui/global.css'
import { GLOBALCONTEXTPROVIDER } from './providers/GlobalContext'
import Header from './ui/Header/Header'
import Footer from './ui/Footer/Footer'
const grenze = Grenze_Gotisch({
  weight: ['900'],
  subsets: ['latin'],
  variable: '--font-grenze',
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'killer tattoo',
  description:
    'O estúdio killer tattoo está localizado em Belém do Pará e oferece os serviços de tatuagem e body-piercing através de artistas talentosos e experientes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GLOBALCONTEXTPROVIDER>
      <html lang='pt-br'>
        <body className={`${inter.className} ${grenze.variable}`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </GLOBALCONTEXTPROVIDER>
  )
}
