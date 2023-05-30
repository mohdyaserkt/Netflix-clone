

import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Rowpost from './components/Rowpost/Rowpost'
import { ActionMovies, original } from './components/Rowpost/url'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Rowpost title='Netflix Orginals' url={original} />
      <Rowpost title='Actions' issmall url={ActionMovies} />
    </>
  )
}

export default App
