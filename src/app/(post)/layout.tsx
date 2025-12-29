import { Footer, Navbar } from '@/components'
import { GradientBackground } from '@/components/gradient'

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <GradientBackground />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
