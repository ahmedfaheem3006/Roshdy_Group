import Navbar from "./Components/Navbar"
import Features from "./Sections/Features"
import Slider from "./Sections/Slider"
import Newsletter from "./Sections/Subscribe"


function App() {

  return (
    <>
     <main className="bg-white dark:bg-black transition-colors duration-500">
      <Navbar />
      <Slider />
      <Features />
      <Newsletter />
     </main> 
    </>
  )
}

export default App
