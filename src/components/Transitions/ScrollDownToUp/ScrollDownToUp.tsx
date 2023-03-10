import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type ScrollDownToUpProps = {
  children: ReactNode
  duration?: number
  delay?: number
}

export default function ScrollDownToUp(props: ScrollDownToUpProps) {
  const { children, duration, delay } = props

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
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
