import { Jost, Georama, Farsan, Geologica } from "next/font/google";

export const jost = Jost({ 
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-jost', 
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900']
})

export const georama = Georama({
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-georama',
  weight: ['400', '500', '600', '700'] 
})

export const farsan = Farsan({
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-farsan',
  weight: ['400']
})

export const geologica = Geologica({
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-geologica',
  weight: ['400']
})
