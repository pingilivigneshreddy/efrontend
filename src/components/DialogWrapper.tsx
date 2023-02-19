import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IDrawerWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  width?: "xs" | "sm" | "md" | "lg" | "xl";
}

function DialogWrapper(props: IDrawerWrapperProps) {
  const { open, setOpen, title, children, width = "sm" } = props;

  return (
    <Dialog
      maxWidth={width}
      fullWidth
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          display: "flex",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          p: "0.8rem 1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" fontSize="18px">
          {title}
        </Typography>

        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box p={2}>{children}</Box>
    </Dialog>
  );
}

export default DialogWrapper;
