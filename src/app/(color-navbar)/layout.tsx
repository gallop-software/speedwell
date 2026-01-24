import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

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
