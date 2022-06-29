import { Box, Dialog, DialogContent, DialogTitle, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

type tipoDetalhe = "novo" | "editar";

interface IDetalheTipoVeiculosProps {
  open: boolean;
  typeDialog: tipoDetalhe;
  idTipoVeiculo?: number;
  close: () => void;
}

export const DetalheTipoVeiculos: React.FC<IDetalheTipoVeiculosProps> = ({
  open = false,
  typeDialog = "novo",
  idTipoVeiculo = 0,
  close,
}) => {
  return (
    <Box component={Paper} display="flex">
      {typeDialog === "novo" && idTipoVeiculo === 0 && (
        <Dialog fullWidth={true} maxWidth="md" open={open} onClose={close}>
          <DialogTitle>Novo Tipo de Veículo</DialogTitle>
          <DialogContent> Novo registro </DialogContent>
        </Dialog>
      )}
      {typeDialog === "editar" && idTipoVeiculo !== 0 && (
        <Dialog fullWidth={true} maxWidth="md" open={open} onClose={close}>
          <DialogTitle>Editar Tipo de Veículo</DialogTitle>
          <DialogContent> Editar registro </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};
