import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Button color="primary">TESTE</Button>} />
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
