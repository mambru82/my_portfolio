import React, {useState} from 'react';
import './assets/css/index.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact'

function App() {
  const [categories] = useState([
      {
          name: "about",
          description: "a short description of me"
      },
      { name: "work", description: "works in progress"},
      { name: "contact", description: "contact info"}
  ]) 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
      <main>
        <About></About>
        <Work></Work>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
