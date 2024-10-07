import { Box, Button, Grow, Link, Paper, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const menu = ["Caffeinated", "Non Caffeinated", "Specials", "Contacts"];

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
      <Button
        onClick={() => setChecked((prev) => !prev)}
        sx={{
          borderRadius: "16px",
          border: 5,
          borderColor: "#942b04",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px", //
        }}
      >
        <img
          alt="menu"
          src="/assets/sulokicon.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            background: "#e5dfcc",
            borderRadius: "10px",
          }}
        />
      </Button>

      <Grow in={checked} timeout={1000}>
        <Box
          sx={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
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
                  bgcolor: "#e5dfcc",
                  boxShadow: 3,
                  fontSize: "16px",
                  fontWeight: "24px",
                  mb: 1,
                  whiteSpace: "nowrap",
                }}
              >
                <Link
                  href={`#${item}`}
                  sx={{ textDecoration: "none", color: "#942b04" }}
                >
                  <Typography variant="subtitle2">{item}</Typography>
                </Link>
              </Paper>
            );
          })}
        </Box>
      </Grow>
    </Box>
  );
};

export default ButtonPopOver;
