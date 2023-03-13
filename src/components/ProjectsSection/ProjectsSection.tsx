import ProjectCard, { ProjectCardProps } from '../ProjectCard'
import LeftToRightView from '../Transitions/LeftToRightView/LeftToRightView'
import RightToLeftView from '../Transitions/RightToLeftView/RightToLeftView'
import ScrollDownToUp from '../Transitions/ScrollDownToUp/ScrollDownToUp'
import TextParallaxScroll from '../Transitions/TextParallaxScroll/TextParallaxScroll'
import ArrowRight from '../icons/ArrowRight/ArrowRight'

const projectCards: ProjectCardProps[] = [
  {
    title: 'Pupilla',
    text: 'Plataforma de venda de cursos e produção de conteúdo para o publico médico, apoiado pelo Grupo Fleury.',
    href: 'https://github.com/pedroaurelli/pupilla-README',
    src: './images/pupilla-thumb.png',
    delay: 0.2,
    duration: 1
  },
  {
    title: 'Spotify top artists',
    text: 'Quer descobrir quais artistas você mais ouviu no mês? Faça o teste agora!',
    href: 'https://github.com/pedroaurelli/spotify-most-listened-artists',
    src: './images/spotify-thumb.png',
    delay: 0.4,
    duration: 1
  },
  {
    title: 'Instagram scraper',
    text: 'Web Scraper em NodeJs para visualizar quais seguidores não te segue de volta no Instagram.',
    href: 'https://github.com/pedroaurelli/instagram-followback-scraper',
    src: './images/instagram-thumb.png',
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
          <RightToLeftView>
            <p className='max-w-[471px] mb-16 tablet:mb-0'>
              Aqui estão os meus principais cases, projetos os quais eu atuei no desenvolvimento, prototipação e gestão do produto.
            </p>
          </RightToLeftView>
          <LeftToRightView>
            <a href='https://github.com/pedroaurelli?tab=repositories' target='_blank' rel="noreferrer">
              <button className="font-bold py-2 px-4 inline-flex items-center gap-3 rounded-2xl group">
                <span>Ver todos os repositórios</span>
                <span className='group-hover:translate-x-2 transition-hover'><ArrowRight /></span>
              </button>
            </a>
          </LeftToRightView>
        </div>
        <div className='grid grid-cols-1 laptop:grid-cols-3 gap-8'>
          {projectCards.map(project => (
            <ScrollDownToUp key={project.title} duration={project.duration} delay={project.delay}>
              <ProjectCard
                src={project.src}
                title={project.title}
                text={project.text}
                href={project.href}
              />
            </ScrollDownToUp>
          ))}
        </div>
      </div>
    </>
  )
}
