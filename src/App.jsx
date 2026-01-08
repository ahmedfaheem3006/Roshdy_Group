import Navbar from "./Components/Navbar"
import Features from "./Sections/Features"
import Slider from "./Sections/Slider"
import Newsletter from "./Sections/Subscribe"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Features />
      {/* <Newsletter /> */}
      <Footer />
    </>
  )
}

export default App