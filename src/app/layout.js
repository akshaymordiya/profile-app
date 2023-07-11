import './globals.css'
import { Jost } from 'next/font/google'

const jost = Jost({ 
  subsets: ['latin'],
  style: ['normal', 'italic'], 
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <p>This is actually from root layout</p>
        {children}
      </body>
    </html>
  )
}
