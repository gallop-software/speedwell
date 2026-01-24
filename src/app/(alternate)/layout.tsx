import { Footer2 } from '@/components/footer-2'
import { Navbar3 } from '@/components/navbar-3'

export default function AlternateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar3 />
      {children}
      <Footer2 />
    </>
  )
}
