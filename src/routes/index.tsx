import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Dashboard, TipoVeiculos } from "../pages";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página inicial",
        path: "/home",
        icon: "home",
      },
      {
        label: "Dashboard",
        path: "/dasboard",
        icon: "dashboard",
      },
      {
        label: "Tipo de Veiculos",
        path: "/tipoVeiculos",
        icon: "commute",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dasboard" element={<Dashboard />} />
      <Route path="/tipoVeiculos" element={<TipoVeiculos/>} />
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
