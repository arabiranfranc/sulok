import {
  Facebook,
  Instagram,
  LocationOn,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ padding: "30px" }} id="Contacts">
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
        <Box sx={{ display: "flex" }}>
          <PhoneAndroid />
          <Typography>+639165831311</Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <LocationOn />
          <Typography>Sa Sulok Fernandez, Taguig</Typography>
        </Box>
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
        <Facebook sx={{ cursor: "pointer" }} />
        <Instagram sx={{ cursor: "pointer" }} />
        <Twitter sx={{ cursor: "pointer" }} />
      </Box>
      <Box className="text-center">
        <p className="text-md my-3 opacity-50">
          &copy; {new Date().getFullYear()} Sulok. All rights reserved.
        </p>
      </Box>
    </Box>
  );
}
