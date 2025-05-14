import { useState } from 'react'

import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className='headerContainer'>
        <input className='headerInput' placeholder='Nome do usuário' type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
        <button className='searchButton'>
          <img className='searchIcon' src="src/assets/search-svgrepo-com.svg" alt="" />
        </button>
      </div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>toggle form</button> */}
    </>
  )
}

export default App
