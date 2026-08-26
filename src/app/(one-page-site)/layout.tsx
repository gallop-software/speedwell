import { Footer } from '@/components/footer'
import { Navbar2 } from '@/components/navbar-2'

export default function OnePageSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar2 />
      {children}
      <Footer />
    </>
  )
}
