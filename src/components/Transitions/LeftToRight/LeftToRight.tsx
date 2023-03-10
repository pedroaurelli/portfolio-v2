import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type LeftToRightProps = {
  children: ReactNode
  duration?: number
  delay?: number
}

export default function LeftToRight(props: LeftToRightProps) {
  const { children, duration, delay } = props

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: duration || 0.9,
        delay: delay || 0.2,
        ease: [0, 0.9, 0.9, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
