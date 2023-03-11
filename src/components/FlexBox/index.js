import { Box } from "@mui/material";

function FlexBox({ children, gap, direction, grow, align, justify, sx, ...props }) {
  return(
    <Box
      {...props}
      sx={{
        display: "flex",
        gap: gap,
        flexDirection: direction,
        flexGrow: grow,
        alignItems: align,
        justifyContent: justify,
        ...sx
      }}
    >
      {children}
    </Box>
  );
}

export default FlexBox;