import AboutMeSection from '../../components/AboutMeSection'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import ProjectsSection from '../../components/ProjectsSection'

export default function Index() {
  return (
    <main className='grid grid-cols-1 laptop:grid-cols-10'>
      <div className='laptop:col-span-1'>
        <Navbar />
      </div>
      <div className='laptop:col-span-9'>
        <Header />
        <ProjectsSection />
        <AboutMeSection />
        <Footer />
      </div>
    </main>
  )
}
