import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppDrawerProvider, AppThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components";
import { Provider } from "react-redux";
import store from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <AppDrawerProvider>
          <BrowserRouter>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>
          </BrowserRouter>
        </AppDrawerProvider>
      </AppThemeProvider>
    </Provider>
  );
};
