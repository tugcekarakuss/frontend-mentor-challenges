import './App.css'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Creations from './components/Creations'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <main className='max-w-6xl mx-auto'>
        <AboutUs />
        <Creations />
      </main>
      <Footer />
    </>
  )
}

export default App