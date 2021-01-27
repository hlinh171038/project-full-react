import React from 'react'
import styled from 'styled-components'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
function Header() {
    return (
        <HeaderWarp>
            <Navbar expand="md">
                <NavbarBrand className="font-root-title">reactstrap</NavbarBrand>
                <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink >Components</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink >GitHub</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </HeaderWarp>
    )
}

export default Header
 const HeaderWarp = styled.div`
   background:var(--mainBlue);
   color:var(--mainWhite);
 `
