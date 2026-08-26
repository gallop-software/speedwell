import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function HeroLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar hero={true} />
      {children}
      <Footer />
    </>
  )
}
