import './App.css';
import { useState } from 'react';
import { BrowserRouter} from '../../node_modules/react-router-dom/index';
import AppRouter from './Superhero/AppRouter';
import Superheroes from '../pages/Superheroes';

const App = () => {
  const [heroes, setHeroes] = useState([
    
    // {id:1,
    //   nickname: 'Superman',
    //   realName: 'Klark Kent',
    //   superpowers: 'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
    //   catchPhrase: "“Look, up in the sky, it's a bird, it's a plane, it's Superman!”"
    //   originDescription: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…",
    // },
    
  ]) 
  const [isLoading, setLoading] = useState(true);

  return (
    
    <BrowserRouter>
    
  
      {/* <AppRouter /> */}
      <Superheroes />
   
    </BrowserRouter>
  );
}

export default App;