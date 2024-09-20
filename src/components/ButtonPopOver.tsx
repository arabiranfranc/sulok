import { Box, Button, Grow, Paper, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const menu = [
  "Caffeinated",
  "Non Caffeinated",
  "Specials",
  "Staff",
  "Contacts",
];

const ButtonPopOver = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setChecked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box ref={ref} sx={{ position: "relative" }}>
      <Button onClick={() => setChecked((prev) => !prev)}>Menu</Button>

      <Grow in={checked} timeout={1000}>
        <Box
          sx={{
            position: "absolute",
            bottom: "100%", // Position above the button
            left: "50%",
            transform: "translateX(-50%)", // Center the dropdown
            zIndex: 100, // Ensure it appears above other content
          }}
        >
          {menu.map((item, index) => {
            return (
              <Paper
                key={index}
                sx={{
                  width: 140,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "white",
                  boxShadow: 3,
                  mb: 1,
                  whiteSpace: "nowrap",
                }}
              >
                <Typography variant="subtitle2">{item}</Typography>
              </Paper>
            );
          })}
        </Box>
      </Grow>
    </Box>
  );
};

export default ButtonPopOver;
