import Button from '../Button/Button'
import DoubleArrowDown from '../icons/DoubleArrowDown'

export default function AboutMeSection() {
  return (
    <div className='laptop:container h-full tablet:h-screen mx-auto flex items-center justify-center'>
      <div className='relative bg-light-blue w-full min-h-[800px] laptop:rounded-2xl p-4 tablet:p-16 flex flex-col items-center justify-center'>
        <div className='flex flex-col-reverse tablet:flex-row  items-center justify-center gap-16 tablet:gap-32'>
          <div className='flex flex-col'>
            <h2 className='text-[40px] mb-16'>Lorem ipsum sit dolor</h2>
            <p className='max-w-[523px]'>
              Lorem ipsum dolor sit amet consectetur. Diam id pulvinar lorem vel lorem id libero nibh lacus.
              Mi quam id ullamcorper nisi pharetra sed enim tincidunt. Lorem ipsum dolor sit amet consectetur.
              Diam id pulvinar lorem vel lorem id libero nibh lacus. Mi quam id ullamcorper nisi pharetra sed enim tincidunt.
            </p>
            <br/>
            <p className='max-w-[523px]'>
              Lorem ipsum dolor sit amet consectetur. Diam id pulvinar lorem vel lorem id libero nibh lacus.
              Mi quam id ullamcorper nisi pharetra sed enim tincidunt. Lorem ipsum dolor sit amet consectetur.
              Diam id pulvinar lorem vel lorem id libero nibh lacus. Mi quam id ullamcorper nisi pharetra sed enim tincidunt.
            </p>
          </div>
          <div className='flex flex-col items-center tablet:gap-12'>
            <img src='https://github.com/pedroaurelli.png' className='rounded-full w-[77px] tablet:w-[180px] laptop:w-[260px]' />
            <Button href={''} text='Call to action' className='hidden tablet:block'/>
          </div>
          <div className='block tablet:hidden order-first'>
            <Button href={''} text='Call to action'/>
          </div>
        </div>
        <div className='mt-16 tablet:absolute tablet:bottom-16'>
          <DoubleArrowDown />
        </div>
      </div>
    </div>
  )
}
