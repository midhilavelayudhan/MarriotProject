import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MainRoutes from "../../Routes/MainRoutes";
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  AppBar: {
    background: "#2F4256",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    lineHeight: "1.25rem",
    fontSize: "1rem",
    whiteSpace: "nowrap",
    padding: " 15px",
  },
}));

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Container>
            <Toolbar className={classes.toolbar}>
              <Link to="/" className={classes.navLink}>
                Home
              </Link>
              <Link to="/photos" className={classes.navLink}>
                Photos
              </Link>
              <Link to="/room" className={classes.navLink}>
                Rooms
              </Link>
              <Link to="/dining" className={classes.navLink}>
                Dining
              </Link>
              <Link to="/fitness" className={classes.navLink}>
                Fitness
              </Link>
              <Link to="/local-area" className={classes.navLink}>
                Local Area
              </Link>
              <Link to="/map" className={classes.navLink}>
                Map
              </Link>
              <Link to="/meetings" className={classes.navLink}>
                Meetings
              </Link>
              <Link to="/wedding" className={classes.navLink}>
                Weddings
              </Link>
              <Link to="/offers" className={classes.navLink}>
                Offers
              </Link>
              <Link
                to="/"
                className={classes.signInBtn}
                style={{
                  color: "white",
                  display: "flex",
                  padding: "10px 15px",
                  textDecoration: "none",
                  fontSize: ".875rem",
                  background: "rgba(255,255,255,0.1)",
                  boxShadow: "inset 9999px 9999px hsl(0deg 0% 100% / 10%)",
                }}
              >
                <PersonOutlineOutlinedIcon />
                sign in or join
              </Link>
            </Toolbar>
            </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      {/* <Container> */}
        <MainRoutes />
        {/* </Container> */}
    </Router>
  );
}
