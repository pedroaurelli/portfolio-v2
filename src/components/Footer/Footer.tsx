import { ReactNode } from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons'

type socialMediasType = {
  src: string
  icon: ReactNode
}

export default function Footer() {

  const socialMedias: socialMediasType[] = [
    {
      src: 'https://www.instagram.com/pedroaurelli/',
      icon: <FaInstagram/>
    },
    {
      src: 'https://www.linkedin.com/in/pedro-aureliano/',
      icon: <FaLinkedin/>
    },
    {
      src: 'https://github.com/pedroaurelli',
      icon: <FaGithub/>
    }
  ]

  return (
    <footer className='min-h-[496px] w-full bg-dark-blue flex justify-center items-center'>
      <div className='container mx-auto flex flex-col items-center'>
        <h2 className='text-white text-3xl tablet:text-5xl laptop:text-8xl mb-8'>Conecte-se comigo!</h2>
        <div className='flex flex-row laptop:gap-4 items-center'>
          <IconContext.Provider value={{ style: { fill: '#fff' }, size: '5rem' }}>
            {socialMedias.map(item => (
              <a key={item.src} href={item.src} target='_blank' rel="noreferrer">
                <button className='p-4 hover:bg-primary-blue rounded-full transition-all'>
                  <div>
                    {item.icon}
                  </div>
                </button>
              </a>
            ))}
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  )
}
