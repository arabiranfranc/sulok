import { Box, Card, Stack, Typography } from "@mui/material";
import { staffs } from "../data/caffeinated";

interface StaffProps {
  name: string;
  imgUrl: string;
  position: string;
}

const Staff: React.FC = () => {
  return (
    <Card
      sx={{
        bgcolor: "rgb(254 215 170)",
        padding: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        gap: "16px",
        marginTop: "20px",
        position: "relative", // Set position to relative
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "20%", // Adjust width as needed
          height: { xs: "20%", sm: "50%" }, // Adjust height as needed
          borderLeft: "4px solid rgb(124, 45, 18)", // Left border
          borderBottom: "4px solid rgb(124, 45, 18)", // Bottom border
          zIndex: 1, // Send it behind the card content
        },
      }}
    >
      <Box
        sx={{
          mb: 2,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Our Staff</Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
      >
        {staffs.map((staff: StaffProps, index: number) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "30%" },
              textAlign: "center",
              padding: { xs: 1, sm: 2 },
            }}
          >
            <Stack alignItems="center">
              {/* Stack to align items vertically */}
              <Box
                component="img"
                src={staff.imgUrl}
                alt={staff.name}
                sx={{
                  borderRadius: "50%",
                  width: { xs: 80, sm: 100 },
                  height: { xs: 80, sm: 100 },
                  objectFit: "cover",
                  mb: 1,
                  border: "4px rgb(124 45 18) solid",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
              >
                {staff.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
              >
                {staff.position}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};

export default Staff;
