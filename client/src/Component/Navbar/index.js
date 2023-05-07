import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AuthenticationService from "../../Services/AuthenticationService";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import UserService from "../../Services/UserService";
import ListItemIcon from "@mui/material/ListItemIcon";
import Person from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import { Link, useHistory } from "react-router-dom";
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from '@mui/icons-material/Menu';

import "./Navbar.css";

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar() {
  const history = useHistory();
  const goToTop = () => {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  const [userName, setuserName] = useState(UserService.getUsername());
  // const [sidebar,setsidebar] = useState(false)
  const [LoggedIn, setLoggedIn] = useState(false);
  const [useranchorEl, setuserAnchorEl] = useState(null);
  const openUserDropdown = Boolean(useranchorEl);

  const handleDropdownClick = (event) => {
    setuserAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setuserAnchorEl(null);
  };
  //   window.addEventListener("scroll",function () {
  //     const header = document.querySelector(".header1");
  //     header.classList.toggle("active", window.screenY > 200);
  // })

  const [notificationanchorEl, setnotificationAnchorEl] = useState(null);
  const openNotificationDropdown = Boolean(notificationanchorEl);

  const handleNotificationClick = (event) => {
    setnotificationAnchorEl(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setnotificationAnchorEl(null);
  };

  useEffect(() => {
    (async () => {
      const loggedIn = await AuthenticationService.isUserLoggedIn();
      if (loggedIn) setLoggedIn(true);
    })();
  }, [LoggedIn]);

  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: "white" }}>
        <nav className="header1">
          <Link href="/">
            <img
              id="logo"
              src={process.env.PUBLIC_URL + "/assets/logo11.jpg"}
              alt="logo"
            />
          </Link>
          <div id="mySidenav" className="sidenav">
            {LoggedIn ? (
              <Stack
                direction="row"
                spacing={7}
                justifyContent="center"
                alignItems="center"
              >
                <Badge
                  id="notification-button"
                  aria-controls={
                    openNotificationDropdown ? "notification-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openNotificationDropdown ? "true" : undefined}
                  onClick={handleNotificationClick}
                  variant="dot"
                  color="warning"
                  title="Notifications"
                  sx={{ cursor: "pointer" }}
                >
                  <NotificationsIcon color="action" />
                </Badge>
                <Menu
                  id="notification-menu"
                  anchorEl={notificationanchorEl}
                  open={openNotificationDropdown}
                  onClose={handleNotificationClose}
                  MenuListProps={{
                    "aria-labelledby": "notification-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleNotificationClose}>
                    Notification 1
                  </MenuItem>
                  <MenuItem onClick={handleNotificationClose}>
                    Notification 2
                  </MenuItem>
                  <MenuItem onClick={handleNotificationClose}>
                    Notification 3
                  </MenuItem>
                </Menu>

                <Stack
                  id="user-button"
                  aria-controls={openUserDropdown ? "user-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openUserDropdown ? "true" : undefined}
                  onClick={handleDropdownClick}
                  direction="row"
                  spacing={1}
                  sx={{ cursor: "pointer" }}
                  title="Account settings"
                >
                  <Avatar
                    sx={{ width: 40, height: 40, bgcolor: "#c6414c" }}
                    {...stringAvatar(setuserName)}
                  />
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      verticalAlign: "middle",
                      fontSize: "17px",
                    }}
                  >
                    {userName}
                  </Paper>
                </Stack>
                <Menu
                  id="user-menu"
                  anchorEl={useranchorEl}
                  open={openUserDropdown}
                  onClose={handleDropdownClose}
                  MenuListProps={{
                    "aria-labelledby": "user-button",
                  }}
                >
                  <MenuItem
                    onClick={(e) => {
                      window.open("/dashboard", "_self");
                    }}
                  >
                    <ListItemIcon>
                      <Person fontSize="small" />
                    </ListItemIcon>
                    My account
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      window.open("/dashboard/settings", "_self");
                    }}
                  >
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      AuthenticationService.logout();
                      window.location.reload();
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Stack>
            ) : (
              // <button id='logout' onClick={(e) => {AuthenticationService.logout(); window.location.reload();}}>SignOut</button>
              <div className='navbar-wrapper'>
                {/* <div className='nav'> */}
                {/* <ul className={sidebar ? "nav_links_sidebar" : "nav_links"} onClick={() => setsidebar(false)}> */}
                <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="donors-signup"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  {" "}
                  Register
                </Link>
                {/* <button onClick={(e) => {window.open('/signin', '_self');}}>Login</button> */}
                <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="signin"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Log In
                </Link>
                <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
                <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="/"
                  onClick={goToTop}
                >
                  Diamonds
                </Link>
                {/* <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="hospital-signup"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  For Hospital
                </Link> */}
                <select
                    id="select-option"
                    style={{ width: '150px'}}
                    value={''}
                    onChange={(e) =>  history.push(e.target.value)}
                  >
                    <option value="">Hospital</option>
                    <option value="/hospital-signup">Registration</option>
                    <option value="/hospital-signin">Login</option>
                  </select>
                {/* <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="blood-camp-registration"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Blood Camp Organisation
                </Link> */}
                  <select
                    id="select-option"
                    style={{ width: '150px'}}
                    value={''}
                    onChange={(e) =>  history.push(e.target.value)}
                  >
                    <option value="">Blood Camp</option>
                    <option value="/blood-camp-signup">Registration</option>
                    {/* <option value="/blood-camp-signin">Login</option> */}
                  </select>
                {/* <Link className="nav_links clr_chng hover-underline-animation" to='blood-camp-registration' onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Blood Camp Organisation</Link> */}
                {/* <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="blood-bank-signup"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  For Blood Bank
                </Link> */}
                <select
                    id="select-option"
                    style={{ width: '150px'}}
                    value={''}
                    onChange={(e) =>  history.push(e.target.value)}
                  >
                    <option value="">Blood Bank</option>
                    <option value="/blood-bank-signup">Registration</option>
                    <option value="/blood-bank-signin">Login</option>
                  </select>

                <Link
                  className="nav_links clr_chng hover-underline-animation"
                  to="about"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About Us
                </Link>
                {/* </ul> */}
                {/* </div> */}
              </div>
            )}
            {/* <button className="navbar-items-icon" onClick={() => setsidebar(!sidebar)}>
                            {sidebar ? <CloseIcon /> : <MenuIcon />}
                        </button> */}
          </div>
        </nav>
      </AppBar>
    </HideOnScroll>
  );
}
