// TokenDataDrawer.js
import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import useDisplayTokenData from "./hooks/useDisplayTokenData";

const TokenDataDrawer = () => {
  const { isOpen, closeDisplay, selectedToken } = useDisplayTokenData();

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeDisplay}>
      <Box width={300} p={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Details</Typography>
          <IconButton onClick={closeDisplay}>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />
        <>
          <Typography>Data 1</Typography>
          <Typography>Data 2</Typography>
        </>
      </Box>
    </Drawer>
  );
};

export default TokenDataDrawer;
