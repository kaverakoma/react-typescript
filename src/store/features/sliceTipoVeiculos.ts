import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TipoVeiculo } from "../../shared/services/api/ServiceTipoVeiculos";
import { TipoVeiculoService } from "../../shared/services/api/ServiceTipoVeiculos";

export interface TipoVeiculoState {
  list: TipoVeiculo[];
  isLoading: boolean;
  isSuccess: boolean;
  error: "";
}
const INITIAL_STATE: TipoVeiculoState = {
  list: [],
  isLoading: false,
  isSuccess: false,
  error: "",
};

export const getTipoVeiculos = createAsyncThunk(
  "tipoVeiculos/getTipoVeiculos",
  async () => {
    const response = TipoVeiculoService.getAll();
    return response;
  }
);

const sliceTipoVeiculos = createSlice({
  name: "tipoVeiculos",
  initialState: INITIAL_STATE,
  reducers: {
    // addTipoVeiculos(state, action) {
    //   return [...state, { id: action.payload, descricao: action.payload }];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getTipoVeiculos.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getTipoVeiculos.fulfilled, (state, action) => {
      const res = action.payload;
      if (res instanceof Error) {
        console.log(res.message);
      } else {
        state.list = res;
        state.isLoading = false;
      }
    });
  },
});

export default sliceTipoVeiculos.reducer;
