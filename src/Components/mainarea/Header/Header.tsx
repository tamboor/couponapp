import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <AppBar position="fixed" >
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coupon Mania
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    );
}

export default Header;
