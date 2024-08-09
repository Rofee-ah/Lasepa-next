import AboutUs from '@/component/AboutUs'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import HeroSection from '@/component/HeroSection'
import Newsletter from '@/component/Newsletter'
import Platform from '@/component/Platform'
import Questions from '@/component/Questions'
import Values from '@/component/Values'


const HomePage= () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <Platform/>
    <Values/>
    <Questions/>
    <Newsletter/>
    <Footer/>
    </>
    
  )
}

export default HomePage