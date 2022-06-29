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
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getTipoVeiculos } from "../../store/features/sliceTipoVeiculos";
import { BarraDeFerramentasListagem } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";
import { DetalheTipoVeiculos } from "./DetalheTipoVeiculo";

type tipoDetalhe = "novo" | "editar";

interface IDetalheTipoVeiculos {
  open: boolean;
  typeDialog: tipoDetalhe;
  idTipoVeiculo?: number;
}

export const TipoVeiculos: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const tipoVeiculos = useAppSelector((state) => state.tipoVeiculos);
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDetatlhe, setOpenDetalhe] = useState<IDetalheTipoVeiculos>({
    open: false,
    typeDialog: "novo",
  });

  useEffect(() => {
    dispatch(getTipoVeiculos());
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
      {tipoVeiculos.isLoading ? (
        <Box component={Paper}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            {tipoVeiculos.list && tipoVeiculos.list.length >= 1 && (
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
              {tipoVeiculos.list &&
                tipoVeiculos.list.length >= 1 &&
                tipoVeiculos.list.map((tipoVeiculo) => (
                  <TableRow key={tipoVeiculo.id}>
                    <TableCell>{tipoVeiculo.descricao}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() =>
                          setOpenDetalhe({
                            open: true,
                            typeDialog: "editar",
                            idTipoVeiculo: tipoVeiculo.id,
                          })
                        }
                      >
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
          {tipoVeiculos.isLoading === false &&
            tipoVeiculos.list &&
            tipoVeiculos.list.length < 1 && (
              <Box>
                <SentimentDissatisfied />{" "}
                <Typography variant="h6">
                  Não existem tipos de veículos cadastrados.
                </Typography>
              </Box>
            )}
        </TableContainer>
      )}
      <DetalheTipoVeiculos
        open={openDetatlhe.open}
        close={() =>
          setOpenDetalhe({ open: false, typeDialog: "novo", idTipoVeiculo: 0 })
        }
        typeDialog={openDetatlhe.typeDialog}
        idTipoVeiculo={openDetatlhe.idTipoVeiculo}
      />
    </LayoutBasePage>
  );
};
