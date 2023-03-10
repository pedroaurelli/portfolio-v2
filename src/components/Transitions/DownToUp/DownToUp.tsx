import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type DownToUpProps = {
  children: ReactNode
  duration?: number
  delay?: number
}

export default function DownToUp(props: DownToUpProps) {
  const { children, duration, delay } = props

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration || 0.9,
        delay: delay || 0.2,
        ease: [0, 0.8, 0.9, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
