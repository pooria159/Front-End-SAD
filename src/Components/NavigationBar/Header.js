import React from "react";
import "../../Styles/NavigationBar/NavigationBar.scss";
import UserInfo from "./UserInfo";
import {
    AppBar,
    Toolbar,
    Box,
    Avatar,
    Typography,
    Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import myimg from "../../Static/mylady.jpg";
import logo from "../../Static/Logo.png"
const Header = () => {
    let theme = useTheme()
    return (
        <>
            <AppBar
                position="static"
                className="header-container-light"
                color="inherit"
                elevation={0}
                sx={{
                    [theme.breakpoints.down('md')]: {
                        display: 'none'
                    }
                }}
            >
                <Toolbar disableGutters>
                    <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item>
                            <Box px={10} py={1.2}>
                                <Grid container alignItems="center">
                                    <Grid item >
                                        <Avatar
                                            src={logo}
                                            sx={{
                                                display: "flex",
                                                mr: 1,
                                                width: 100,
                                                height: 100,
                                                // borderRadius:0
                                            }}
                                        ></Avatar>
                                    </Grid>
                                    <Grid item justifyContent="center">
                                        <Typography
                                            sx={{
                                                mr: 2,
                                                display: "flex",
                                                fontFamily: "Roboto",
                                                fontWeight: "bolder",
                                                letterSpacing: ".1rem",
                                                color: "#1BA291ff",
                                                textDecoration: "'none',",
                                                fontSize: "3.5rem",
                                            }}
                                        >
                                            Troy
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item >
                            <Box px={10}>
                                <UserInfo
                                    firstName={localStorage.getItem("username")}
                                    lastName=""
                                    id={localStorage.getItem("username")}
                                    // avatarpath={}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <AppBar
                position="static"
                className="header-container-light"
                color="inherit"
                elevation={0}
                sx={{
                    [theme.breakpoints.down('md')]: {
                        display: 'block'
                    },
                    [theme.breakpoints.up('md')]: {
                        display: 'none'
                    }
                }}
            >
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item >
                            <Avatar
                                src={logo}
                                sx={{
                                    display: "flex",
                                    mr: 1,
                                    width: 100,
                                    height: 100
                                }}
                            ></Avatar>
                        </Grid>
                        <Grid item justifyContent="center">
                            <Typography
                                sx={{
                                    mr: 2,
                                    display: "flex",
                                    fontFamily: "Roboto",
                                    fontWeight: "bolder",
                                    letterSpacing: ".1rem",
                                    color: "#1BA291ff",
                                    textDecoration: "'none',",
                                    fontSize: "3.5rem",
                                }}
                            >
                                Troy
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
