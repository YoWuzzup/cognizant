import { Link } from "react-router-dom";
import { NavBarProps } from "../interfaces";

import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Badge,
  IconButton,
  BadgeProps,
  styled,
  Checkbox,
} from "@mui/material/";
import { ShoppingCart } from "@mui/icons-material/";

// Used default navbar from mui for easy styling

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const pages = {
  home: { name: "Home", url: "/" },
  cart: { name: "Cart", url: "/cart" },
};

export const NavBar: React.FC<NavBarProps> = ({ hide, setHide }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHide(!hide);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={pages.home.url} className="link">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                {pages.home.name}
              </Button>
            </Link>
            <Link to={pages.cart.url} className="link">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCart />
                </StyledBadge>
              </IconButton>
            </Link>

            <div style={{ margin: "0 0 0 20px" }}>Hide not licensed?</div>
            <Checkbox
              checked={hide}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
