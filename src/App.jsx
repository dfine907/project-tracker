import Pet from './components/Pet'
import testPic from './assets/no-projects.png'
import ProjectsSidebar from './components/ProjectsSidebar'

function App() {
  return (
    <>
      <main>
        <Pet animal="Bunny" name="Dalsie" image={testPic} />

        <ProjectsSidebar />
      </main>
    </>
  )
}

export default App
