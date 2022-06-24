import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppDrawerProvider, AppThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};
