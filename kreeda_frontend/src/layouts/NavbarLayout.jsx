import React from 'react';
import Navbar from '../sections/Navbar'; // Import your Navbar
import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom

const NavbarLayout = () => {
  return (
    <>
      <Navbar /> {/* This Navbar will always be rendered */}
      <Outlet /> {/* This renders the child routes (Home, FitnessPage, etc.) */}
    </>
  );
};

export default NavbarLayout;
