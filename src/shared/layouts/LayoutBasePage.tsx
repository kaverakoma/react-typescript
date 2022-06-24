import { Box } from "@mui/system";

interface ILayoutBasePage {
    children: React.ReactNode
}

export const LayoutBasePage: React.FC<ILayoutBasePage> = ({children}) =>{
    return (
        <Box height="100%">
            {children}
        </Box>
    );
}