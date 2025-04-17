import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./components/sections/FeatureCards"
import Hero from "./components/sections/Hero"
import ShowcaseSections from "./components/sections/ShowcaseSections"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ShowcaseSections/>
      <LogoSection/>
      <FeatureCards/>
    </div>
  )
}

export default App
