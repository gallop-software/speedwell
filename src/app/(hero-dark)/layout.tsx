import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function HeroDarkLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar
        hero={true}
        dark={true}
      />
      {children}
      <Footer />
    </>
  )
}
