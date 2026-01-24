import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
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
