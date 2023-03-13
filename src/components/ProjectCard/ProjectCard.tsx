import Button from '../Button'

export type ProjectCardProps = {
  src: string
  title: string
  text: string
  href: string
  duration?: number
  delay?: number
}

export default function ProjectCard(props: ProjectCardProps) {
  const { src, title, text, href } = props

  return (
    <div className='group/button flex flex-col max-w-[480px] h-auto bg-gray rounded-[16px]'>
      <div className='h-[230px] overflow-clip rounded-t-2xl'>
        <img className='transition duration-500 group-hover/button:scale-105 object-cover' src={src} alt={title} />
      </div>
      <div className='flex flex-col items-start min-h-[300px] max-h-[342px] p-8'>
        <h2>{title}</h2>
        <p className='pt-4'>{text}</p>
        <div className='flex-grow'></div>
        <Button href={href} text='Visitar projeto' blank />
      </div>
    </div>
  )
}
