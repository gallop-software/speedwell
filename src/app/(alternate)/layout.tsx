import { Footer, Navbar3 } from '@/components'

export default function AlternateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar3 />
      {children}
      <Footer />
    </>
  )
}
