import { Footer, Navbar } from '@/components'

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
