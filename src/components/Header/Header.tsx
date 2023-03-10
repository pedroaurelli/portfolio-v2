import DownToUp from '../Transitions/DownToUp/DownToUp'
import LeftToRight from '../Transitions/LeftToRight/LeftToRight'

export default function Header() {
  return (
    <>
      <header className='container h-screen mx-auto flex items-center justify-center'>
        <div className='tablet:flex tablet:max-w-4xl space-x-[40px]'>
          <div className='flex flex-col w-full'>
            <DownToUp>
              <h1>Pedro Aureliano</h1>
            </DownToUp>
            <DownToUp delay={0.3}>
              <h2 className='mt-3'>Full Stack Developer.</h2>
            </DownToUp>
            <DownToUp delay={0.5}>
              <h3 className='mt-16'>
                Lorem ipsum dolor sit amet consectetur. Ipsum non in elementum arcu
                in sed aliquet vel. Lorem ipsum dolor sit amet consectetur. Ipsum non
                in elementum arcu in sed aliquet vel.
              </h3>
            </DownToUp>
          </div>
          <div className='hidden tablet:block'>
            <LeftToRight>
              <p className='text-[128px] font-medium text-center'>{'</>'}</p>
            </LeftToRight>
          </div>
        </div>
      </header>
    </>
  )
}
