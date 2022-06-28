import { Box, Dialog, DialogContent, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TipoVeiculoService } from "../../shared/services/api/tipoVeiculo/TipoVeiculoService";

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
  console.log(open, typeDialog, idTipoVeiculo)
  // useEffect(() => {
  //   if (idTipoVeiculo !== 0) {
  //     TipoVeiculoService.getById(idTipoVeiculo).then((result) => {
  //       if (result instanceof Error) {
  //         alert(result.message);
  //       } else {
  //         console.log(result);
  //       }
  //     });
  //   }
  // }, [idTipoVeiculo]);

  return (
    <Box component={Paper} display="flex">
      {typeDialog === "novo" && idTipoVeiculo === 0 && (
        <Dialog fullWidth={true} maxWidth="md" open={open} onClose={close}>
          <DialogContent> Novo registro </DialogContent>
        </Dialog>
      )}
      {typeDialog === "editar" && idTipoVeiculo !== 0 && (
        <Dialog fullWidth={true} maxWidth="md" open={open} onClose={close}>
          <DialogContent> Editar registro </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};
