import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import Nav from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <div className="App">

      <Nav/>

        <div className='container'>

          <div>
        
            <div className='name'>

              <h1>{t("nombre")}</h1>

            </div>
          
            <div className='information'>

              <p>{t("descripcion1")}</p>
              <p>{t("descripcion2")}</p>

            </div>
          
            <button className='button' onClick={() => setCount((count) => count + 1)}>
            
              {t("boton1")}

            </button>

            <div className='count'>

              <p>{t("boton2")} {count}</p>

            </div>

          </div>
        
          <div className='photo'>

            <img className="picture-me" src="./Onyx.webp" alt="perfil"></img>

          </div>

        </div>

        <div className='tecnologies'>

          <p>{t("tecnologias")}</p>

          <img className='tech' src="./tech.png" alt="perfil" />
      
        </div>
      
  </div>
 
  )
}
export default App