import { Button } from "@mui/material";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages";
import { useAppThemeContext, useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen, setDrawerOptions, } = useDrawerContext();

  useEffect(()=>{
    setDrawerOptions([
      {
        label: "Página inicial",
        path: "/home",
        icon: 'home',
      },
      {
        label: "edgar",
        path: "/edgar",
        icon: 'star',
      }
    ]);
  },[])

  return (
    <Routes>
      <Route
        path="/home"
        element={<Home/>}   
      />
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
