import DownToUp from '../Transitions/DownToUp/DownToUp'
import LeftToRight from '../Transitions/LeftToRight/LeftToRight'

export default function Header() {
  return (
    <>
      <header id='home' className='container h-[87vh] mx-auto flex items-center justify-center'>
        <div className='tablet:flex tablet:max-w-4xl space-x-[40px] items-center justify-center'>
          <div className='flex flex-col w-full'>
            <DownToUp>
              <h1>Pedro Aureliano</h1>
            </DownToUp>
            <DownToUp delay={0.3}>
              <h2 className='mt-3'>Full Stack Developer.</h2>
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
