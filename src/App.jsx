import Navbar from "./Components/Navbar"
import Features from "./Sections/Features"
import Slider from "./Sections/Slider"


function App() {

  return (
    <>
     <main className="bg-white dark:bg-black transition-colors duration-500">
      <Navbar />
      <Slider />
      <Features />
     </main> 
    </>
  )
}

export default App
