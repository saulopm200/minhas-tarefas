import React from 'react'
import { Provider } from 'react-redux'
import ListaContato from './Contatos/Formulario/LIstaContato'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ListaContato />
    </Provider>
  )
}

export default App
