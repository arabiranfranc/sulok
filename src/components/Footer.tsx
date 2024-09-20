import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ padding: "30px" }}>
      <Box
        sx={{
          bgcolor: "#fff",
          width: 1,
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          margin: "16px 0",
        }}
      >
        <Typography>0999999999</Typography>
        <Typography>Taguig</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          width: 1,
          display: "flex",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        <Facebook />
        <Instagram />
        <Twitter />
      </Box>
      <Box className="text-center">
        <p className="text-md my-3 opacity-50">
          &copy; {new Date().getFullYear()} Sulok. All rights reserved.
        </p>
      </Box>
    </Box>
  );
}
