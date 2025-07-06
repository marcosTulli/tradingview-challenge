import { Box, Typography } from "@mui/material";
import useDisplayTokenData from "../hooks/useDisplayTokenData";
import { svg2img } from "utils/randomAvatar";

export const DrawerBody = () => {
  const { selectedToken: token, tokenMetadata } = useDisplayTokenData();
  if (!token) return null;

  const logo = token.logo
    ? `https://assets.thetatoken.org/tokens/${token.logo}`
    : svg2img(token);

  return (
    <>
      <Box id="title" display="flex" alignItems="center" mb={2}>
        <img
          src={logo}
          alt="token-logo"
          style={{
            width: 40,
            height: 40,
            marginRight: 16,
            borderRadius: "50%",
          }}
        />
        <Typography variant="subtitle1" className="font-header" color="white">
          {token.name}
        </Typography>
      </Box>

      <Box id="data">
        {tokenMetadata.map(({ label, value }) => (
          <Typography
            key={label}
            className="font-regular"
            sx={{
              mb: 1,
              color: "white",
              fontSize: "0.95rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#00a3cc" }}>{label}:</span>
            <span>{value}</span>
          </Typography>
        ))}
      </Box>
    </>
  );
};
