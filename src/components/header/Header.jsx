import React from "react";
import { AppBar, Toolbar, IconButton, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    zIndex: 1,
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.nav} position="static">
      <Toolbar>
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/about">
          <IconButton>
            <SchoolIcon />
          </IconButton>
        </Link>
        <Link to="/projects">
          <IconButton>
            <WorkIcon />
          </IconButton>
        </Link>
        <Link to="/game">
          <IconButton>
            <Badge badgeContent={"beta"} color="primary">
              <SportsEsportsIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
