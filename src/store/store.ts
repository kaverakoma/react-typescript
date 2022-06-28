import { configureStore } from "@reduxjs/toolkit";
import sliceTipoVeiculos from "./slices/sliceTipoVeiculos"

const store = configureStore({
    reducer: {
        tipoVeiculos : sliceTipoVeiculos,
    },
});

export default store;