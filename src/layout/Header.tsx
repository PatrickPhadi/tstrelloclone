import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

const Header: React.FC = (): React.ReactElement => {
  return (
    <Navbar color="info" light={true}>
      <NavbarBrand href="/" className="ml-auto">
        Trello Clone
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
