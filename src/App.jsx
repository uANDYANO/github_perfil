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
          <img className='searchIcon' src="https://raw.githubusercontent.com/uANDYANO/github_perfil/3f25196e15975683c0eea0f4d4e695efb83ca691/src/assets/search-svgrepo-com.svg" alt="" />
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
