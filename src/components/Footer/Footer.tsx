import React from 'react'
import InstagramLogo from '../icons/InstagramLogo'
import LinkedInLogo from '../icons/LinkedInLogo'
import GitHubLogo from '../icons/GitHubLogo'

export default function Footer() {
  return (
    <footer className='min-h-[496px] w-full bg-dark-blue flex justify-center items-center'>
      <div className='container mx-auto flex flex-col items-center'>
        <h2 className='text-white text-3xl tablet:text-5xl laptop:text-8xl mb-8'>Conecte-se comigo!</h2>
        <div className='flex flex-row gap-8 items-center'>
          <InstagramLogo />
          <LinkedInLogo />
          <GitHubLogo />
        </div>
      </div>
    </footer>
  )
}
