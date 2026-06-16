import Header from "./components/Header"
import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"
import NewsList from "./components/NewsList"
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Sidebar></Sidebar>
        <NewsList></NewsList>
      </main>
    </>
  )
}

export default App
