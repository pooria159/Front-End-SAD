import React from "react";
import {
    Box,
    AppBar,
    Button,
    Menu,
    MenuItem,
    Toolbar,
    IconButton,
    Typography,
    ListItemIcon,
} from "@mui/material";

import {
    BsHouse,
    BsAirplane,
    BsBuilding,
    BsSticky,
    BsQuote,
    BsBricks,
    BsPersonFill,
} from "react-icons/bs";
import SearchBar from "./Searchbar";
import "../../Styles/NavigationBar/NavigationBar.scss";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { BsList } from "react-icons/bs";
const Pages = [
    {
        Page: "Home",
        Route: "#",
        Icon: BsHouse,
    },
    {
        Page: "Tours",
        Route: "#Tours",
        Icon: BsAirplane,
    },
    {
        Page: "Agencies",
        Route: "#Agencies",
        Icon: BsBuilding,
    },
    {
        Page: "Blog",
        Route: "#BLog",
        Icon: BsQuote,
    },
    {
        Page: "Posts",
        Route: "#Posts",
        Icon: BsSticky,
    },
    {
        Page: "About Us",
        Route: "#AboutUs",
        Icon: BsBricks,
    },
];
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isDarkMode, setDarkMode] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleDarkMode = (checked) => {
        setDarkMode(checked);
    };
    return (
        <AppBar
            sx={{
                bgcolor: "#1BA291ff",
                opacity: "85%",
            }}
            position="sticky"
        >
            <Toolbar
                sx={{
                    justifyContent: "center",
                }}
            >
                <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <BsList />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        <MenuItem
                            onClick={handleCloseNavMenu}
                            sx={{
                                m: (0.5, 1),
                                borderRadius: 1.2,
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(186, 232, 219, 0.438)",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <BsPersonFill />
                            </ListItemIcon>
                            <Typography className="menuItem-typo" textAlign="center">Profile</Typography>
                        </MenuItem>
                        {Pages.map((page) => (
                            <>
                                <MenuItem
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        m: (0.5, 1),
                                        borderRadius: 1.2,
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(186, 232, 219, 0.438)",
                                        },
                                    }}
                                >
                                    <ListItemIcon >{<page.Icon />}</ListItemIcon>
                                    <Typography className="menuItem-typo" textAlign="center">
                                        {page.Page}
                                    </Typography>
                                </MenuItem>
                            </>
                        ))}
                    </Menu>
                </Box>

                <SearchBar></SearchBar>
                <Box
                    sx={{
                        marginLeft: "4vw",
                        display: { md: "block", xs: "none" },
                    }}
                >
                    {Pages.map((page) => (
                        <Button
                            className="navbar-button"
                            sx={{
                                fontSize: { lg: "larger", md: "large" },
                                marginRight: {
                                    xl: "4vw",
                                    lg: "2.5vw",
                                    md: "0.2vw",
                                },
                            }}
                        >
                            {page.Page}
                        </Button>
                    ))}
                </Box>
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={handleDarkMode}
                    sunColor="#BAE8DBff"
                    moonColor="#BAE8DBff"
                    size={35}
                    style={{ marginLeft: "2rem" }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
