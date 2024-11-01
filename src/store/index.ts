import { configureStore } from '@reduxjs/toolkit'

import contatoreducer from './reducers/contatoreducers'

const store = configureStore({
  reducer: {
    contato: contatoreducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
