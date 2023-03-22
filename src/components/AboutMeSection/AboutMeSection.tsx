import Button from '../Button/Button'
import RightToLeftView from '../Transitions/RightToLeftView/RightToLeftView'
import ScrollDownToUp from '../Transitions/ScrollDownToUp/ScrollDownToUp'
import StackLanguages from '../icons/StackLanguages/StackLanguages'

export default function AboutMeSection() {
  return (
    <ScrollDownToUp>
      <div id='contato' className='laptop:container h-full laptop:h-screen mx-auto flex items-center justify-center'>
        <div className=' bg-light-blue w-full min-h-[800px] laptop:rounded-2xl p-4 tablet:p-16 flex flex-col items-center justify-center'>
          <div className='flex flex-col-reverse tablet:flex-row  items-center justify-center gap-16 tablet:gap-32'>
            <div className='flex flex-col'>
              <ScrollDownToUp delay={0.3}>
                <h2 className='text-[40px] mb-16'>Olá! Meu nome é Pedro!</h2>
              </ScrollDownToUp>
              <ScrollDownToUp delay={0.5}>
                <p className='max-w-[523px]'>
                  Estou na área de desenvolvimento de software desde janeiro de 2022,
                  atuo como <a href='https://blog.rocketseat.com.br/do-back-ao-mobile-de-onde-surgiu-a-programacao-fullstack/#:~:text=E%20%C3%A9%20aqui%20que%20entra,para%20garantir%20estabilidade%20no%20sistema.' target='_blank' rel="noreferrer">
                    <b>Desenvolvedor Full Stack Junior</b></a>, gosto de trabalhar com programação web, porém sempre aberto para conhecer e aprender novas stacks.

                </p>
              </ScrollDownToUp>
              <br/>
              <ScrollDownToUp delay={0.6}>
                <p className='max-w-[523px]'>
                  Minha jornada no mundo de TI se inicia após eu concluir o ensino médio em 2020, comecei a estudar programação
                  durante a pandemia do Covid-19, em 2021. Hoje cursando Análise e Desenvolvimento de Sistemas na Universidade
                  São Judas Tadeu (USJT) em São Paulo - SP. Além de novos conhecimentos que acabo adquirindo no trabalho, dedico
                  meu tempo de modo autodita para estudar.
                </p>
              </ScrollDownToUp>
              <br />
              <ScrollDownToUp delay={0.65}>
                <StackLanguages />
              </ScrollDownToUp>
            </div>
            <RightToLeftView>
              <div className='flex flex-col items-center tablet:gap-12'>
                <img
                  src='https://github.com/pedroaurelli.png'
                  alt='Pedro Aureliano - foto de perfil'
                  className='rounded-full w-[77px] tablet:w-[180px] laptop:w-[260px]'
                />
                <Button href={'./curriculo.pdf'} blank text='Visualizar CV' className='hidden tablet:block'/>
              </div>
            </RightToLeftView>
            <div className='block tablet:hidden order-first'>
              <Button href={'./curriculo.pdf'} text='Visualizar CV' blank/>
            </div>
          </div>
        </div>
      </div>
    </ScrollDownToUp>
  )
}
