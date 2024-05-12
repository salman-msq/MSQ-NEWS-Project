import { useState } from 'react'
import NavBar from './Components/NavBar'
import NewsBoard from './Components/NewsBoard'
import Footer from './Components/Footer';
import About from './Components/About';

const App = () => {
  //To store the category type of NEWS
  const [category, setCategory] = useState('general');

  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
      {category === 'general' ? <About /> : ""}
      <Footer setCategory={setCategory} />
    </div>
  )
}

export default App
