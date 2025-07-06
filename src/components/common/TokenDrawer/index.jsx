import { Drawer, Box, Divider } from "@mui/material";
import useDisplayTokenData from "../hooks/useDisplayTokenData";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerBody } from "./DrawerBody";

const TokenDataDrawer = () => {
  const { isOpen, closeDisplay, selectedToken: token } = useDisplayTokenData();
  if (!token) return null;
  return (
    <Drawer anchor="right" open={isOpen} onClose={closeDisplay}>
      <Box width={350} p={2}>
        <DrawerHeader />
        <Divider sx={{ my: 2 }} />
        <DrawerBody />
      </Box>
    </Drawer>
  );
};

export default TokenDataDrawer;
