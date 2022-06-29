import { configureStore } from "@reduxjs/toolkit";
import sliceTipoVeiculos from "./features/sliceTipoVeiculos"

const store = configureStore({
    reducer: {
        tipoVeiculos : sliceTipoVeiculos,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;