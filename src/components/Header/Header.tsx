import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <div className='container h-screen mx-auto flex items-center justify-center'>
        <div className='tablet:flex tablet:max-w-4xl space-x-[40px]'>
          <div className='flex flex-col w-full'>
            <h1>Pedro Aureliano</h1>
            <h2 className='mt-3'>Full Stack Developer.</h2>
            <h3 className='mt-16'>
                Lorem ipsum dolor sit amet consectetur. Ipsum non in elementum arcu
                in sed aliquet vel. Lorem ipsum dolor sit amet consectetur. Ipsum non
                in elementum arcu in sed aliquet vel.
            </h3>
          </div>
          <div className='hidden tablet:block'>
            <p className='text-[128px] font-medium text-center'>{'</>'}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
