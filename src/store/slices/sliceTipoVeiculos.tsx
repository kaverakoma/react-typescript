import { createSlice } from "@reduxjs/toolkit";

interface TipoVeiculos {
  id?: number;
  descricao?: string;
}

const INITIAL_STATE: TipoVeiculos[] = [{ id: 1, descricao: "Edgar Pavão" }];

const sliceTipoVeiculos = createSlice({
  name: "tipoVeiculos",
  initialState: INITIAL_STATE,
  reducers: {
    addTipoVeiculos(state, action) {
      return [...state, { id: action.payload, descricao: action.payload }];
    },
  },
});

export default sliceTipoVeiculos.reducer;
export const { addTipoVeiculos } = sliceTipoVeiculos.actions;
export const useTipoVeiculos = (state: any) => {
  return state.tipoVeiculos as TipoVeiculos[];
};
