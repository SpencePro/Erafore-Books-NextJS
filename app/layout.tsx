import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './ui/header/header'
import { Footer } from './ui/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Erafore Books',
    default: 'Erafore Books',
  },
  description: 'The official website for Erafore Books LLC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      style={ { minHeight: '100vh' } }
    >
      <body
        className={ inter.className}
        style={{
          display: 'flex'
          , flexDirection: 'column'
          , minHeight: '100vh'
          , justifyContent: 'space-between'
          , width: 'fit-content'
        }}
      >
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
