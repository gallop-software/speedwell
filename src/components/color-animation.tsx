'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ColorAnimationProps {
  children: ReactNode
  className?: string
}

export function ColorAnimation({
  children,
  className = '',
}: ColorAnimationProps) {
  return (
    <motion.span
      className={`bg-linear-to-r from-[#307dff] via-[#3cc39d] to-[#3ecf8e] bg-size-[200%_200%] bg-clip-text text-transparent drop-shadow-lg ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.span>
  )
}
