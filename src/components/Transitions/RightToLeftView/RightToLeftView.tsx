import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type RightToLeftViewProps = {
  children: ReactNode
  duration?: number
  delay?: number
}

export default function RightToLeftView(props: RightToLeftViewProps) {
  const { children, duration, delay } = props

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: duration || 0.8,
        delay: delay || 0.2,
        ease: [0, 0.8, 1, 1.00]
      }}
    >
      {children}
    </motion.div>
  )
}
