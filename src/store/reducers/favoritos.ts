import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritarState = {
  itens: Produto[]
}

//  foi criado um array com estado  inicial para itens
const initialState: favoritarState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionar1: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já favoritado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar1 } = favoritoSlice.actions

export default favoritoSlice.reducer
