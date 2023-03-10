import ProjectCard, { ProjectCardProps } from '../ProjectCard'
import ScrollDownToUp from '../Transitions/ScrollDownToUp/ScrollDownToUp'
import TextParallaxScroll from '../Transitions/TextParallaxScroll/TextParallaxScroll'

const projectCards: ProjectCardProps[] = [
  {
    title: 'Project title here',
    text: 'Lorem ipsum dolor sit amet consectetur. Morbi vulputate luctus velit morbi. Nunc faucibus',
    alt: '',
    href: '',
    src: 'https://www.michaelpage.com.ph/sites/michaelpage.com.ph/files/2022-06/Software%20Developer.jpg',
    delay: 0.2,
    duration: 1
  },
  {
    title: 'Project title here',
    text: 'Lorem ipsum dolor sit amet consectetur. Morbi vulputate luctus velit morbi. Nunc faucibus mauris porttitor a integer in adipiscing. Quam tincidunt vel congue eget.',
    alt: '',
    href: '',
    src: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/05/spotify_ferramenta_musicas_mais_ouvidas__t9exrb-1210x544.jpg',
    delay: 0.4,
    duration: 1
  },
  {
    title: 'Project title here',
    text: 'Lorem ipsum dolor sit amet consectetur. Morbi vulputate luctus velit morbi. Nunc faucibus mQuam tincidunt vel congue eget.',
    alt: '',
    href: '',
    src: 'https://mlabs-wordpress-site.s3.amazonaws.com/wp-content/uploads/2017/12/instagram-1.jpg',
    delay: 0.6,
    duration: 1
  },
]

export default function ProjectsSection() {
  return (
    <>
      <TextParallaxScroll baseVelocity={-5} text='PROJETOS' color='text-light-blue' />
      <TextParallaxScroll baseVelocity={5} text='PROJETOS' color='text-primary-blue' />
      <div className='mb-32 tablet:mb-0 container mx-auto h-auto laptop:h-screen flex flex-col items-center justify-center'>
        <div className='container mx-auto flex flex-col tablet:flex-row justify-between items-start mb-20 mt-24 laptop:mt-0'>
          <p className='max-w-[471px] mb-16 tablet:mb-0'>Lorem ipsum dolor sit amet consectetur. Vitae amet id maecenas pellentesque adipiscing nulla rhoncus a.</p>
          <button>Ver todos os repositórios</button>
        </div>
        <div className='grid grid-cols-1 laptop:grid-cols-3 gap-8'>
          {projectCards.map(project => (
            <ScrollDownToUp key={project.title} duration={project.duration} delay={project.delay}>
              <ProjectCard
                src={project.src}
                alt={''}
                title={project.title}
                text={project.text}
                href={''}
              />
            </ScrollDownToUp>
          ))}
        </div>
      </div>
    </>
  )
}
