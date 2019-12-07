import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
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
    boxShadow: "none"
  }
});

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.nav} position="sticky">
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
            <SportsEsportsIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
