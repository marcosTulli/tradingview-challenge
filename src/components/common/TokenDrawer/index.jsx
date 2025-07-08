import { Drawer, Box, Divider } from "@mui/material";
import useDisplayTokenData from "../hooks/useDisplayTokenData";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerBody } from "./DrawerBody";

const TokenDataDrawer = () => {
  const { isOpen, closeDisplay, selectedToken: token } = useDisplayTokenData();
  if (!token) return null;
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={closeDisplay}
      PaperProps={{
        sx: {
          backgroundColor: "black",
          color: "white",
          width: 350,
          borderLeft: "2px solid #00a3cc",
          fontFamily: "altivo",
        },
      }}
    >
      <Box p={2}>
        <DrawerHeader />
        <Divider sx={{ my: 2, backgroundColor: "#00a3cc" }} />
        <DrawerBody />
      </Box>
    </Drawer>
  );
};

export default TokenDataDrawer;
