import { useMediaQuery } from 'react-responsive'
import {words} from '../../constants/index'
import Button from '../Button'
import HeroExperience from '../HeroModels/HeroExperience'


const Hero = () => {

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
   
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background"/> 
      </div>
      <div className="hero-layout">
         {/* Left part of the hero section */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                    <img
                     src={word.imgPath}
                     alt={word.text}
                     className="xl:size-12 md:size-10 size-7 md:pb-2 p-1 rounded-full bg-white-50"
                    />
                    <span>{word.text}</span>
                    </span>
                    ))}
                  </span> 
                </span>
              </h1> 
              <h1>into Real Projects</h1> 
              <h1>Shaping Designs</h1> 
            </div>
              <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                Hi, I'm Hemant, a developer based in India with passion for code. 
              </p>
              <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work"/>
          </div> 
        </header> 
         
        {/* right part for the 3d-model */}
        <figure>
          <div className='hero-3d-layout'>
            <HeroExperience/>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Hero
