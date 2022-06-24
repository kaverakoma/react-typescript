import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <Button color="primary" onClick={toggleTheme}>
              Thema
            </Button>
            <Button color="primary" onClick={toggleDrawerOpen}>
              Menu
            </Button>
          </>
        }
      />
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
