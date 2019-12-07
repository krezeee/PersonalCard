import React from "react";
import "./App.scss";
import {
  Box,
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import { Header } from "./components/header/Header";
import { Routes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["sans-serif", '"Montserrat"'].join(",")
  }
});

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Box className="app">
          <Routes />
        </Box>
      </Router>
    </MuiThemeProvider>
  );
};
