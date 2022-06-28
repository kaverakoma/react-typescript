import { SentimentDissatisfied } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  useMediaQuery,
  TableContainer,
  IconButton,
  Icon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BarraDeFerramentasListagem } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";
import { TipoVeiculoService } from "../../shared/services/api/tipoVeiculo/TipoVeiculoService";
import { useTipoVeiculos } from "../../store/slices/sliceTipoVeiculos";
import { DetalheTipoVeiculos } from "./DetalheTipoVeiculo";

interface IListTipoVeiculos {
  id: number;
  descricao: string;
}

type tipoDetalhe = "novo" | "editar";

interface IDetalheTipoVeiculos {
  open: boolean;
  typeDialog: tipoDetalhe;
  idTipoVeiculo?: number;
}

export const TipoVeiculos: React.FC = () => {
  const theme = useTheme();
  const tipoVeiculos = useSelector(useTipoVeiculos)
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [listTipoVeiculos, setListTipoVeiculos] = useState<IListTipoVeiculos[]>(
    []
  );
  const [openDetatlhe, setOpenDetalhe] = useState<IDetalheTipoVeiculos>({
    open: false,
    typeDialog: "novo",
  });

  // useEffect(() => {
  //   TipoVeiculoService.getAll().then((result) => {
  //     if (result instanceof Error) {
  //       alert(result.message);
  //     } else {
  //       setListTipoVeiculos(result.data);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    TipoVeiculoService.getAll().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        setListTipoVeiculos(result.data);
      }
    });
  }, []);

  return (
    <LayoutBasePage
      barraDeFerramentas={
        <BarraDeFerramentasListagem
          mostrarInputBusca
          mostrarBotaoNovo
          aoClicarNoBotaoNovo={() =>
            setOpenDetalhe({ open: true, typeDialog: "novo", idTipoVeiculo: 0 })
          }
        />
      }
    >
      <TableContainer component={Paper}>
        <Table>
          {tipoVeiculos.length >= 1 && (
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Descrição</Typography>
                </TableCell>
                <TableCell width="130" align="center">
                  <Typography variant="h6">Ações</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {tipoVeiculos.length >= 1 &&
              tipoVeiculos.map((tipoVeiculo) => (
                <TableRow key={tipoVeiculo.id}>
                  <TableCell>{tipoVeiculo.descricao}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() =>setOpenDetalhe({ open: true, typeDialog: "editar", idTipoVeiculo: tipoVeiculo.id })}>
                      <Icon>edit</Icon>
                    </IconButton>
                    <IconButton>
                      <Icon>delete</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {tipoVeiculos.length < 1 && (
          <Box>
            <SentimentDissatisfied />{" "}
            <Typography variant="h6">
              Não existem tipos de veículos cadastrados.
            </Typography>
          </Box>
        )}
      </TableContainer>
      <DetalheTipoVeiculos
        open={openDetatlhe.open}
        close={() =>setOpenDetalhe({ open: false, typeDialog: "novo", idTipoVeiculo: 0 })}
        typeDialog={openDetatlhe.typeDialog}
        idTipoVeiculo={openDetatlhe.idTipoVeiculo}
      />
    </LayoutBasePage>
  );
};
