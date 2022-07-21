import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';


function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <div className="App">
      <div className='picture'>
        <img className="picture-me" src="./img/me.jpeg" alt="perfil"></img>
      </div>
      <div className='name'>
        <h1>{t("nombre")}</h1>
      </div>
      <div className='info'>
        <p>{t("descripcion1")}</p>
        <p>{t("descripcion2")}</p>
      </div>
      <div className='button'>
        <div className="btn-group">
          <button onClick={() => setCount((count) => count + 1)}>{t("boton1")} </button>
        </div>
        <div>
          <p>{t("boton2")} {count}</p>
        </div>
      </div>
      <div className='tecno-manage'>
        <p>{t("tecnologias")}</p>
        <img className="picture-red" src="./img/redes.png" alt="redes"></img>
      </div>
    </div>
  )
}
export default App