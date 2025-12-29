import { Footer, Navbar } from '@/components'

export default function ColorNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar className="bg-body2" />
      {children}
      <Footer />
    </>
  )
}
