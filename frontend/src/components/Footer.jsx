import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      className="text-center"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
        position: "relative",
        bottom: 0,
        width: "100%",
        mt: 4,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} TeamExpenseTracker · Built by Akash Verma
      </Typography>
    </Box>
  );
};

export default Footer;
