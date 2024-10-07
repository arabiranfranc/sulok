import {
  Facebook,
  Instagram,
  LocationOn,
  PhoneAndroid,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ padding: "20px" }} id="Contacts">
      <Stack
        sx={{
          bgcolor: "#fff",
          width: 1,
        }}
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-end",
            },
            width: "100%",
          }}
        >
          <PhoneAndroid />
          <Typography>+639165831311</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },
            width: "100%",
          }}
        >
          <LocationOn />
          <Typography noWrap>Sa Sulok Fernandez, Taguig</Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          bgcolor: "#fff",
          width: 1,
          display: "flex",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        <a
          href={`https://www.facebook.com/kape.sa.sulok`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <Facebook sx={{ color: "inherit" }} />
        </a>
        <a
          href={`https://www.instagram.com/sa.sulok`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <Instagram sx={{ color: "inherit" }} />
        </a>
      </Box>
      <Box className="text-center">
        <p className="text-md my-3 opacity-50">
          &copy; {new Date().getFullYear()} Sulok. All rights reserved.
        </p>
      </Box>
    </Box>
  );
}
