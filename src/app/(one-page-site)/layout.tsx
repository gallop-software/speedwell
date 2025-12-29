import { Footer, Navbar2 } from '@/components'

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
