import { Footer, Navbar } from '@/components'

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
