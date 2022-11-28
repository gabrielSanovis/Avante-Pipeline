// LIBS
import { Link } from "react-router-dom"

// STYLES
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import { Context, IGlobalContext } from "../../context/Global";
import React from "react";

import { NavMobile } from "../../components/NavMobile";

export function Profile() {

  const { isOpen, setIsOpen } = React.useContext(Context) as IGlobalContext;

  return (
    <ThemeProvider theme={theme}>
      <NavMobile />
      <h1>Profile</h1>
      <button><Link to="/profile/update-profile">Update Profile</Link></button>
      <button><Link to="/profile/update-password">Update Password</Link></button>
    </ThemeProvider>
  )
}