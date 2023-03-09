import Button from '../Button'

type ProjectCardProps = {
  src: string
  alt: string
  title: string
  text: string
  href: string
}

export default function ProjectCard(props: ProjectCardProps) {
  const { src, alt, title, text, href } = props

  return (
    <div className='group/button flex flex-col max-w-[480px] h-auto bg-gray rounded-[16px]'>
      <div className='h-[230px] overflow-clip rounded-t-2xl'>
        <img className='transition duration-500 group-hover/button:scale-105 object-cover h-full' src={src} alt={alt} />
      </div>
      <div className='flex flex-col items-start min-h-[300px] max-h-[342px] p-8'>
        <h2>{title}</h2>
        <p className='pt-4'>{text}</p>
        <div className='flex-grow'></div>
        <Button href={href} text='Call to action' />
      </div>
    </div>
  )
}
