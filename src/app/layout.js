import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Plasma',
  description: 'All Round Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <div className="nav">
            <Link href="/"><img src="/img/plasma.jpg" alt="Logo" className="logo" /></Link>
            <ul className="nav-links">
              <Link href="/About">ABOUT</Link>
              <Link href="/Store">STORE</Link>
              <Link href="/Services">SERVICES</Link>
              <Link href="/Contact">CONTACT</Link>
              <Link href="/Join">JOIN</Link>
            </ul>
            <img src="/img/hex.png" alt="Hamburger Menu" className="hamburger-menu" />
          </div>
          <div className="nav-lines">
            <div></div>
            <div></div>
          </div>
        </nav>
        <div className='temp'></div>
        {children}
      </body>
    </html>
  )
}
