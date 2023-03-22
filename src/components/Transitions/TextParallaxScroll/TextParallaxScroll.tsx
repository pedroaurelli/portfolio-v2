import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from 'framer-motion'
import { wrap } from 'framer-motion'

interface ParallaxProps {
  text: string
  color?: string
  baseVelocity: number
}

function ParallaxText({ color, text, baseVelocity }: ParallaxProps) {
  const baseX = useMotionValue(50)
  const { scrollY } = useScroll()
  const velocityFactor = useTransform(scrollY, [0, 1000], [6, 0])

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000)

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div style={{ x }} className='-z-20'>
        <h2 className={'bigH2'}>
          <span className={`mr-3 ${color}`}>{text}</span>
          <span className={`mr-3 ${color}`}>{text}</span>
          <span className={`mr-3 ${color}`}>{text}</span>
          <span className={`mr-3 ${color}`}>{text}</span>
          <span className={`mr-3 ${color}`}>{text}</span>
          <span className={`mr-3 ${color}`}>{text}</span>
          <span className={`mr-3 ${color}`}>{text}</span>
          <span className={`mr-3 ${color}`}>{text}</span>
        </h2>
      </motion.div>
    </div>
  )
}

export default function TextParallaxScroll(props: { color?: string, text: string, baseVelocity: number }) {
  return (
    <section>
      <ParallaxText baseVelocity={props.baseVelocity} text={props.text} color={props.color}/>
    </section>
  )
}
