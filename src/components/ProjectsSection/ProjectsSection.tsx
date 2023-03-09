import ProjectCard from '../ProjectCard'

export default function ProjectsSection() {

  return (
    <>
      <h2 className='bigH2 overflow-hidden text-light-blue'>
          PROJETOS PROJETOS PROJETOS PROJETOS PROJETOS PROJETOS PROJETOS
      </h2>
      <h2 className='bigH2 overflow-hidden'>
          PROJETOS PROJETOS PROJETOS PROJETOS PROJETOS PROJETOS PROJETOS
      </h2>
      <div className='mb-32 tablet:mb-0 container mx-auto h-auto laptop:h-screen flex flex-col items-center justify-center'>
        <div className='container mx-auto flex flex-col tablet:flex-row justify-between items-start mb-20 mt-24 laptop:mt-0'>
          <p className='max-w-[471px] mb-16 tablet:mb-0'>Lorem ipsum dolor sit amet consectetur. Vitae amet id maecenas pellentesque adipiscing nulla rhoncus a.</p>
          <button>Ver todos os repositórios</button>
        </div>
        <div className='grid grid-cols-1 laptop:grid-cols-3 gap-8'>
          <ProjectCard
            src={'https://www.michaelpage.com.ph/sites/michaelpage.com.ph/files/2022-06/Software%20Developer.jpg'}
            alt={''}
            title={'Project title here'}
            text={'Lorem ipsum dolor sit amet consectetur. Morbi vulputate luctus velit morbi. Nunc faucibus'}
            href={''}
          />
          <ProjectCard
            src={'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/05/spotify_ferramenta_musicas_mais_ouvidas__t9exrb-1210x544.jpg'}
            alt={''}
            title={'Project title here'}
            text={'Lorem ipsum dolor sit amet consectetur. Morbi vulputate luctus velit morbi. Nunc faucibus mauris porttitor a integer in adipiscing. Quam tincidunt vel congue eget.'}
            href={''}
          />
          <ProjectCard
            src={'https://mlabs-wordpress-site.s3.amazonaws.com/wp-content/uploads/2017/12/instagram-1.jpg'}
            alt={''}
            title={'Project title here'}
            text={'Lorem ipsum dolor sit amet consectetur. Morbi vulputate luctus velit morbi. Nunc faucibus mQuam tincidunt vel congue eget.'}
            href={''}
          />
        </div>
      </div>
    </>
  )
}
